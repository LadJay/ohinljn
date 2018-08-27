exports.run = (client, message, args) => {
    let name = message.content.split(" ").splice(1).join(" ");

	 let role = message.guild.roles.find("name", name);
    if (!role) return message.reply(`:no_entry_sign: **Error:** ${name} isn't a role on this server!`);
    var { RichEmbed } = require('discord.js');


        var embed = new RichEmbed()
			.setColor(role.hexColor)
			.addField('Name', role.name)
        			.addField('Creation Date', role.createdAt.toDateString())
			.addField('ID', role.id)
        			.addField('Mentionable?', role.mentionable ? `<@&${role.id}>` : 'No')
			.addField('Hoisted?', role.hoist ? `Yes` : 'No')
			.addField('Color', role.hexColor.toUpperCase())
		return message.channel.send(embed);
	
};

exports.config = {
    command: 'roleinfo',
    aliases: ['ri'],
    plevel: "User",
    description: "Role Information",
    usage: "ri / roleinfo <role>",
    category: "Information"
};

exports.extra = {
    hidden: false
};