        
        function shop(client, message, args) {
            var user = message.mentions.users.first();
                var amount = args.slice(1).join(' ');
                const cookies = require('cookiesdb');
                const { Discord, RichEmbed } = require('discord.js')
              const fs = require("fs")
                                let owner= JSON.parse(fs.readFileSync("./owner.json", "utf8"))
                                   let userO = message.author
                    
            
              if(!owner[userO.id]) owner[userO.id] = {
                owner: 0
              };
                                          let upgrade = JSON.parse(fs.readFileSync("./upgrade.json", "utf8"))
              if(upgrade[message.author.id].upgrade  == 100){
                message.channel.send('Max level reached , You cannot buy upgrades!')
                   .then(message => {
                message.delete(30000);
            })
        return;
    };              
        
                                      
              let userUp = message.author
              if(!upgrade[userUp.id]) upgrade[userUp.id] = {
                upgrade: 0
              };
            
            
                   
            const items = JSON.parse(fs.readFileSync('Masteradvanced/items.json', 'utf8'));
            
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
            cookie.fetchCookies(`globalCredits_${message.author.id}`).then(pb => {
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
                        return message.channel.send(`Item was not found in the itemshop!`)
                    }
                cookies.fetchCookies(`globalCredits_${message.author.id}`).then(c => {// Lets fix a few errors - If you use the unique guild thing, do this.
                      if (c.value <= itemPrice * upgrade[message.author.id].upgrade -1 ) {
                          return message.channel.send(`**You don't have enough money for this item.**`);
                      }
          
                      cookies.updateCookies(`globalCredits_${message.author.id}`, parseInt(`-${itemPrice * upgrade[message.author.id].upgrade }`)).then((c) => {
          
                      })
                                                           let userO = message.author
            
                                  
                                 if (itemName === 'upgrade') {
            
                            let upgrade = JSON.parse(fs.readFileSync("./upgrade.json", "utf8"))
            
            
                                      
              let userUp = message.author
              if(!upgrade[userUp.id]) upgrade[userUp.id] = {
                upgrade: 1
              };
                                   
              upgrade[userUp.id].upgrade++;
            message.channel.send("Upgrade was successfully bought!")
              fs.writeFile("./upgrade.json", JSON.stringify(upgrade), (error) => {
                if (error) console.log(error)
                       
                                     
                        
                                
              
              })
                                 }
                                          
                                                          if (itemName === 'owner') {
              let userO = message.author
                    
            
              if(!owner[userO.id]) owner[userO.id] = {
                owner: 0
              };
            
            
              owner[userO.id].owner++;
            
              fs.writeFile("./owner.json", JSON.stringify(owner), (error) => {
                if (error) console.log(error)
                message.channel.send('You are a proud owner now!')
              })
                                          
                                                          }
                                                    
                                    
        })
        }
                                                                      
                                                                      
            module.exports = shop;
          