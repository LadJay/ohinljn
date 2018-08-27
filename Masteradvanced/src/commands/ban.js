  const caseN = require('../storages/caseNumber.js');
exports.run = async (client, message, args) => {

  const { RichEmbed, version } = require('discord.js');
  const config = require('../storages/config.json');
  
if(message.member.hasPermission("BAN_MEMBERS")) {
  let user = message.mentions.users.first();
   let modlog = message.guild.channels.find('name', 'logs');
        const caseNumber = await caseN.caseNumber(client , modlog)
  if (!modlog) return message.reply('Error: Invaild Logs Channel \n **Create a channel called #logs**');
      let guild = message.guild;
  if (message.mentions.users.size < 1) return message.reply('Error: Invaild User Supplied \n **Example:** +ban <@293805585378574336> spam').catch(console.error);
        const reason = args.splice(1, args.length).join(' ') || `No Reason supplied with this ban`;
    message.guild.member(user).ban();
    var embed = new RichEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setTitle(`Case ${caseNumber} :eyes:`)
    .addField('Action:', 'Ban')
    .addField('User:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Moderator:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Reason', reason)
    .setFooter(`Case ${caseNumber}`)
  return client.channels.get(modlog.id).send({embed});
}
};
exports.config = {
    command: 'ban',
    aliases: ['bean'],
    plevel: "Ban",
    description: "Ban a User!",
    usage: "ban <user> <reason>",
    category: "👀 Moderation 👀"
};

exports.extra = {
    hidden: false
};
