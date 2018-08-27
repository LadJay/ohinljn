
exports.run = (client, message, args) => {
  
  const { RichEmbed, version } = require('discord.js');
  const config = require('../storages/config.json');
  exports.run = (client, message, args) => {
  let member = message.mentions.members.first();
  let guild = message.guild;
  if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("You don't have the permission to soft ban someone.");
  if (!member) {
    return message.reply('Invalid command usage, you must mention to soft ban someone.');
      
  }
  if (!member.kickable || !member.bannable) return message.channel.send(`You cant soft ban **${member.user.username}**.`);
  let sbreason = message.content.split(" ").slice(2).join(" ");
  if (!sbreason) sbreason = "Unknown!";
    let modlog = message.guild.channels.find('name', 'logs');
    const caseN = require('../storages/caseNumber.js');
  if (!modlog) return message.reply('I cannot find a #logs channel');
              const caseNumber = caseN.caseNumber(client,modlog)
  member.send("You have been soft banned from **" + guild.name);
  member.ban({days : 7, reason : sbreason}).then(m=>m.guild.unban(m.id));
    var embed = new RichEmbed()
    .setColor("RANDOM")
    .setFooter(`oof`)
    .setTitle(`Soft Ban`)
    .setDescription(`**${member.user.tag}** has been soft banned in **${guild.name}** by **${message.author.tag}**.`)
    return guild.client.channels.get(modlog.id).send({embed});
}
}

exports.config = {
    command: 'softban',
    aliases: ['sban'],
    plevel: "Ban",
    description: "Ban a User! But Unbans and cleans 7 days of users messages.",
    usage: "softban <user> <reason>",
    category: "👀 Moderation 👀"
};

exports.extra = {
    hidden: false
};
