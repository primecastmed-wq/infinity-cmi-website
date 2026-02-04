
const BOT_TOKEN = '8586331958:AAGIuCPZUuwmeOT0Kv5zBjlQzYfHVCsZoi8';
const RECIPIENTS = ['854248885', '728238305'];

export const sendTelegramNotification = async (message: string) => {
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
  try {
    const sendPromises = RECIPIENTS.map(chatId => 
      fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text: message, parse_mode: 'HTML' }),
      })
    );
    const results = await Promise.all(sendPromises);
    return results.some(res => res.ok);
  } catch (error) {
    return false;
  }
};

export const formatLeadMessage = (data: any) => {
  return `🚀 <b>НОВАЯ ЗАЯВКА</b>\n👤 Имя: ${data.name}\n📞 Контакт: ${data.contact}\n📍 Источник: ${data.source}`;
};
