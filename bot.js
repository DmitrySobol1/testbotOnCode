// const { Telegraf } = require('telegraf')
const { Telegraf, Markup } = require('telegraf');
const { message } = require('telegraf/filters');
const axios = require ('axios');

const bot = new Telegraf('')


bot.start((ctx) => ctx.reply('this is startGit'))
// bot.help((ctx) => ctx.reply('this is helpGit'))

// bot.on('message', async (ctx) => {
//     // console.log (ctx);
//     // const id = ctx.message.from.id;
//     const url = 'https://api.telegram.org/bot
/sendMessage?chat_id=&text=yo';
//     const response = await axios.get(url);
//     console.log(response);
// })

// bot.launch()

// // Enable graceful stop
// process.once('SIGINT', () => bot.stop('SIGINT'))
// process.once('SIGTERM', () => bot.stop('SIGTERM'))
// ===

bot.help((ctx) => {
    ctx.reply('This is helpGit', Markup.inlineKeyboard([
        Markup.button.callback('Click me', 'button_click')
    ]));
});

bot.action('button_click', (ctx) => {
    ctx.reply('Button clicked!');
    console.log (ctx.update);
    var qid = ctx.update.callback_query.id;

      const url = `https://api.telegram.org/bot
      /answerCallbackQuery?callback_query_id=${qid}&text=hello&show_alert=true`;
    axios.get(url);

});




bot.launch();
