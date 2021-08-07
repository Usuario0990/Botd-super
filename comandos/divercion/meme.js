const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const used = new Map();
const Duration = require("humanize-duration");

module.exports = {
  name: "meme", 
  alias: [], 

execute (client, message, args){

  if(!message.guild) return;

   const cooldown = used.get(message.author.id);

  if(cooldown) {
   const remaining = Duration(cooldown - Date.now(), { units: ['h','m','s'], language: 'es', conjunction: ' y ', serialComma: false, round: true});
  
   return message.channel.send(`${message.author}, Espera **${remaining}** para volver a usar este comando.`).then(async(msg) => {
        setTimeout(() => {
        msg.delete();
      }, 5000)
      });  
  
   }
  else{
    used.set(message.author.id, Date.now() + 1000 * 5);
    setTimeout(()=> used.delete(message.author.id),1000 * 5);
  }

     const { meme } = require('memejs')
     const memes = require("discord-memes");

      let posibilidades = ["imagen", "video"]
    let posibilidadfinal = posibilidades[Math.floor(Math.random() * posibilidades.length)]

    if(posibilidadfinal === "imagen"){
      const embedimagen = new Discord.MessageEmbed()
      .setImage(memes.imagenesEspañol())
      .setColor("RANDOM")
      message.channel.send(embedimagen)
     }
     
   if(posibilidadfinal === "video"){
     message.channel.send(memes.videosEspañol())
   
   }

 }

} 