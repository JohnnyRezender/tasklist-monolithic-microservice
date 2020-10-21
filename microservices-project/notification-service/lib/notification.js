import  TelegramBot from 'node-telegram-bot-api';

const token  = process.env.API_TOKEN_TELEGRAM;
const chatId = process.env.CHATID_TELEGRAM;
const bot    = new TelegramBot(token, { polling: true });

export default {
    send(message) {
        bot.sendMessage(chatId,`${message}`);
    }
}
