exports.run = (client, message, args) => {
	var shop = require('../functions/buy.js');
	
	shop(client, message, args);
};

	
exports.config = {
    command: 'buy',
    aliases: [],
    plevel: "User",
    description: "buy items in the market",
    usage: "buy",
    category: "Currency"
};

exports.extra = {
    hidden: false
};