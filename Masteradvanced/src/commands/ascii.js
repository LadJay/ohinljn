exports.run = (client, msg, args) => {
const { RichEmbed, version } = require('discord.js');
const config = require('../storages/config.json');    
 if(msg.author.bot){
   return;
 }
  var figlet = require('figlet');
  let data = msg.content.split(" ").slice(1).join(" ");
  if(!data) return msg.reply("<:error:473988063001837571> You cannot put an empty input.");
msg.delete();
  figlet(`${data}`, function(err, data) {
    if (err) {
      console.log('Something went wrong...');
      console.dir(err);
      return;
    }
    msg.channel.send(`\`\`\`\js\n${data}\`\`\``);
  })
 }
  
exports.config = {
    command: 'ascii',
    aliases: ['3d'],
    plevel: "User",
    description: "Make 3D Size Of Text",
    usage: "ascii <text>",
    category: "ヅ General ヅ"
};

exports.extra = {
    hidden: false
};