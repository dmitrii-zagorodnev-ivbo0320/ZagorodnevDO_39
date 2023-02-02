const { Client, Intents } = require("discord.js")
const Discord = require('discord.js');
const client = new Discord.Client({ intents: ['GUILDS', 'GUILD_BANS', 'GUILD_PRESENCES', 'GUILD_MESSAGES', 'GUILD_MEMBERS', 'GUILD_MESSAGE_REACTIONS', 'GUILD_VOICE_STATES'] });

let guild

client.once('ready', () =>{
    console.log('Started!')
})

module.exports = client