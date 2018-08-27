const caseN = require('../storages/caseNumber.js');
exports.run = async (client, message, args) => {

  const { RichEmbed, version } = require('discord.js');
  const config = require('../storages/config.json');
  
if(message.member.hasPermission("KICK_MEMBERS")) {
  let user = message.mentions.users.first();
   let modlog = message.guild.channels.find('name', 'logs');
        const caseNumber = await caseN.caseNumber(client , modlog)
  if (!modlog) return message.reply('Error: Invaild Logs Channel \n **Create a channel called #logs**');
      let guild = message.guild;
  if (message.mentions.users.size < 1) return message.reply('You must mention someone to kick.').catch(console.error);
        const reason = args.splice(1, args.length).join(' ') || `No Reason`;
    if (!message.guild.member(user).kickable) return message.reply('Error: Permission Level too Low!');
    message.guild.member(user).kick();
    var embed = new RichEmbed()
    .setColor("Random")
    .setTimestamp()
    .setTitle(`Case ${caseNumber} :eyes:`)
    .addField('Action:', 'Kick')
    .addField('User:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Moderator:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Reason', reason)
    .setFooter(`Case ${caseNumber}`)
  return client.channels.get(modlog.id).send({embed});
  message.channel.send(`<a:tickg:473984512708050945> Successfully Kicked ${user.username}!`)
}
};

exports.config = {
    command: 'kick',
    aliases: ['softkick'],
    plevel: "Kick",
    description: "Kicks a User!",
    usage: "kick <user> <reason>",
    category: "👀 Moderation 👀"
};

exports.extra = {
    hidden: false
};
