const Discord = require("discord.js");

module.exports = async (client) => {

  

const array = [
  {
    name: `🐥 ChickBot | Viendo ${client.users.cache.size} usuarios!`, 
    type: `PLAYING`
  },  
  {
    name: `🐥 ChickBot | En ${client.guilds.cache.size} servidores!`, 
    type: `PLAYING`
  },
  {
    name: `🐥 ChickBot | El pollo de Discord`,
    type: `WATCHING`
  },
  {
    name: `🐥 ChickBot | #QuedateEnCasa`,
    type: `PLAYING`
  },
  {
    name: `c!help | c!reportbug`,
    type: `PLAYING`
  },
  {
    name: `🐥 ChickBot | Moderación, Utilidad, Diversión, Economía, Música y mucho más!`,
    type: `COMPETING`
  },
  {
    name: `🐥 ChickBot | ${client.commands.size} comandos!`,
    type: `PLAYING`   
  }
]

    setInterval(() => {
function presence(){
  client.user.setPresence({
    status: "online",
    activity: array[Math.floor(Math.random() * array.length)],
            });
        }

        
        presence();
    }, 120000);
    
   console.log(`ESTE BOT FUNCIONA`);

   await client.channels.cache.get("870000514266452078").messages.fetch("870063712189448212").then(m => console.log("Se ha cargado el mensaje de verificacion"))
  
}