function eightball(client, message, args) {

	var { RichEmbed } = require('discord.js');

  let lonk = message.channel.createInvite()
        var resolvedProm = Promise.resolve(lonk);
        var thenProm = resolvedProm.then(function(value) {
            const moment = require('moment');
            let today = moment().format('l')
          let guild = message.guild;

	var embed = new RichEmbed()
      .setAuthor(message.author.username , message.author.avatarURL)
  .setColor("RANDOM")
   .addField('Guilds Owner',message.guild.owner.user,true)
  .addField('Server Link', value, true) 
  .addField('Total Channels', message.guild.channels.size, true)  
  .addField('Server Name', `${message.guild.name}`)
.setFooter(`Bumped By : ${message.author.username} Come Back `+ moment().endOf('day').fromNow() + '.' )
  .addField('Member Count',`${message.guild.memberCount}`);

  const cookies = require('cookiesdb');
  cookies.fetchCookies(`lastBump_${message.guild.name + message.guild.id}`).then(i => {
      if (i.text === today) return message.channel.send("<:error:473988063001837571> Error: Command was used today!\n **Available**: " + moment().endOf('day').fromNow() + '.');
      cookies.updateText(`lastBump_${message.guild.name + message.guild.id}`, today).then(() => {
           cookies.updateCookies(message.author.id, 10000)
                     client.channels.get('476153315181330453').send({embed})

                       
                       

                });
        	var embed2 = new RichEmbed()
  .setColor("RANDOM")
          .setAuthor(message.author.username , message.author.avatarURL)
  .setTitle(`Your Server Has Been Bumped To PenguBoat Support Server! \n Want to check it out? TYPE -  \`+suport\``)
          .setImage('https://cdn.discordapp.com/attachments/476516904736129026/476747378515378176/banner.png')
message.channel.send(embed2)
        
        
      });
  })
                    
        
            }
module.exports = eightball;

