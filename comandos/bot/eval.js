const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const { inspect } = require("util")

module.exports = {
  name: "eval", 
  alias: [], 

execute (client, message, args){

  if(!message.guild) return;

  if(message.author.id !== "693564975570092073") return message.channel.send("Eyyyyy! No puedes ejecutar este comando, es algo privado! -_-")

     const command = args.slice(0).join(" ")
     if(!command) return message.channel.send("Debes escribir un comando.")

     try{
       const evaled = eval(command)
       let palabras = ["token", "destroy"]
       if(palabras.some(word => message.content.toLowerCase().includes(word))){
         return message.channel.send("Ese tipo de palabras no están permitidas.")
       }

       const embed = new Discord.MessageEmbed()
       .setColor("GREEN")
       .setTitle("Evaluado correctamente")
       .addField(`**Tipo**:`, `\`\`\`prolog\n${typeof(evaled)}\`\`\``, true)
       .addField("**Evaluado en:**", `\`\`\`yaml\n${Date.now() - message.createdTimestamp}ms\`\`\``, true)
       .addField(`**Entrada**`, `\`\`\`js\n${command}\`\`\``)
       .addField(`**Salida**`, `\`\`\`js\n${inspect(evaled, {depth: 0})}\`\`\``)
       message.channel.send(embed)   
     } catch (error) {
       const embedfallo = new Discord.MessageEmbed()
       .setColor("RED")
       .addField(`**Entrada**`, `\`\`\`js\n${command}\`\`\``)
       .addField(`Error`, `\`\`\`js\n${error}\`\`\``)
       message.channel.send(embedfallo)
     }

 }

} 