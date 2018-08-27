exports.run = (client, message) => {
    const moment = require('moment');
    require('moment-duration-format');
    const { RichEmbed, version } = require('discord.js');
    var user = message.mentions.users.first();
	var member = message.guild.member(user);
    const config = require('../storages/config.json');
  let guild = message.guild;
  var temps = moment(message.createdTimestamp).format("LLLL");
    const uptime = moment.duration(client.uptime).format(' D [days], H [hours], m [mins], s [secs]');
 let roles = message.guild.roles.map(r =>  r.toString()).join('>')

let verified = guild.id == '390832315494039554' && '473603119431811078' 

    var embed = new RichEmbed()
	.setColor('RANDOM')
    .setTitle(`${message.guild.name}'s`)
	.setDescription(`**Information** \n\nTotal Server Members : ${message.guild.memberCount} Members \n Total Channels ${message.guild.channels.size.toLocaleString()} \n Guild Owner ${message.guild.owner.user} \n Server ID : ${message.guild.id} \n\n **Guild User Status** \n <a:green:473603173592858634> __Online:__ ${message.guild.members.filter(m => m.user.presence.status == "online").size} \n <a:yellow:473603217209688065> __AFK/Idle:__ ${message.guild.members.filter(m => m.user.presence.status == "idle").size} \n <a:red:473603260167487490> __DnD:__ ${message.guild.members.filter(m => m.user.presence.status == "dnd").size} \n<a:offline:473605049646317613> Invisble/Offline ${message.guild.members.filter(m => m.user.presence.status == "offline").size} \n Total Bots : ${message.guild.members.filter(m=>m.user.bot).size} Bots \n\n Created At ${message.guild.createdAt} \n\n **All Roles (${message.guild.roles.size})** \n  ${roles}`)

	    message.channel.send({ embed })

}
exports.config = {
    command: 'serverinfo',
    aliases: ['sinfo', 'sstats'],
    plevel: "User",
    description: "Sends you the Server Information",
    usage: "serverinfo",
    category: "Information"
};

exports.extra = {
    hidden: false
};