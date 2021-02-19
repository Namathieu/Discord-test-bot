module.exports = {
    name: 'command',
    description: "Best thing!!!",
    execute(message, args, Discord){
        if(message.member.roles.cache.has('812010832586211409')){ //Ici on parle du rôle Mod
            const newEmbed = new Discord.MessageEmbed()    
            .setColor('#304281')
            .setTitle('Rules')
            .setURL('https://www.google.com')
            .setDescription('This is a test for Rules')
            .addFields(
                {name: 'Rules 1', value: 'BE GOOD!!!'},
                {name: 'Rules 2', value: 'Jtaime'}
            )
            .setImage('https://i.kym-cdn.com/photos/images/newsfeed/001/023/007/f29.png')
            .setFooter('Make sure to not passout!!')

            message.channel.send(newEmbed);
        } else {
            message.channel.send('Tas pas le doigt'); 
        }
    }

}