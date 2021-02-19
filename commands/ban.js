module.exports = {
    name: 'ban',
    description: "Best thing!!!",
    execute(message, args){
        if(message.member.roles.cache.has('812010832586211409')){ //Ici on parle du rôle Mod
            const member = message.mentions.users.first();
            if(member){
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.ban();
                message.channel.send("Brah y'est gone");
            } else {
                message.channel.send("De ki tu parles?!");
            }
        } else {
            message.channel.send('Tas pas le doigt');
        }
    }  
}