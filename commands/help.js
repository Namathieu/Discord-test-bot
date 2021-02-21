module.exports = {
    name: 'help',
    description: "Best thing!!!",
    execute(bot, message, args, Discord){
            const newEmbed = new Discord.MessageEmbed()    
            .setColor('#304281')
            .setTitle(`Comm's`)
            .setDescription(`c'est les commande bro`)
            .addFields(
                {name: 'Commande 1', value: '!ban'},
                {name: 'Commande 2', value: '!clear'},
                {name: 'Commande 3', value: '!help'},
                {name: 'Commande 4', value: '!Kick'},
                {name: 'Commande 5', value: '!leave'},
                {name: 'Commande 6', value: '!mute'},
                {name: 'Commande 7', value: '!play'},
                {name: 'Commande 8', value: '!reactionrole'},
                {name: 'Commande 9', value: '!unmute'},
                {name: `Y'en a d'autre?`, value: `Y'en a pu!!!!!`}
            )
            .setImage('https://i.kym-cdn.com/photos/images/newsfeed/001/023/007/f29.png')
            .setFooter('Make sure to not passout!!')

            message.channel.send(newEmbed);
        }
    }
