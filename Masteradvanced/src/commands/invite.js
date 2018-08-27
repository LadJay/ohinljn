exports.run = (client, message) => {
    message.channel.send(`Check Your DMS **${message.author.username}**!`).then(() => message.author.send(`Thank you for using the command! To invite our bot you must \`[ Click the link below ] \` \n __https://discordapp.com/oauth2/authorize?client_id=431533930286415893&scope=bot&permissions=2103801919__`));
};

exports.config = {
    command: 'invite',
    aliases: ['inv'],
    plevel: "User",
    description: "Invite Link.",
    usage: "invite",
    category: "Helper"
};

exports.extra = {
    hidden: false
};