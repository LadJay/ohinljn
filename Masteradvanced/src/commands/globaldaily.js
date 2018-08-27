exports.run = (client, message, args) => {
    const cookies = require('cookiesdb');
    const moment = require('moment');
   const ms = require('parse-ms')

    const config = require('../storages/config.json');

  
const fs = require("fs")            
                       
  
   
   let cooldown = 8.64e+7
   
    cookies.fetchCookies(`lastDaily12_${message.author.id}`).then(i => {

        if (i.text !== null && cooldown - (Date.now() - i.text) > 0) {
          let timeObj = ms(cooldown - (Date.now() - i.text));
          
          return message.channel.send(`<:error:473988063001837571> Command Ratelimited! \n Available in :** ${timeObj.hours} Hour(s) ${timeObj.seconds} Minute(s) And ${timeObj.seconds} Seconds** `)   .then(message => {
                message.delete(8000);
            })
                

        }else{
                        cookies.updateText(`lastDaily12_${message.author.id}`, Date.now()).then(() => {

          
          var {
        RichEmbed
    } = require('discord.js');
          const fs = require("fs")
          let key = JSON.parse(fs.readFileSync("./key.json", "utf8"));
   let userK = message.mentions.users.first();
        if (!userK) {
            userK = message.author;
        }
  if(!key[userK.id]) key[userK.id] = {
    key: 0
  };
 
  fs.writeFile("./key.json", JSON.stringify(key), (err) => {
    if (err) console.log(err)
  })
            let user = message.mentions.users.first() || message.author;
                  var amount = Math.floor(Math.random() * 299);
    var embed = new RichEmbed()
   .setColor("RANDOM")
   .addField(`${user.username} Received the daily! <a:tickg:473984512708050945>` , key[message.author.id].key? `Double Daily: **true** <:penguboat:468566426605715483> -----  __**Total: ${amount * 2} Coins**__ -----` : `Double Daily: **false**  \n <:penguboat:468566426605715483> ----- __Total: $${amount}__ ----- `)
    message.channel.send({embed})
            cookies.updateCookies(`globalCredits_${user.id}`, amount).then(pb => {
                console.log(`Added ${amount} Coins to Username : ${message.author.tag}`)
              if(key[userK.id].key  > 0 && key[userK.id].key  < 1000){
  return cookies.updateCookies(`globalCredits_${message.author.id}`, amount * 2)

              
      
}
            })
        })
    
}
    })
}
                                                                           

exports.config = {
    command: 'daily',
    aliases: ['payday','dailys'],
    plevel: "User",
    description: "Collect Daily coins every day  ",
    usage: "daily",
    category: "Currency"
};

exports.extra = {
    hidden: false
};
