exports.run = (client, message, args) => {
    var user = message.mentions.users.first();
    var amount = args[1]
    const cookies = require('cookiesdb');

    if (!user || !user || isNaN(amount) || amount.startsWith('-')) {
        message.channel.send('Please Supply A user , Amount')
            .then(message => {
                message.delete(5000);
            })
        return;
    };
      var reason = args.slice(2).join(' ');
    if (!reason) return message.channel.send('Why do you want to add coins to this user? | Please supply!');


    cookies.updateCookies(`globalCredits_${user.id}`, parseInt(amount)).then(pb => {
        client.channels.get('476158627791634433').send(`${client.user} Added <:penguboat:468566426605715483> **${amount}** Coins! to **${user.tag}**'s Account. \n Reason: ${reason}`)
    })
};

exports.config = {
    command: 'add',
    aliases: ['addcredits','paneladd','creditsadd'],
    plevel: "Bot Owner",
    description: "Add A certain amount to a users balance. [Global]",
    usage: "add <@user> <amount of coins>",
    category: "Currency"
};

exports.extra = {
    hidden: false
};
