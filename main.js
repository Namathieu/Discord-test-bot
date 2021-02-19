const Discord = require("discord.js");
const config = require("./config.json");
const fs = require('fs');
const bot = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});

bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
  const command = require(`./commands/${file}`);

  bot.commands.set(command.name, command)
}

bot.on("ready", () => {
    console.log('Bot has started.'); 
});

bot.on('guildMemberAdd', guildMember =>{
  let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'El Gars');

  guildMember.roles.add(welcomeRole);
  guildMember.guild.channels.cache.get('812063193475973160').send(`Yo <@${guildMember.user.id}> kes tu criss icit!`)
});

bot.on('message', message =>{
  if(!message.content.startsWith(config.prefix) || message.author.bot) return;

  const args = message.content.slice(config.prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if(command === 'command'){
    bot.commands.get('command').execute(message, args, Discord);
  }

  if(command === 'clear'){
    bot.commands.get('clear').execute(message, args);
  } else if(command === 'ban'){
      bot.commands.get('ban').execute(message, args);
  } else if(command === 'kick'){
      bot.commands.get('kick').execute(message, args);
  } else if(command ==='mute'){
      bot.commands.get('mute').execute(message, args);
  } else if(command ==='unmute'){
      bot.commands.get('unmute').execute(message, args);
  } else if(command ==='reactionrole'){
      bot.commands.get('reactionrole').execute(message, args, Discord, bot);
  }


});



bot.login(config.token);