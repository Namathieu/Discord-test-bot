module.exports = {
    name: 'reactionrole',
    description: "Best thing!!!",
    async execute(bot, message, args, Discord) {
        const channel = '812082693801639957';
        const modRole = message.guild.roles.cache.find(role => role.name === "Mod");
        const defaultRole = message.guild.roles.cache.find(role => role.name === "El Gars");

        const modEmoji = '🐔';
        const defaultEmoji = '💩';

        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle(`T'es une marde ou un chicken?`)
            .setDescription(`Away clique sur ske t'ai !!\n\n`
                + `${modEmoji} pour être une marde\n`
                + `${defaultEmoji} pour être une poule!!`);

        let messageEmbed = await message.channel.send(embed);

        messageEmbed.react(modEmoji);
        messageEmbed.react(defaultEmoji);

        bot.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === modEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(modRole);
                }
                if (reaction.emoji.name === defaultEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(defaultRole);
                }
            } else {
                return;
            }
        });

        bot.on('messageReactionRemove', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === modEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(modRole);
                }
                if (reaction.emoji.name === defaultEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(defaultRole);
                }
            } else {
                return;
            }
        });

    }
}