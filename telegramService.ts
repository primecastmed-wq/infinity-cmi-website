export const sendTelegramNotification = async (message: string) => {
  try {
    const response = await fetch('/api/telegram', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
    });

    if (response.ok) {
      const data = await response.json();
      return data.success;
    }
    return false;
  } catch (error) {
    console.error('[Telegram] Ошибка отправки:', error);
    return false;
  }
};

export const formatLeadMessage = (data: any) => {
  return `🚀 <b>НОВАЯ ЗАЯВКА CMI</b>\n\n👤 Имя: ${data.name}\n📞 Контакт: ${data.contact}\n🏢 Компания: ${data.company || 'Не указана'}\n📊 Статус: ${data.status || 'Стандартный'}\n📝 Детали: ${data.details || 'Не указаны'}\n📍 Источник: ${data.source}`;
};
