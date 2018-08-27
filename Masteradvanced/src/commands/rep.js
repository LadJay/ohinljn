const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./rep.json", "utf8"));

exports.run = async (bot, message, args) => {
    const cookies = require("cookiesdb")
  const moment = require('moment')
    require('moment-duration-format')
        const ms = require("parse-ms")
         let cooldown = 8.64e+7
  
  let user = message.mentions.users.first();
     cookies.fetchCookies(`lastRep1_${message.author.id}`).then(i => {

        if (i.text !== null && cooldown - (Date.now() - i.text) > 0) {
          let timeObj = ms(cooldown - (Date.now() - i.text));
          
          return message.channel.send(`<:error:473988063001837571> Command Ratelimited! \n Available in :** ${timeObj.hours} Hour(s) ${timeObj.seconds} Minute(s) And ${timeObj.seconds} Seconds** `)   .then(message => {
                message.delete(8000);
            })

        }else{

   if (!user) {
        message.channel.send(' <:error:473988063001837571> Please Mention a user to rep')
            .then(message => {
                message.delete(5000);
            })
        return;
    };
  
   
if (message.author.id === user.id) {
        message.channel.send('<:error:473988063001837571> You Cannont Rep Yourself!')
            .then(message => {
                message.delete(5000);
            })
        return;
  };

  
  if(!warns[user.id]) warns[user.id] = {
    warns: 0
  };
 


  warns[user.id].warns++;

  fs.writeFile("./rep.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
  });


message.channel.send(`Success <a:tickg:473984512708050945> You have repped <@${user.id}>`)
                             cookies.updateText(`lastRep1_${message.author.id}`, Date.now()).then(() => {

                             })
        }
    })
}
exports.config = {
    command: 'rep',
    aliases: ['reputation'],
    plevel: "User",
    description: "Rep a user",
    usage: "rep",
    category: "Currency"
};

exports.extra = {
    hidden: false
};