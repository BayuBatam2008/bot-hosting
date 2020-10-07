const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NzYzMzgzMDk1NDQ5MjIzMTc4.X3256A.ugKXp0kYoOE0fHtqDewaT-M8sjg);//BOT_TOKEN is the Client Secret
