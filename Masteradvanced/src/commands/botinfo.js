exports.run = (client, message) => {
    const moment = require('moment');
    require('moment-duration-format');
    const { RichEmbed, version } = require('discord.js');
    const config = require('../storages/config.json');
    const uptime = moment.duration(client.uptime).format(' D [days], H [hrs], m [mins], s [secs]');
  let os = require('os')
let cpuStat = require("cpu-stat")
  let cpuLol;
    cpuStat.usagePercent(function(err, percent, seconds) {
        if (err) {
            return console.log(err);
        }
    var embed = new RichEmbed()
        .setColor("RANDOM")
        .setFooter('Developer : Penguin#7132')
        .setTimestamp()
        .setThumbnail(`${client.user.displayAvatarURL}`)
        .setAuthor(`${client.user.username} Stats`, client.user.avatarURL)
        .addField('**Bot Version**', 'v' + config.version, true)
        .addField('** Bot Uptime**', uptime, true)
            .addField('**Command Status**', `<a:yellow:473603217209688065> Stable`, true)
                .addField('**API Status**', `<a:yellow:473603217209688065> Stable`, true)
            .addField('**Bot Status**', `<a:green:473603173592858634> Online`, true)
			.addField('**Memory Usage**', `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)}MB`, true)
            .addField('**Bot Language**', `Javascript , discord.js `, true)
            .addField("**CPU usage**", `\`${percent.toFixed(2)}%\``, true)
		.addField('**Current Servers**', client.guilds.size.toLocaleString(), true)
        .addField('**Total Users**', client.users.size.toLocaleString(), true)
            .addField('**Staff Team**', `Developers: <@293805585378574336> | <@387668516372873228>\nStaff Team: <@311954616503762946>(Administrator) | <@406104185789218830>(Moderators) | <@293425115419508736>(Moderators) | <@182597070471954433>(Moderators)`, true)

        			.addField('**Links**', `    **__[Donate](https://www.paypal.me/LadJay)__** || **__[Support Server](https://discord.gg/eyFYz2s)__** || \n __**[Invite Bot](https://discordapp.com/oauth2/authorize?client_id=431533930286415893&scope=bot&permissions=2103801919)**__ || __**[Vote](https://discordbots.org/bot/431533930286415893/vote)**__`, true)

    message.channel.send({ embed })

})
}

//client.users.size.toLocaleString()
//client.guilds.size.toLocaleString()
exports.config = {
    command: 'botinfo',
    aliases: ['info', 'stats'],
    plevel: "User",
    description: "Sends you the Bot Information",
    usage: "info",
    category: "Information"
};

exports.extra = {
    hidden: false
};
