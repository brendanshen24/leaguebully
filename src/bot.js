const { Client, Intents } = require('discord.js-v11');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_PRESENCES] });

const sendMessage = (guild, channel) =>{
    channel.send('<@USERID OF PERSON YOURE MAKING FUN OF> jesus christ go touch some grass. you\'ve been playing league for the past hour now. stop playing. get a life.')
    clearTimeout(timoutId)
    once.done = false;
}

const once = function (guild,channel) {
    if (once.done) return;
    global.timoutId = setTimeout(sendMessage, 3600000, guild,channel);
    once.done = true;
};

client.on('presenceUpdate', (oldPresence, newPresence) => {
    let member = newPresence.member;
    if (member.id === 'USERID OF PERSON YOURE MAKING FUN OF'){
        if (newPresence.activities[0] != undefined){
            if(newPresence.activities[0].type == 'PLAYING'){
                if(newPresence.activities[0].name == 'League of Legends'){
                    const guild = client.guilds.cache.get('ENTER SERVER ID HERE');
                    const channel = guild.channels.cache.get('ENTER TEXT CHANNEL ID HERE');
                    once(guild,channel);
                }
            }
        }
        if (newPresence.activities[0] === undefined){
            clearTimeout(timoutId)
            once.done = false;
        }
    }
});

client.login('ENTER BOT TOKEN HERE');