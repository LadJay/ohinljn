exports.run = (client, message, args) => {

    if (!message.guild.member(client.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return message.reply("**Error:** I don't have the **Manage Roles** permission!");
    if (!message.member.hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return message.reply("You don't have the **Manage Roles** permission!");
    if (message.mentions.users.size === 0) return message.reply("Please mention a user to give the role too.");
    let member = message.guild.member(message.mentions.users.first());
    if (!member) return message.reply("**Error:** That user does not seem valid.");
    let name = message.content.split(" ").splice(2).join(" ");
    let role = message.guild.roles.find("name", name);
    if (!role) return message.reply(`:no_entry_sign: **Error:** ${name} isn't a role on this server!`);
    let botRolePosition = message.guild.member(client.user).highestRole.position;
    let rolePosition = role.position;
    if (botRolePosition <= rolePosition) return message.channel.send("**Error:** Failed to add the role to the user because my highest role is lower than the specified role.");
    member.addRole(role).catch(e => {
        return message.channel.send(`**Error:**\n${e}`);
    });
    message.channel.send(`Added **${name}** to **${message.mentions.users.first().username}**.`);
}

exports.config = {
    command: 'addrole',
    aliases: [],
    plevel: "Admin",
    description: "Add A certain amount to a users balance. [Global]",
    usage: "add <@user> <amount of coins>",
    category: "Currency"
};

exports.extra = {
    hidden: false
};
