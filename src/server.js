const TelegramBot = require('node-telegram-bot-api');
const { PORT, TELEGRAM_TOKEN, APP_URL } = require('./config');

console.log({ PORT, TELEGRAM_TOKEN, APP_URL });

const options = {
  webHook: {
    port: PORT,
  },
};

const bot = new TelegramBot(TELEGRAM_TOKEN, options);

bot.setWebHook(`${APP_URL}/bot${TELEGRAM_TOKEN}`);

bot.on('message', (msg) => {
  bot.sendMessage(msg.chat.id, 'Hello world!!');
});

bot.on('error', (err) => {
  console.log('Error:', err);
});

process.on('uncaughtException', (err, origin) => {
  if (err) {
    console.log('Error:', err);
  }
  console.log('Origin:', origin);
});

process.on('unhandledRejection', (reason, promise) => {
  console.log('Unhandled Rejection at:', promise, 'reason:', reason);
  // Application specific logging, throwing an error, or other logic here
});
