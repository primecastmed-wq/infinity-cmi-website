import { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, contact, contactType, company, status, details, source } = req.body;

    // AmoCRM credentials from environment variables
    const AMOCRM_SUBDOMAIN = process.env.AMOCRM_SUBDOMAIN || 'cmicompany26';
    const AMOCRM_ACCESS_TOKEN = process.env.AMOCRM_ACCESS_TOKEN;

    if (!AMOCRM_ACCESS_TOKEN) {
      console.error('❌ AmoCRM Access Token not configured');
      return res.status(500).json({ 
        success: false, 
        error: 'AmoCRM not configured. Please add AMOCRM_ACCESS_TOKEN to environment variables.' 
      });
    }

    // Determine priority based on status
    const priority = status?.toLowerCase().includes('критич') ? 'Критический' : 'Средний';

    // Create lead in AmoCRM
    const leadData = {
      name: `${name} - ${source}`,
      price: 0,
      custom_fields_values: [
        {
          field_code: 'PHONE',
          values: [
            {
              value: contactType === 'Phone' ? contact : '',
              enum_code: 'WORK'
            }
          ]
        }
      ],
      _embedded: {
        tags: [
          {
            name: source
          },
          {
            name: priority
          }
        ]
      }
    };

    // Add notes with details
    const noteText = `Компания: ${company || 'Не указана'}\nКонтакт: ${contact} (${contactType})\nСтатус: ${status}\nДетали: ${details || 'Не указаны'}`;

    const amocrmResponse = await fetch(
      `https://${AMOCRM_SUBDOMAIN}.amocrm.ru/api/v4/leads`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${AMOCRM_ACCESS_TOKEN}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify([leadData])
      }
    );

    const responseData = await amocrmResponse.json();

    if (!amocrmResponse.ok) {
      console.error('❌ AmoCRM API Error:', responseData);
      return res.status(500).json({ 
        success: false, 
        error: 'Failed to create lead in AmoCRM',
        details: responseData 
      });
    }

    // Add note to the created lead
    if (responseData._embedded?.leads?.[0]?.id) {
      const leadId = responseData._embedded.leads[0].id;
      
      await fetch(
        `https://${AMOCRM_SUBDOMAIN}.amocrm.ru/api/v4/leads/${leadId}/notes`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${AMOCRM_ACCESS_TOKEN}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify([
            {
              note_type: 'common',
              params: {
                text: noteText
              }
            }
          ])
        }
      );
    }

    console.log('✅ Lead created in AmoCRM:', responseData);
    return res.status(200).json({ success: true, data: responseData });

  } catch (error) {
    console.error('❌ AmoCRM API Handler Error:', error);
    return res.status(500).json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    });
  }
}
