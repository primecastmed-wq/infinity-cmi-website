// CRM Listener - принимает данные из BroadcastChannel и отправляет в AmoCRM

interface CRMLead {
  id: string;
  name: string;
  email?: string;
  phone: string;
  company?: string;
  status: string;
  priority: string;
  description: string;
  source: string;
  createdAt: string;
  metadata?: any;
}

// Инициализация слушателя BroadcastChannel
const initCRMListener = () => {
  try {
    const channel = new BroadcastChannel('infinity_crm_leads');

    channel.onmessage = (event) => {
      console.log('📩 [CRM Listener] Получены данные:', event.data);

      if (event.data.type === 'new_lead') {
        const lead = event.data.lead as CRMLead;
        sendToAmoCRM(lead);
      }
    };

    console.log('✅ [CRM Listener] Инициализирован и слушает канал infinity_crm_leads');
  } catch (error) {
    console.error('❌ [CRM Listener] Ошибка инициализации:', error);
  }
};

// Отправка лида в AmoCRM через виджет
const sendToAmoCRM = (lead: CRMLead) => {
  try {
    // Проверяем наличие глобального объекта AmoCRM
    const amoForms = (window as any).amo_forms_ || {};
    
    console.log('📤 [AmoCRM] Отправка лида:', lead);

    // Метод 1: Через виджет AmoCRM Forms
    if (amoForms.load) {
      amoForms.load({
        id: '1109522', // ID формы из index.html
        data: {
          name: lead.name,
          phone: lead.phone,
          email: lead.email || '',
          company: lead.company || '',
          note: lead.description || lead.source
        }
      });
      console.log('✅ [AmoCRM] Лид отправлен через виджет');
    } else {
      console.warn('⚠️ [AmoCRM] Виджет не загружен, лог данных:', lead);
    }

  } catch (error) {
    console.error('❌ [AmoCRM] Ошибка отправки:', error);
  }
};

// Запуск слушателя
export const startCRMListener = () => {
  if (typeof window !== 'undefined') {
    initCRMListener();
  }
};

// Автозапуск при загрузке модуля
if (typeof window !== 'undefined') {
  startCRMListener();
}
