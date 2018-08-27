// Do not touch ;)

const config = require('./config.json');

const perms = {
    permLevels: [{
            level: 0,
            name: "User",
            check: () => true
        },
        {
            level: 3,
            name: "Cleaner",
            check: (message) => {
                try {
                    if (message.member.hasPermission('MANAGE_MESSAGES')) return true;
                } catch (e) {
                    return false;
                }
            }
        },

        {
            level: 4,
            name: "Kick",
            check: (message) => {
                try {
                    if (message.member.hasPermission('KICK_MEMBERS')) return true;
                } catch (e) {
                    return false;
                }
            }
        },

        {
            level: 5,
            name: "Ban",
            check: (message) => {
                try {
                    if (message.member.hasPermission('BAN_MEMBERS')) return true;
                } catch (e) {
                    return false;
                }
            }
        },

        {
            level: 6,
            name: "Admin",
            check: (message) => {
                try {
                    if (message.member.hasPermission('ADMINISTRATOR')) return true;
                } catch (e) {
                    return false;
                }
            }
        },

        {
            level: 7,
            name: "Server Owner",

            check: (message) => message.channel.type === "text" ? (message.guild.owner.user.id === message.author.id ? true : false) : false
        },

        {
            level: 9,
            name: "Staff",
            check: (message) => config.adminID.includes(message.author.id)
        },
{
            level: 8,
            name: "Mods",
            check: (message) => config.modID.includes(message.author.id)

        },
        {
            level: 10,
            name: "Bot Owner",
            check: (message) => config.ownerID.includes(message.author.id)

        }
    ]
};

module.exports = perms;