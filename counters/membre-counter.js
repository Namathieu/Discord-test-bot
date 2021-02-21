module.exports = async (bot) =>{
    
    const guild = bot.guilds.cache.get('806553465806389248');
    
    setInterval(() =>{

        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('812448666887258135');

        channel.setName(`Total Members: ${memberCount.toLocaleString()}`);
        console.log('Updating Member Count');

    }, 600000); // Au 10 minutes!
}