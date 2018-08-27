exports.run = (client, message, args) => {
    const cookies = require('cookiesdb');
    const moment = require('moment')
   const ms = require('parse-ms')
  
    const config = require('../storages/config.json');
const { randomRange } = require('../../util/Util');
          const fishes = require('../../assets/json/search.json');

  
const fs = require("fs")            
                       
  
   let cooldown = 300000
   
    cookies.fetchCookies(`lastDailys_${message.author.id}`).then(i => {

        if (i.text !== null && cooldown - (Date.now() - i.text) > 0) {
          let timeObj = ms(cooldown - (Date.now() - i.text));
          
          return message.channel.send(`<:error:473988063001837571> Command Ratelimited! \n Available in : **${timeObj.minutes} Minutes and ${timeObj.seconds} seconds** `)   .then(message => {
                message.delete(8000);
            })
        }else{
  
          var {
        RichEmbed
    } = require('discord.js');
  
            let user = message.mentions.users.first() || message.author;
	const fishID = Math.floor(Math.random() * 10) + 1;
		let rarity;
		if (fishID < 5) rarity = 'rotten';
		else if (fishID < 8) rarity = 'common';
		else if (fishID < 10) rarity = 'uncommon';
          		else rarity = 'rare';

          		const fish = fishes[rarity];

	          		const worth = randomRange(fish.min, fish.max);

    var embed = new RichEmbed()
   .setColor("RANDOM")
    .setAuthor(message.author.username , message.author.avatarURL)
   .setDescription(`${fish.symbol} **${worth} Coins!**`)
    .setFooter(`${fish.luck}`)
    message.channel.send({embed})
            cookies.updateCookies(`globalCredits_${user.id}`, worth).then(pb => {
              cookies.updateText(`lastDailys_${message.author.id}`, Date.now()).then(() => {

            })
        })
}
    })
}
exports.config = {
    command: 'search',
    aliases: [],
    plevel: "User",
    description: "Collect Daily coins every day  ",
    usage: "daily",
    category: "Currency"
};

exports.extra = {
    hidden: false
};
