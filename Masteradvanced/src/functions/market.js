function market(client, message, args) {
var user = message.mentions.users.first();
    var amount = args.slice(1).join(' ');
    const cookies = require('cookiesdb');
  const Discord = require("discord.js")
  const fs = require("fs")
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

            
                            let upgrade = JSON.parse(fs.readFileSync("./upgrade.json", "utf8"))
            
            
                                      
              let userUp = message.author
              if(!upgrade[userUp.id]) upgrade[userUp.id] = {
                upgrade: 1
              };
                                   
              fs.writeFile("./upgrade.json", JSON.stringify(upgrade), (error) => {
                if (error) console.log(error)
                      
                      for (var i = 0; i < categories.length; i++) { 
          
                          var tempDesc = '';
          
                          for (var c in items) { 
                              if (categories[i] === items[c].type) {
                                
                                     
       const cookie = require("cookiesdb")
cookie.fetchCookies(`globalCredits_${message.author.id}`).then(pb => {
    console.log(pb);
       const embed = new Discord.RichEmbed()
                .setDescription(`Market of PenguBoat! <:penguboat:468566426605715483> ${pb.value.toLocaleString()} To spend in the shop! `)
                .setColor("RANDOM")
.addField("Upgrade" , upgrade[message.author.id].upgrade == 100? `You cannot buy anymore upgrades`:`${items[c].price.toLocaleString() *  upgrade[message.author.id].upgrade} Coins \nNext Upgrade costs ${items[c].price.toLocaleString() *  upgrade[message.author.id].upgrade + 5} coins`);
       message.channel.send(embed)
 })
                              
}
                          }
                      }
              })
        }
}
module.exports = market;