module.exports = {
    name: 'unmute',
    description: "Best thing!!!",
    execute(message, args){
        if(message.member.roles.cache.has('812010832586211409')){ //Ici on parle du rôle Mod
            const target = message.mentions.users.first();
            if(target){
                let mainRole = message.guild.roles.cache.find(role => role.name === 'El Gars');
                let muteRole = message.guild.roles.cache.find(role => role.name === 'Mute');

                let memberTarget = message.guild.members.cache.get(target.id);

                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
                message.channel.send(`<@${memberTarget.user.id}> a le doigt de talk!!`);
            } else{
                message.channel.send("De ki tu parles?!");
            }
        } else {
            message.channel.send('Tas pas le doigt');
        }
    }  
}