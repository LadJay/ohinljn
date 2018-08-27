exports.run = async(client, message) => {

    var cookies = require('cookiesdb')
    const moment = require('moment')
    require('moment-duration-format')


    var db = require('cookiesdb')
   let user1 = message.mentions.users.first();

 let fetchedDBB = await db.fetchCookies(`customName_${message.author.id}`);
        if (!fetchedDBB.text) {
            fetchedDBB.text = 'Restaurants'
        };
    const { RichEmbed } = require('discord.js')
const fs = require("fs")
  let upgrade = JSON.parse(fs.readFileSync("./upgrade.json", "utf8"));
   let userUp = message.mentions.users.first();
        if (!userUp) {
            userUp = message.author;
        }
  if(!upgrade[userUp.id]) upgrade[userUp.id] = {
    upgrade: 1
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


                                

      
       var cust = Math.floor(Math.random() *50)
              var cust2 = Math.floor(Math.random() *25)
      
             
     var embed = new RichEmbed()
    .setColor('RANDOM')
    .addField(`${userUp.username}'s Upgrade Level` , `${upgrade[userUp.id].upgrade}`) 
    .addField(`${userUp.username} Earns` ,  upgrade[userUp.id].upgrade > -1 && upgrade[userUp.id].upgrade < 500? `${10 * upgrade[userUp.id].upgrade} from upgrades`:`No upgrades type`)
         .addField('Ownership?' , owner[userO.id].owner > 0 && owner[userO.id].owner < 10000? `**You are an owner of ${fetchedDBB.text}'s Restaurant , Earning : ${10 * upgrade[userUp.id].upgrade * 2}**`:`Level 100 : **false** \n Reach Workstats Level 100 ! `)
              message.channel.send({embed})
                                                                  
}                    
                                                                               
exports.config = {
    command: 'workstats',
    aliases: [],
    plevel: "User",
    description: "view your workstats",
    usage: "workstats",
    category: "Currency"
};

exports.extra = {
    hidden: false
};