const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const OS = require('os');

module.exports = {
  name: "botinfo", 
  alias: [], 

execute (client, message, args){

  const maxMemory = OS.totalmem();

function getMemoryUsage() {
    const free = OS.freemem();
    return {
        max: memory(maxMemory),
        free: memory(free),
        used: memory(maxMemory - free),
        usedByProcess: memory(process.memoryUsage().rss)
    }
}

function memory(bytes = 0) {
    const gigaBytes = bytes / 1024 ** 3;
    
    if(gigaBytes > 1) { 
        return `${gigaBytes.toFixed(1)} GB`;
    }

    const megaBytes = bytes / 1024 ** 2; 
    
    if(megaBytes < 10) return `${megaBytes.toFixed(2)} MB`;
        
    if(megaBytes < 100) return `${megaBytes.toFixed(1)} MB`;
        
     return `${Math.floor(megaBytes)} MB`; 
}

let memoria = getMemoryUsage();

  const embed = new Discord.MessageEmbed()
  .setTitle("ChickBot | Información")
  .setDescription(`Hola! soy ChickBot, un pollo que intenta llevar felicidad y ayuda a servidores que necesitan un apoyo. Tengo ${client.commands.size} comandos. Espero te agrade y que pases un buen rato :3\nSé que todos tenemos errores, por eso si yo tengo uno, te pido lo reportes con c!reportbug para que pueda mejorar, estarías apoyando mucho <3.`)
  .setColor("YELLOW")
  .addField("Dueño:", "『𝑴𝒂𝒕𝒆𝒐ᵗᵉᵐ』#9999", true)
  .addField("Lenguaje:", "<:JavaScript:839254194635669526> JavaScript", true)
  .addField("Librería:", "<:Discordjs:839254184834236428> Discord.js V12.5.3", true)
  .addField("**💽 Memoria: 💽**", "⇺------------------⇼-----------------⇻")
  .addField('Memoria maxima', memoria.max, true)
  .addField('Memoria libre', memoria.free, true)
  .addField('Memoria usada por el bot', memoria.usedByProcess, true)
  .setFooter(`ChickBot | Ping: ${client.ws.ping}ms - En ${client.guilds.cache.size} servidores.`)

  message.channel.send(embed)

 }

} 