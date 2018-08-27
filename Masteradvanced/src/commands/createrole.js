exports.run = (client, message, args) => {
    if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply(':x: I do not have the correct permissions.').catch(console.error);
  if (!message.guild.member(message.author).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply(':x: You do not have permission to use this cmd! \n This requires Mange_Roles_Or_Pemission Perms!').catch(console.error);
        if (!/^[0-9A-F]{6}$/i.test(args[1].toString())) return message.channel.send('Invalid hex color! ');

	message.guild.createRole({ 
	name: args[0],
	color: args[1],
	hoist: true, // Whether the role should be displayed on the right side (online list)
	position: 0 // Role position
});
      return message.channel.send(`Success Created Role ${args[0]} Hex : ${args[1]}`)

};

exports.config = {
    command: 'createrole',
    aliases: ['askme', 'magic8'],
    plevel: "Admin",
    description: "Ask the magical ball something.",
    usage: "8ball <Question>",
    category: "ヅ General ヅ"
};

exports.extra = {
    hidden: false
};

