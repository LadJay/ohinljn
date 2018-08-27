const caseN = require('../storages/caseNumber.js');

exports.run = (client, message, args) => {
  const { RichEmbed, version } = require('discord.js');
    const config = require('../storages/config.json');    

        async function purge() {
            message.delete(); 

  
            if (isNaN(args[0])) {
              var embed = new RichEmbed()
            .setColor("RANDOM")
            .setTitle('Incorrect Usage : +clear <amount> ')
        message.channel.send({ embed })
            }

            const fetched = await message.channel.fetchMessages({limit: args[0]}); 
            console.log(fetched.size + ' messages found, deleting...'); 

            // Deleting the messages
            message.channel.bulkDelete(fetched)
                .catch(error => message.channel.send(`Error: ${error}`)); 
  

  if(message.member.hasPermission("KICK_MEMBERS")) {
   let modlog = message.guild.channels.find('name', 'logs');
        const caseNumber = await caseN.caseNumber(client , modlog)
  if (!modlog) return message.reply('Error: Invaild Logs Channel \n **Create a channel called #logs**');
      let guild = message.guild;
    const reason = args.splice(1, args.length).join(' ') || `No Reason Specified`;
    var embed = new RichEmbed()
.setColor('RANDOM')
  .setTimestamp()
    .setTitle(`Case ${caseNumber}`)
  .addField('*Action :*', 'Clear Chat')
  .addField('*Moderator :*', `**${message.author.username}#${message.author.discriminator}** Has Cleared **${fetched.size} Messages** in **#${message.channel.name}**`)
      .addField('*Reason :*', reason)
                .setFooter(`Case ${caseNumber}`)
    return guild.client.channels.get(modlog.id).send({embed});
  if(!modlog) return  message.channel.send(`<a:tickg:473984512708050945> Successfully Pruned ${fetched.size}`)
        }
        }
        purge(); 

  
}
exports.config = {
    command: 'clear',
    aliases: ['clean', 'purge'],
    plevel: "Cleaner",
    description: "Clears Amount Of Messages",
    usage: ".clean",
    category: "👀 Moderation 👀"
};

exports.extra = {
    hidden: false
};