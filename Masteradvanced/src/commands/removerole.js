exports.run = (client, message, args) => {

     if (!message.guild.member(client.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return message.reply("**Error:** I am missing the permission **Manage_Roles**");
    if (!message.member.hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return message.reply("**Error:** You must require permission **Manage_Roles** in order to use this command!");
    if (message.mentions.users.size === 0) return message.reply("Error: Please mention a user to remove a role from.");
    let member = message.guild.member(message.mentions.users.first());
    if (!member) return message.reply("**Error:** That user does not seem valid.");
    let name = message.content.split(" ").splice(2).join(" ");
    let role = message.guild.roles.find("name", name);
    member.removeRole(role).catch(e => {
    });
    message.channel.send(`I've removed the **${name}** role from **${message.mentions.users.first().username}**.`);
}

exports.config = {
    command: 'removerole',
    aliases: ['rrole','roleremove'],
    plevel: "Admin",
    description: "Add A certain amount to a users balance. [Global]",
    usage: "add <@user> <amount of coins>",
    category: "Currency"
};

exports.extra = {
    hidden: false
};
