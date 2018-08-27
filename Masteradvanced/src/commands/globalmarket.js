exports.run = (client, message, args) => {
	var market = require('../functions/market.js');
	
	market(client, message, args);
};
	
exports.config = {
    command: 'market',
    aliases: ['store','shop'],
    plevel: "User",
    description: "Views the items in the market ",
    usage: "market",
    category: "Currency"
};

exports.extra = {
    hidden: false
};