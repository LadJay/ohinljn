	const Discord = require('discord.js'); 
 
exports.run = (client, message, args) => {
  
  const { RichEmbed, version } = require('discord.js');
  const config = require('../storages/config.json');
    
let pages = ['Slot 2 Badges \n King :crown: - 5000 \n Queen ♕ - 5000 \n Soldier 兵 - 1500 \n None for now!', 'Slot 3 Badges \n Lucky ☘ - 1000 \n None for now!'];
  let page = 1; 
 
    var embed = new RichEmbed()
    .setColor(0xffffff)
    .setTitle('Badges Slots!')
    .setFooter(`Page ${page} of ${pages.length}`) 
    .setDescription(pages[page-1])
 
  message.channel.send(embed).then(msg => { 
   
    msg.react('⏪').then( r => { 
      msg.react('⏩') 
     
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id; 
     
      const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000 }); 
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 }); 
     
      
      backwards.on('collect', r => { 
        if (page === 1) return; 
        page--; 
        embed.setDescription(pages[page-1]); 
        embed.setFooter(`Page ${page} of ${pages.length}`); 
        msg.edit(embed) 
      })
     
      forwards.on('collect', r => { 
        if (page === pages.length) return; 
        page++; 
        embed.setDescription(pages[page-1]); 
        embed.setFooter(`Page ${page} of ${pages.length}`); 
        msg.edit(embed) 
      })
   
    })
 
  })
 
}
exports.config = {
    command: 'badges',
    aliases: ['categoryhelp'],
    plevel: "User",
    description: "View embed pages of categories of help",
    usage: "update",
    category: "Helper"
};

exports.extra = {
    hidden: false
};