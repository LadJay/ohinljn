exports.run = (client, message, args) => {
    message.delete()
  const { RichEmbed, version } = require('discord.js');
  const config = require('../storages/config.json');    
  
      let member = message.guild.member(message.author);
      let role = message.guild.roles.find("name", 'Pengu [13]');
      let rolePosition = role.position;

      member.addRole(role).catch(e => {
      });
        let rrole = message.guild.roles.find("name", 'Unverified Users [16]');
      member.removeRole(rrole).catch(e => {
      });
    let guild = message.guild;
 
      return guild.channels.get('477996279679549470').send(`${message.author} Has Just Been Verified! **Not a bot!**`).then(() => message.guild.member(member).addRole(role))
  
      }
                                 
                                
  exports.config = {
      command: 'verify',
      aliases: ['add'],
      plevel: "User",
      description: "Verify A Bot",
      usage: ".verify <bot>",
      category: "Guild Owners"
  };
  
  exports.extra = {
      hidden: false
  };