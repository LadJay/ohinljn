const { RichEmbed } = require('discord.js');

    const config = require('../storages/config.json');    
    const db = require('quick.db');    

module.exports.run = async (client, message, args) => { // Command Handler Module Code
  

if (!message.member.hasPermission('ADMINISTRATOR') && message.author.id !== '293805585378574336') return message.channel.send('Sorry, you don\'t have permission to change server prefix')
	.then(msg => msg.delete({
		timeout: 10000
	}));
if (!args.join(' ')) return message.channel.send('Please provide a prefix to change server prefix')
	.then(msg => msg.delete({
		timeout: 10000
	}));

db.set(`prefix10_${message.guild.id}`, args.join(' '))
	.then(i => {
		message.channel.send(`Server Prefix has been changed to ${i}`);
	})
}

exports.config = {
    command: 'prefix',
    aliases: [],
    plevel: "Admin",
    description: "Checks the API Latency for Discord!",
    usage: "ping",
    category: "ヅ General ヅ"
};

exports.extra = {
    hidden: false
};
