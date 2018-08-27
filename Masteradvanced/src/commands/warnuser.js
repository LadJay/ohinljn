const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

exports.run = async (client, message, args) => {

  //!warn @daeshan <reason>
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.reply("User Not Found");
  if(wUser.hasPermission("MANAGE_MESSAGES")) return message.reply("Cannot Do That.");
  let reason = args.join(" ").slice(22);

  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };

  warns[wUser.id].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
  });
const caseN = require('../storages/caseNumber.js');
  
  let warnchannel = message.guild.channels.find(`name`, "logs");
  if(!warnchannel) return message.reply("Couldn't find  #logs channel");
                const caseNumber = await caseN.caseNumber(client,warnchannel)

  let warnEmbed = new Discord.RichEmbed()
  .setDescription("Warning")
  
  .setAuthor(message.author.username)
  .setColor("Random")
  .setFooter(`Case ${caseNumber}`)
  .setTitle(`Case ${caseNumber} | Warn`)
  .addField("Warned User : ", `<@${wUser.id}>`)
  .addField("Responsible Moderator" , `${message.author}`)
  .addField("Number of Warnings", warns[wUser.id].warns)
  .addField("Reason", reason);
message.channel.send(`User has been warned `, warns[wUser.id].warns)

  warnchannel.send(warnEmbed);

  if(warns[wUser.id].warns == 2){
    let muterole = message.guild.roles.find(`name`, "Mute");
    if(!muterole) return message.reply("Please Create A Role Called 'Mute' ");

    let mutetime = "30s";
    await(wUser.addRole(muterole.id));
    message.channel.send(`<@${wUser.id}> has been temporarily muted for 30 Seconds | Warning 2 | Mute`);

    setTimeout(function(){
      wUser.removeRole(muterole.id)
      message.reply(`<@${wUser.id}> has been unmuted.`)
    }, ms(mutetime))
  }
  if(warns[wUser.id].warns == 3){
    message.guild.member(wUser).kick(reason);
    message.reply(`<@${wUser.id}> has been kicked | Warning 3 | Kick `)
  }
    if(warns[wUser.id].warns == 4){
      let muterole = message.guild.roles.find(`name`, "Mute");
    if(!muterole) return message.reply("Please Create A Role Called 'Mute' ");
      let mute = "5m";
    await(wUser.addRole(muterole.id));

    setTimeout(function(){
      wUser.removeRole(muterole.id)
      message.reply(`<@${wUser.id}> has been unmuted.`)
    }, ms(mute))
  }
   if(warns[wUser.id].warns == 5){
    message.guild.member(wUser).ban(reason);
    message.reply(`<@${wUser.id}> has been Banned | Warning 5 | Ban `)
  }

}

exports.config = {
    command: 'warn',
    aliases: ['warning', 'strike'],
    plevel: "Ban",
    description: "Warns somebody | +warn <user>",
    usage: "warn",
    category: "👀 Moderation 👀"
};

exports.extra = {
    hidden: false
};