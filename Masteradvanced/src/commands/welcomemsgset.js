exports.run = (client, message, args) => {
    var welcome = require('../functions/welcomemsg.js');

    welcome(client, message, args);
};

exports.config = {
    command: 'welcome',
    aliases: ['greetings','setw'],
    plevel: "Admin",
    description: "Welcome Message : Make Yourself!",
    usage: "welcome <#channel> <true/false> <Welcome Message>",
    category: "👀 Moderation 👀"
};

exports.extra = {
    hidden: false
};
