  exports.run =async (client, message, args) => {
const discord = require("discord.js")

   if (!args[0]) return;
    if (args[0] === "suggest") return message.reply("Please give a suggestion.");
    args = args.join(" ");
    message.reply(`Suggestion sent to <#478733943160569877>\n React With :thumbsdown: or :thumbsup: `);
    const content = `**${message.author.username}#${message.author.discriminator}** (${message.author.id}) suggested:\n~~--------------------------------~~\n${args}\n~~--------------------------------~~`;
  client.channels.get('478733943160569877').send(`${content}`).then((y) => {
    y.react("👎")
    y.react("👍")
})
  }
  
  exports.config = {
    command: 'suggest',
    aliases: [],
    plevel: "User",
    description: "a",
    usage: "daily",
    category: "Currency"
};

exports.extra = {
    hidden: false
};


                                                                    