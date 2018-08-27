const db = require('cookiesdb');
const { RichEmbed } = require('discord.js');


    
    const config = require('../storages/config.json');

    exports.run = async (client,message, args)=> {
       let user = message.mentions.users.first();
       
          const keys = ['b', 'b2', 'modlog', 'currency', 'welcome', 'goodbye'];
        let fetchedDB = await db.fetchCookies(`customPrefixs_${user.id}`);
        let statusWelcome = await db.fetchCookies(`statusWelcome_${message.guild.id}`);
        if (!fetchedDB.text) {
            fetchedDB.text = config.badges
        };
        let fetchedDBB = await db.fetchCookies(`customPrefixs_${user.id}`);
        let statusWelcomes = await db.fetchCookies(`statusWelcome_${message.guild.id}`);
        if (!fetchedDBB.text) {
            fetchedDBB.text = config.badges2
        };
        let currency = await db.fetchCookies(`serverCurrency_${message.guild.id}`);

        if (!currency.text) {
            currency.text = ":dollar:"
        };
   let reason = args.slice(2).join(' ');
if (reason.length > 100)  return message.reply('You cannot exceed 30 Characters!');


          
            if (!keys.includes(args[1].toLowerCase())) return message.channel.send({ embed });
            if (args[1].toLowerCase() === 'b') {
                if (!reason) {
                    reason = this.client.config.badges
                };

                await db.updateText(`customPrefixs_${user.id}`,reason);
                message.channel.send(`Updated Badges on  Users profile command! **${reason}**`)
            };
        
             if (args[1].toLowerCase() === 'b2') {
                if (!reason) {
                    reason = this.client.config.badges2
                };

                await db.updateText(`customPrefixss_${user.id}`,reason);
                message.channel.send(`Updated Badges on  Users profile command! **${reason}**`)
            };
          
          
        }
    
exports.config = {
    command: 'badgeset',
    aliases: ['sinfo', 'sstats'],
    plevel: "Staff",
    description: "Sends you the Server Information",
    usage: "serverinfo",
    category: "Information"
};

exports.extra = {
    hidden: false
};