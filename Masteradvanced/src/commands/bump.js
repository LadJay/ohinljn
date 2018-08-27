exports.run = (client, message, args) => {
   	var eightball = require('../functions/bump.js');
	
	eightball(client, message, args);
};

exports.config = {
    command: 'bump',
    aliases: ['share', 'server'],
    plevel: "Ban",
    description: "Bump to advertise your server link in Pengu's Offcial Server.",
    usage: "bump",
    category: "👀 Moderation 👀"
};

exports.extra = {
    hidden: false
};