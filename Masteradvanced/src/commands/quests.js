exports.run = async(client, message) => {

    var cookies = require('cookiesdb')
    const moment = require('moment')
    require('moment-duration-format')


    var db = require('cookiesdb')

 let fetchedDBB = await db.fetchCookies(`customName_${message.author.id}`);
        if (!fetchedDBB.text) {
            fetchedDBB.text = 'Restaurants'
        };
    const { RichEmbed } = require('discord.js')
const fs = require("fs")
  let upgrade = JSON.parse(fs.readFileSync("./quest.json", "utf8"));
   let userUp = message.mentions.users.first();
        if (!userUp) {
            userUp = message.author;
        }
  if(!upgrade[userUp.id]) upgrade[userUp.id] = {
    upgrade: 0
  };

  fs.writeFile("./quest.json", JSON.stringify(upgrade), (err) => {
    if (err) console.log(err)
  })
   let upgrades = JSON.parse(fs.readFileSync("./quests.json", "utf8"));
   let userUps = message.mentions.users.first();
        if (!userUps) {
            userUps = message.author;
        }
  if(!upgrades[userUp.id]) upgrades[userUp.id] = {
    upgrades: 0
  };

  fs.writeFile("./quests.json", JSON.stringify(upgrades), (err) => {
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

      let key = JSON.parse(fs.readFileSync("./key.json", "utf8"));
   let userK = message.mentions.users.first();
        if (!userK) {
            userK = message.author;
        }
  if(!key[userK.id]) key[userK.id] = {
    key: 0
  };


                                

      
       var cust = Math.floor(Math.random() *50)
              var cust2 = Math.floor(Math.random() *25)
      
             
     var embed = new RichEmbed()
    .setColor('RANDOM')
     .setAuthor(message.author.username , message.author.avatarURL)
    .setDescription(`**Weekly Quests** \n **Reward** : 500 Coins \n **Quest**: Set Your Info On Profile Command`)
     .addField(`--------------------------------------` , upgrade[userUp.id].upgrade > 0 && upgrade[userUp.id].upgrade < 500? `Quest Completed! <a:tickg:473984512708050945> `:`Quest Not Complete Yet!` )
     .addField(`--------------------------------------\nWeekly Quests \nReward : Double Daily Key! \nQuest: Transfer Coins to another user!\n--------------------------------------`, upgrades[userUp.id].upgrades > 0 && upgrades[userUp.id].upgrades < 500? `Quest Completed! <a:tickg:473984512708050945> `:`Quest Not Complete Yet!` )

              message.channel.send({embed})
}                                           
                                                                        
exports.config = {
    command: 'quests',
    aliases: [],
    plevel: "User",
    description: "view your workstats",
    usage: "workstats",
    category: "Currency"
};

exports.extra = {
    hidden: false
};