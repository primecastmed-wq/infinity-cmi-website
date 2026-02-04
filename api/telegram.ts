import type { VercelRequest, VercelResponse } from '@vercel/node';

const BOT_TOKEN = '8586331958:AAGIuCPZUuwmeOT0Kv5zBjlQzYfHVCsZoi8';
const RECIPIENTS = ['854248885', '728238305'];

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const sendPromises = RECIPIENTS.map(chatId =>
      fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text: message, parse_mode: 'HTML' }),
      })
    );

    const results = await Promise.all(sendPromises);
    const success = results.some(res => res.ok);

    if (success) {
      return res.status(200).json({ success: true });
    } else {
      return res.status(500).json({ error: 'Failed to send notifications' });
    }
  } catch (error) {
    console.error('Telegram API Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
