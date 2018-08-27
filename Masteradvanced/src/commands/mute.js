const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  //!tempmute @user 1s/m/h/d

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Error: Invaild User");
  if(tomute.hasPermission("ADMINISTRATOR")) return message.reply("Error: Permission Level too Low!");
  let muterole = message.guild.roles.find(`name`, "Muted");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
   const { RichEmbed, version } = require('discord.js');
    const caseN = require('../storages/caseNumber.js');
let modlog = message.guild.channels.find('name', 'logs');
              const caseNumber = await caseN.caseNumber(bot,modlog)

  if (!modlog) return message.reply('I cannot find a #logs channel');
        let guild = message.guild;
  let mutetime = args[1];
  if(!mutetime) return message.reply("Please put a vaild time");

  await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> has been muted for ${ms(ms(mutetime))}`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    	var embed = new RichEmbed()
        .setTimestamp()
    .setFooter(`Case ${caseNumber}`)
    .setColor("RANDOM")
  .setTitle(`Case ${caseNumber} | UnMuted`)
   .addField('Unmuted User', `<@${tomute.id}>`)
  .addField('Time Waited', `${ms(ms(mutetime))}`)
    return guild.client.channels.get(modlog.id).send({embed})
    

    message.channel.send(`<@${tomute.id}> has been unmuted!`);
  }, ms(mutetime));
  
	var embed = new RichEmbed()
  .setColor("RANDOM")
  .setTitle(`Case ${caseNumber} | Muted`)
      .setFooter(`Case ${caseNumber}`)
  .setTimestamp()
   .addField('Muted User', `${message.mentions.users.first()}`)
  .addField('Responsible Moderator' , `${message.author}`)
  .addField('Time Remaining', `${ms(ms(mutetime))}`)
    return guild.client.channels.get(modlog.id).send({embed});


//end of module
}

exports.config = {
    command: 'mute',
    aliases: [],
    plevel: "Admin",
    description: "Mute an user : +mute <user> <time> s|m|d",
    usage: "mute <user>",
    category: "👀 Moderation 👀"
};

exports.extra = {
    hidden: false
};