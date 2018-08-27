exports.run = (client, member) => {
	const cookies = require('cookiesdb');
    const thize = require('thize');
        let guild = member.guild;

let count = thize(member.guild.memberCount);
	cookies.fetchCookies(`servstatus_${member.guild.id}`).then(c => {
    if (member.user === client.user) return;
    if (c.text === "false") return;
let sayings = [`${member.user} has entered the portal`,`${member.user} has jumped out of the battle bus to join ${member.guild.name}`,`${member.user} has just joined the cool gang`, `Looks Like a new member has just showed up ${member.user}`]
    		var random = sayings[Math.floor(Math.random() * sayings.length)];
cookies.fetchCookies(`servwelcome_${member.guild.id}`).then(w => {
    		cookies.fetchCookies(`servwchannel_${member.guild.id}`).then(d => {
                if (!d.text) return;
    			var welcomeMSG = w.text.replace("{user}", member.user).replace("{randomWelcome}",random).replace("{user}", member.user).replace("{randomWelcome}",random).replace("{username}", member.user.username).replace("{code}",member.user.discriminator).replace("{members}", count).replace("{server}", member.guild.name);
    			member.guild.channels.get(d.text).send(welcomeMSG)
    		})
		})
	})
	cookies.fetchCookies(`autorole_${member.guild.id}`).then(a => {
		cookies.fetchCookies(`astats_${member.guild.id}`).then(b => {
			if (b.text === "false") return;
				var arole = member.guild.roles.find('name', a.text);
				member.addRole(arole)
		})
	})
};
