module.exports = {
    name: 'clear',
    description: "Best thing!!!",
    async execute(message, args){
        
        if(message.member.roles.cache.has('812010832586211409')){ //Ici on parle du rôle Mod
            if(!args[0]) return message.reply("Yo met des numéros calisse!");
            if(isNaN(args[0])) return message.reply("Brooo j'ai dis des NUMÉROS");

            if(args[0] > 100) return message.reply("Slack un peu et reduit ton chiffre pas plus de 100!!!")
            if(args[0] < 1) return message.reply("Fait pas ton cheap pis efface au moins 1 message!")

            await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages)
            });
        } else {
            message.channel.send('Tas pas le doigt');
        }

        
    }  
}