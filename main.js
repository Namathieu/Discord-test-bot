const Discord = require("discord.js");
const config = require("./config.json");
const memberCounter = require('./counters/membre-counter');
const fs = require('fs');
const bot = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });

bot.commands = new Discord.Collection();
bot.events = new Discord.Collection();

['command_handler.js', 'event_handler.js'].forEach(handler =>{
  require(`./handlers/${handler}`)(bot, Discord);
})

bot.on("ready", () => {
  memberCounter(bot);
});

bot.on('guildMemberAdd', guildMember => {
  let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'El Gars');

  guildMember.roles.add(welcomeRole);
  guildMember.guild.channels.cache.get('812063193475973160').send(`Yo <@${guildMember.user.id}> kes tu criss icit!`)
});


bot.login(config.token);

// 1-800-808-6352