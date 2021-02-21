const ms = require('ms');
module.exports = {
    name: 'mute',
    description: "Best thing!!!",
    execute(bot, message, args){
        if(message.member.roles.cache.has('812010832586211409')||('812509719801495554')){ //Ici on parle du rôle Mod
            const target = message.mentions.users.first();
            if(target){
                let mainRole = message.guild.roles.cache.find(role => role.name === 'El Gars');
                let muteRole = message.guild.roles.cache.find(role => role.name === 'Mute');

                let memberTarget = message.guild.members.cache.get(target.id);

                if(!args[1]){
                    memberTarget.roles.remove(mainRole.id);
                    memberTarget.roles.add(muteRole.id);
                    message.channel.send(`<@${memberTarget.user.id}> a pu le doigt de talk!!`);
                    return
                }

                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> a pu le doigt de talk pour ${ms(ms(args[1]))}!!`);
                
                setTimeout(function(){
                    memberTarget.roles.remove(muteRole.id);
                    memberTarget.roles.add(mainRole.id);
                    message.channel.send(`<@${memberTarget.user.id}> a le doigt de talk!!`);
                }, ms(args[1]));
            } else{
                message.channel.send("De ki tu parles?!");
            }
        } else {
            message.channel.send('Tas pas le doigt');
        }
    }  
}