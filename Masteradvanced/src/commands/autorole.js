exports.run = (client, msg, args) => {
	const cookies = require('cookiesdb');

	cookies.fetchCookies(`autorole_${msg.guild.id}`).then(a => {
		cookies.fetchCookies(`astats_${msg.guild.id}`).then(b => {
			b.text = args[0];

			if (args[0] !== "true" && args[0] !== "false")
				return msg.channel.send('<:error:473988063001837571> Error: Invaild Args! \n **Example**: +setarole true/false <role>');

			if (args[0] === "false") {
				cookies.updateText(`astats_${msg.guild.id}`, args[0]).then(d => {
					msg.channel.send('<a:tickg:473984512708050945> Disabled Autorole!')
				})
			}

			if (args[0] === "true") {
				if (!msg.guild.roles.find('name', args.slice(1).join(' ').trim())) return msg.channel.send('<a:tickg:473984512708050945> Error: Invaild Role');
				cookies.updateText(`autorole_${msg.guild.id}`, args.slice(1).join(' ').trim()).then(c => {
					cookies.updateText(`astats_${msg.guild.id}`, b.text).then(z => {
						msg.channel.send(`<a:tickg:473984512708050945> Set the Autorole to **${args.slice(1).join(' ').trim()}**`)
					})
				})
			}
		})
	})
};

exports.config = {
    command: 'setarole',
    aliases: ['setauto'],
    plevel: "Admin",
    description: "Sets the guild autorole",
    usage: "autorole <true/false> <role name>",
    category: "👀 Moderation 👀"
};

exports.extra = {
    hidden: false
};