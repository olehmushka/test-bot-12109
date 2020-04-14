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

bot.on('message', function onMessage(msg) {
  bot.sendMessage(msg.chat.id, 'Hello world!!');
});
