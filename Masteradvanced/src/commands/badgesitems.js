exports.run = async(client, message, args) => {
   
            var user = message.mentions.users.first();
                var amount = args.slice(1).join(' ');
                const cookies = require('cookiesdb');
                const { Discord, RichEmbed } = require('discord.js')
              const fs = require("fs")
             
            
                   
            const items = JSON.parse(fs.readFileSync('Masteradvanced/badge.json', 'utf8'));
            
            if (amount.startsWith('-')) {    
              message.channel.send('...')
                        .then(message => {
                            message.delete(5000);
                        })
                    return;
                };
              
             
                let prefix = "+"
                let msg = message.content.toUpperCase();
                let cont = message.content.slice(prefix.length).split(" "); // This slices off the prefix, then stores everything after that in an array split by spaces.
            
            
                    let categories = []; 
            
                    if (!args.join(" ")) { 
            
                        for (var i in items) { 
            
                            if (!categories.includes(items[i].type)) {
                                categories.push(items[i].type)
                            }
            
                        }
            
                   const cookie = require("cookiesdb")
            cookie.fetchCookies(`${message.author.id}`).then(pb => {
                console.log(pb);
                   const embed = new Discord.RichEmbed()
                            .setDescription(`Market of PenguBoat! <:penguboat:468566426605715483> ${pb.value.toLocaleString()} To spend in the shop! `)
                            .setColor("RANDOM")
            
                        for (var i = 0; i < categories.length; i++) { 
            
                            var tempDesc = '';
            
                            for (var c in items) { 
                                if (categories[i] === items[c].type) {
                                 
            
                                    tempDesc += `\`${items[c].name}\` -  <:penguboat:468566426605715483> ${items[c].price.toLocaleString()} Coins - *${items[c].desc}*\n`; // Remember that \n means newline
            
                                }
                            
                            }
            
                            embed.addField(categories[i], tempDesc);
            
                        }
            
                        return message.channel.send({
                            embed
                        }); 
            
            
                    })
            }
            
            
                    let itemName = '';
                    let itemPrice = 0;
                    let itemDesc = '';
            
              
                    for (var i in items) { 
                        if (args.slice(0).join(' ').toUpperCase() === items[i].name.toUpperCase()) { 
                            itemName = items[i].name;
                            itemPrice = items[i].price;
                            itemDesc = items[i].desc;
                        }
                    }
            
                    if (itemName === '') {
                        return message.channel.send(`Badge was not found in the itemshop!`)
                    }
                cookies.fetchCookies(`globalCredits_${message.author.id}`).then(c => {// Lets fix a few errors - If you use the unique guild thing, do this.
                      if (c.value <= itemPrice) {
                          return message.channel.send(`**You don't have enough money for this Badge.**`);
                      }
          
                      cookies.updateCookies(`globalCredits_${message.author.id}`, parseInt(`-${itemPrice}`)).then((c) => {
          
                    
                      })
                const db = require("cookiesdb")
                    if (itemName === 'Queen') {
              let fetchedDBB =   db.fetchCookies(`customPrefixs_${message.author.id}`);
                           db.updateText(`customPrefixss_${message.author.id}`, `Queen ♕`);
                message.channel.send(`Bought Badge For SLot 2 : Queen ♕`)
             
                                 }else{
                                 
             

                           if (itemName === 'Soldier') {
              let fetchedDBB =   db.fetchCookies(`customPrefixs_${message.author.id}`);
                           db.updateText(`customPrefixss_${message.author.id}`, `Soldier 兵`);
                message.channel.send(`Bought Badge For SLot 2 : Soldier 兵`)
                           }else{
                           

                              if (itemName === 'King') {
              let fetchedDBB =   db.fetchCookies(`customPrefixs_${message.author.id}`);
                           db.updateText(`customPrefixss_${message.author.id}`, `King :crown:`);
                message.channel.send(`Bought Badge For SLot 2 : King :crown:`)
                              }else{
                              }
                           
                                          if (itemName === 'Lucky') {
              let fetchedDBB =   db.fetchCookies(`customPrefixsss_${message.author.id}`);
                           db.updateText(`customPrefixsss_${message.author.id}`, `Lucky ☘`);
                message.channel.send(`You have bought Lucky ☘ Badge! : Slot 3 Badge is now Filled!`)
                              }
                           }
                                 }
                })
}
                                 
exports.config = {
    command: 'bbuy',
    aliases: [],
    plevel: "User",
    description: "Views the items in the market ",
    usage: "market",
    category: "Currency"
};

exports.extra = {
    hidden: false
};