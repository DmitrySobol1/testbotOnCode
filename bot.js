// const { Telegraf } = require('telegraf')
const { Telegraf, Markup } = require('telegraf');
const { message } = require('telegraf/filters');
const axios = require ('axios');

const bot = new Telegraf('7700803351:AAGp5YdIcT49DM3MyjyPSGmcvpePdFLtML4')


// bot.start((ctx) => ctx.reply('this is startGit'))
// bot.help((ctx) => ctx.reply('this is helpGit'))

// bot.on('message', async (ctx) => {
//     // console.log (ctx);
//     // const id = ctx.message.from.id;
//     const url = 'https://api.telegram.org/bot7700803351:AAGp5YdIcT49DM3MyjyPSGmcvpePdFLtML4/sendMessage?chat_id=412697670&text=yo';
//     const response = await axios.get(url);
//     console.log(response);
// })

// bot.launch()

// // Enable graceful stop
// process.once('SIGINT', () => bot.stop('SIGINT'))
// process.once('SIGTERM', () => bot.stop('SIGTERM'))
// ===

bot.help((ctx) => {
    ctx.reply('This is help2', Markup.inlineKeyboard([
        Markup.button.callback('Click me', 'button_click')
    ]));
});

bot.action('button_click', (ctx) => {
    ctx.reply('Button clicked!');
    console.log (ctx.update);
    var qid = ctx.update.callback_query.id;
    // var id = 412697670;
    // const url = `https://api.telegram.org/bot7700803351:AAGp5YdIcT49DM3MyjyPSGmcvpePdFLtML4/sendMessage?chat_id=${id}&text=fromCode`;
    const url = `https://api.telegram.org/bot7700803351:AAGp5YdIcT49DM3MyjyPSGmcvpePdFLtML4/answerCallbackQuery?callback_query_id=${qid}&text=hello&show_alert=true`;
    axios.get(url);

});




bot.launch();
