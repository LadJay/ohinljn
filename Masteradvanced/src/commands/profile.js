exports.run = async(client ,message, member) => {
    const cookies = require('cookiesdb');
  const fs = require("fs");
      
 
    var { RichEmbed } = require('discord.js');

   let user = message.mentions.users.first();
        if (!user) {
            user = message.author;
        }
  let warns = JSON.parse(fs.readFileSync("./rep.json", "utf8"));
    if(!warns[user.id]) warns[user.id] = {
    warns: 0
  };
  let upgrade = JSON.parse(fs.readFileSync("./upgrade.json", "utf8"));
    if(!upgrade[user.id]) upgrade[user.id] = {
    upgrade: 1
  };

              const db = require("cookiesdb")
                            const dbs = require("quick.db")

const moment = require('moment')
    require('moment-duration-format')
    
    const config = require('../storages/config.json');    

  let fetchedDB = await db.fetchCookies(`customPrefix_${user.id}`);
        let statusWelcome = await db.fetchCookies(`statusWelcome_${message.guild.id}`);
        if (!fetchedDB.text) {
            fetchedDB.text = config.info
        };
    let fetchedDBBadge = await db.fetchCookies(`customPrefixs_${user.id}`);
        let statusWelcomes = await db.fetchCookies(`statusWelcome_${message.guild.id}`);
        if (!fetchedDBBadge.text) {
            fetchedDBBadge.text = config.badges
        };
  let fetchedDBBadges = await db.fetchCookies(`customPrefixss_${user.id}`);
        let statusWelcomess = await db.fetchCookies(`statusWelcome_${message.guild.id}`);
        if (!fetchedDBBadges.text) {
            fetchedDBBadges.text = config.badges2
        };
   let slot3 = await db.fetchCookies(`customPrefixsss_${user.id}`);
        if (!slot3.text) {
            slot3.text = config.badge3
        };
  

 
    cookies.fetchCookies(message.guild.id).then(s => {
          cookies.fetchCookies(`globalCredits_${user.id}`).then(pb => {
  
let lol = user.id === "200598766804271104" 
let lol2 = user.id === "145689417045114881" 

        var embed = new RichEmbed()
            .setColor("RANDOM")
            .setAuthor(user.username , user.avatarURL)
            .setTimestamp()
            .setThumbnail( `${user.displayAvatarURL}`)
            .addField(`User ID` , `${user.id}`)
            .addField(`Rep Points` , warns[user.id].warns == 0? `0`:`${warns[user.id].warns}`)
            .addField(`Info` , fetchedDB.text)
            .addField(`Badges` , `**${fetchedDBBadge.text}** \n**${fetchedDBBadges.text}**\n**${slot3.text}**`)
            .addField(`${user.username}#${user.discriminator}`, `Balance:  **${pb.value.toLocaleString()}** Coins`)
            .addField(`Work Level` , upgrade[user.id].upgrade ==0? `0 Please type +buy upgrade its free`:`${upgrade[user.id].upgrade}`,true)

    			message.channel.send(embed)

          })
    })

}
  
exports.config = {
    command: 'profile',
    aliases: [],
    plevel: "User",
    description: "Check the profile of user",
    usage: "profile",
    category: "Information"
};

exports.extra = {
    hidden: false
};