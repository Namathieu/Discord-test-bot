module.exports = {
    name: 'leave',
    description: 'stop the bot and leave the channel',
    async execute(bot, message, args) {
        const voiceChannel = message.member.voice.channel;
 
        if(!voiceChannel) return message.channel.send("Kes tu fa pas dans un voice channel?!");
        await voiceChannel.leave();
        await message.channel.send('Brah je décrisse!')
 
    }
}