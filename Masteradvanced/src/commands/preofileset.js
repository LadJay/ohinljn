const db = require('cookiesdb');
const { RichEmbed } = require('discord.js');


    
    const config = require('../storages/config.json');

    exports.run = async (client,message, args)=> {
          const keys = ['info','workname','prefix'];
        let fetchedDB = await db.fetchCookies(`customPrefix_${message.author.id}`);
        let statusWelcome = await db.fetchCookies(`statusWelcome_${message.guild.id}`);
        if (!fetchedDB.text) {
            fetchedDB.text = config.info
        };
        let fetchedDBBB = await db.fetchCookies(`customPrefixB_${message.author.id}`);
        if (!fetchedDBBB.text) {
            fetchedDBBB.text = config.prefix
        };
       let fetchedDBB = await db.fetchCookies(`customName_${message.author.id}`);
        if (!fetchedDBB.text) {
            fetchedDBB.text = 'Restaurants'
        };
        let daily = await db.fetchCookies(`serverDaily_${message.guild.id}`);

        if (!daily.text) {
            daily.text = "1000"
        };
     
       let currency = await db.fetchCookies(`serverCurrency_${message.guild.id}`);

        if (!currency.text) {
            currency.text = "$"
        };

   let reason = args.slice(1).join(' ');
if (reason.length > 30)  return message.reply('You cannot exceed 30 Characters!');

const cookies = require("cookiesdb")
const fs = require("fs")
        const embed = new RichEmbed()
            .setColor(0xffff84)
            .setTitle('Profile Example')
        .addField('Example' , `+pset info Name is jeff`)

            

        if (!args[0]) {
            return message.channel.send({ embed });
          
        } else {
            if (!keys.includes(args[0].toLowerCase())) return message.channel.send({ embed });
            if (args[0].toLowerCase() === 'info') {
                if (!reason) {
                    reason = this.client.config.info
                };
                let upgrade = JSON.parse(fs.readFileSync("./quest.json", "utf8"))
            
            
                                      
              let userUp = message.author
              if(!upgrade[userUp.id]) upgrade[userUp.id] = {
                upgrade: 0
              };

              
              upgrade[userUp.id].upgrade++;
              fs.writeFile("./quest.json", JSON.stringify(upgrade), (error) => {
                if (error) console.log(error)
    if(upgrade[message.author.id].upgrade  == 1){
           message.channel.send('Weekly quest complete!')

  return cookies.updateCookies(`globalCredits_${message.author.id}`, 500)
    }
              })

                await db.updateText(`customPrefix_${message.author.id}`,reason);
                message.channel.send(`Updated Info on profile command! **${reason}**`)
            };
            if (args[0].toLowerCase() === 'workname') {
                if (!reason) {
                    reason = 'Penguin\'s'
                };

                await db.updateText(`customName_${message.author.id}`,reason);
                message.channel.send(`Updated Restaurant Name : **${reason}**`)
            };
        }
    }
exports.config = {
    command: 'pset',
    aliases: ['profileset'],
    plevel: "User",
    description: "Sends you the Server Information",
    usage: "serverinfo",
    category: "Information"
};

exports.extra = {
    hidden: false
};