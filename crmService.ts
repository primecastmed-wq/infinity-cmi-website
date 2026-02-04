
export interface CRMLead {
  id: string;
  name: string;
  email?: string;
  phone: string;
  company: string;
  status: string;
  priority: 'Низкий' | 'Средний' | 'Высокий' | 'Критический';
  description: string;
  source: string;
  createdAt: string;
  metadata?: Record<string, any>;
}

/**
 * Отправляет данные о листе в CRM через BroadcastChannel 'infinity_crm_leads'
 */
export const sendLeadToCRM = (data: {
  name: string;
  contact: string;
  contactType: 'Phone' | 'Telegram';
  company?: string;
  status?: string;
  details?: string;
  source: string;
  metadata?: Record<string, any>;
}) => {
  try {
    const channel = new BroadcastChannel('infinity_crm_leads');
    
    const leadObj: CRMLead = {
      id: Math.random().toString(36).substring(2, 11),
      name: data.name,
      phone: data.contact,
      company: data.company || 'Не указана',
      status: 'Новая',
      priority: data.status?.toLowerCase().includes('критич') ? 'Критический' : 'Средний',
      description: data.details || `Заявка из источника: ${data.source}. Связь: ${data.contactType}`,
      source: data.source,
      createdAt: new Date().toISOString(),
      metadata: data.metadata
    };
    
    // Отправка в формате, затребованном CRM
    channel.postMessage({ 
      type: 'new_lead', 
      lead: leadObj 
    });
    
    console.log('🚀 [CRM Sync] Данные успешно транслированы:', leadObj);
    
    // Закрываем канал для оптимизации памяти
    setTimeout(() => channel.close(), 1000);
    return true;
  } catch (error) {
    console.error('❌ [CRM Sync] Ошибка трансляции:', error);
    return false;
  }
};
