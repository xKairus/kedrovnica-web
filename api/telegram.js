export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // 1. Получаем данные
  const { name, phone, message, service, price } = req.body;

  // 2. Берем ключи из переменных окружения
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.error('Telegram keys missing!');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  // 3. Формируем сообщение
  const text = `
🌿 <b>Новая заявка с сайта!</b>

👤 <b>Имя:</b> ${name}
📞 <b>Телефон:</b> ${phone}
💆‍♀️ <b>Услуга:</b> ${service}
💰 <b>Цена:</b> ${price ? price + ' ₽' : 'Не указана'}
💬 <b>Комментарий:</b> ${message || 'Нет'}
`;

  try {
    // 4. Отправляем в Telegram
    const telegramResponse = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: 'HTML', 
      }),
    });

    const result = await telegramResponse.json();

    if (!telegramResponse.ok) {
      console.error('Telegram API Error:', result);
      throw new Error(result.description || 'Failed to send to Telegram');
    }

    // 5. Успех
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Handler Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}