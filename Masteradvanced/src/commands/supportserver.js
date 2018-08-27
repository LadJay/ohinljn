exports.run = (client, message) => {
    message.channel.send(`Check your dms **${message.author.username}**`).then(() => message.author.send(`I've heard you needed support - https://discord.gg/eyFYz2s here is our link!`));
};

exports.config = {
    command: 'support',
    aliases: ['serverhelp','server'],
    plevel: "User",
    description: "Support server link",
    usage: "+support",
    category: "Helper"
};

exports.extra = {
    hidden: false
};