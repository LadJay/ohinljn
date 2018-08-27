exports.run = (client, message, args) => {
	const config = require('../storages/config.json');
	message.delete();
  const {Discord , RichEmbed} = require("discord.js")
  	let user = message.mentions.users.first() || message.author;
	let servers = client.guilds.filter(g => g.members.has(user.id));
	var message2 = "```";
	for (var i = 0; i < servers.map(g => g.name).length; i++) {
		var temp = (i === 0 ? `Mutual Servers ${user.tag}\n` : "") + (i + 1) + ". " + servers.map(g => g.name)[i] + "\n";
		if ((message2 + temp).length <= 2000 - 3) {
			message2 += temp;
		} else {
			message2 += "```";
			message.channel.send(message2);
			message2 = "```js";
		}
	}
	message2 += "```";
      
        let nick = message.guild.members.get(user.id).nickname;
        if (!nick) {
            nick = 'No Nicknames';
        }
        let status = user.presence.status;
        if (status === 'online') {
            status = ' <a:green:473603173592858634> Online';
        } else if (status === 'idle') {
            status = '<a:yellow:473603217209688065> Idle';
        } else if (status === 'dnd') {
            status = '<a:red:473603260167487490> Do Not Disturb';
        } else {
            status = '<a:offline:473605049646317613> Invisible';
        }
        let isStream = 'Current Game';
        if (user.presence.game && user.presence.game.streaming) {
            isStream = 'Current Stream';
        }
        let game;
        if (user.presence.game === null) {
            game = 'Playing no game';
        } else if (user.presence.game.streaming) {
            game = `[${user.presence.game.name}](${user.presence.game.url})`;
        } else {
            game = user.presence.game.name;
        }
        let roles = message.guild.members.get(user.id).roles.map(r => r.toString()).slice(1).join('-');
        if (roles.length === 5) roles = 'None';

        var embed = new RichEmbed() 
        .setColor("RANDOM")
            .setAuthor(message.author.username, message.author.avatarURL)
        .addField('Name' , `${user.username}#${user.discriminator}`,true)
        .addField('NickName' , `${nick}`)
        .addField('Status Check'  , `${status}`,true)
        .addField('Game' , `${game}`,true)
        .addField('Joined This Server on' ,`${message.guild.members.get(user.id).joinedAt.toDateString()}`, true)
        .addField('Created on' , `${user.createdAt.toDateString()}`, true )
        .addField(`Mutual Servers` , `${message2}`)
        .addField('Roles' , `${roles}` , true)
        
        message.channel.send(embed)

        
            
        
    };

exports.config = {
    command: 'userinfo',
    aliases: ['uinfo', 'ustats'],
    plevel: "User",
    description: "Sends you the mentioned users Information",
    usage: "userinfo",
    category: "Information"
};

exports.extra = {
    hidden: false
};