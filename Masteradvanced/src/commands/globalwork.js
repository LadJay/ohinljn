
exports.run = (client, message) => {

    var cookies = require('cookiesdb')
    const moment = require('moment')
    require('moment-duration-format')


    var lolrandom = Math.floor(Math.random() * 90);



    const { RichEmbed } = require('discord.js')
const fs = require("fs")
  let upgrade = JSON.parse(fs.readFileSync("./upgrade.json", "utf8"));
   let userUp = message.mentions.users.first();
        if (!userUp) {
            userUp = message.author;
        }
  if(!upgrade[userUp.id]) upgrade[userUp.id] = {
    upgrade: 0
  };

  fs.writeFile("./upgrade.json", JSON.stringify(upgrade), (err) => {
    if (err) console.log(err)
  })
        
           let owner = JSON.parse(fs.readFileSync("./owner.json", "utf8"));
   let userO = message.mentions.users.first();
        if (!userO) {
            userO = message.author;
        }
  if(!owner[userO.id]) owner[userO.id] = {
  owner: 0
  };

  fs.writeFile("./owner.json", JSON.stringify(owner), (err) => {
    if (err) console.log(err)
  })
              if(upgrade[message.author.id].upgrade  == 100){
                          owner[userO.id].owner++;

          }
          if(upgrade[message.author.id].upgrade == 210){
         
                          owner[userO.id].owner++;

                                }       
        
                    if( upgrade[userO.id].upgrade == 0){
      var embed = new RichEmbed()
           .setColor('RANDOM')
           .setDescription('You cannot work at the moment! \n You currently have 0 upgrades! Please buy a upgrade from the market \n **Usage**: `+buy upgrade` **NOTE: Lvl 1 Upgrade is Free**')
                  message.channel.send(embed)
                     .then(message => {
                message.delete(30000);
            })
        return;
    };    
	
       const ms = require('parse-ms')
                         
  
   let cooldown = 60000
   
    cookies.fetchCookies(`lastWork_${message.author.id}`).then(i => {

        if (i.text !== null && cooldown - (Date.now() - i.text) > 0) {
          let timeObj = ms(cooldown - (Date.now() - i.text));
          
          return message.channel.send(`<:error:473988063001837571> Command Ratelimited! \n Available in :** ${timeObj.seconds} seconds** `)   .then(message => {
                message.delete(8000);
            })
        }else{
                        cookies.updateText(`lastWork_${message.author.id}`, Date.now()).then(() => {

let lol = message.author.id === "293805585378574336" 
     var embed = new RichEmbed()
	    .setColor('RANDOM')
           .setAuthor(message.author.username, message.author.avatarURL)
     .setDescription(lol? `:crown: PengiBoat Developer :tools: \n ------__ **Level: ${upgrade[message.author.id].upgrade}**__ ------ `:`**Your Current Level: ${upgrade[message.author.id].upgrade}**`)
.setTimestamp()
    .addField( `<a:tickg:473984512708050945> Worked Successfully!`, owner[userO.id].owner > 0 && owner[userO.id].owner < 1000?`You've Received **__${10 * upgrade[userUp.id].upgrade * 2} Coins__** from upgrades and ownership!`:`Reach Workstats Level __100__ To Receive Ownership!! \n ----- __You've Received : ${10 * upgrade[userUp.id].upgrade} Coins__ from your upgrades ----- `)
                        .setFooter(message.author.username, message.author.avatarURL)

     message.channel.send({embed})
         
              if(owner[userO.id].owner > 0 && owner[userO.id].owner < 1000){
  return cookies.updateCookies(`globalCredits_${message.author.id}`, 10 * upgrade[userUp.id].upgrade * 2)
  }
             if(upgrade[userUp.id].upgrade > 0 && upgrade[userUp.id].upgrade < 500){
  return cookies.updateCookies(`globalCredits_${message.author.id}`, 10 * upgrade[userUp.id].upgrade)
             }
                        })
        }
    })
}
                                                                               
                                                                               
exports.config = {
    command: 'work',
    aliases: [],
    plevel: "User",
    description: "work to recieve tips",
    usage: "work",
    category: "Currency"
};

exports.extra = {
    hidden: false
};