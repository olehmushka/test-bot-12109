module.exports = {
  PORT: process.env.PORT,
  TELEGRAM_TOKEN: process.env.TELEGRAM_TOKEN,
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
  APP_URL: `https://${process.env.HEROKU_APP_NAME}.herokuapp.com:433`,
};
