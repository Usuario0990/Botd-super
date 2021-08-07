const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "elegir", 
  alias: [], 

execute (client, message, args){

  if(!message.guild) return;

  if(!args[0]) return message.channel.send("Escribe el numero de opciones para elegir.")
    
    if(args[0] === "2"){
      if(!args[1]) return message.channel.send("Debes escribir tu primera opción.")
      if(!args[2]) return message.channel.send("Debes escribir tu segunda opción.")

      let opciones = [`${args[1]}`, `${args[2]}`]
      let random = opciones[Math.floor(Math.random() * opciones.length)] 
      const embed = new Discord.MessageEmbed()
    .setTitle("Elegir")
    .setColor("RANDOM")
    .addField("De las opciones:", `${args[1]}, ${args[2]}`)
    .addField("Yo Elijo", `${random}`)    
     message.channel.send(embed)      
   }     

    if(args[0] === "3"){
      if(!args[1]) return message.channel.send("Debes escribir tu primera opción.")
      if(!args[2]) return message.channel.send("Debes escribir tu segunda opción.")
       if(!args[3]) return message.channel.send("Debes escribir tu tercera opción.")

       let opciones = [`${args[1]}`, `${args[2]}`, `${args[3]}`]
      let random = opciones[Math.floor(Math.random() * opciones.length)] 
      const embed = new Discord.MessageEmbed()
    .setTitle("Elegir")
    .setColor("RANDOM")
    .addField("De las opciones:", `${args[1]}, ${args[2]}, ${args[3]}`)
    .addField("Yo Elijo", `${random}`)    
     message.channel.send(embed)   
   } 
    if(args[0] === "4"){
      if(!args[1]) return message.channel.send("Debes escribir tu primera opción.")
      if(!args[2]) return message.channel.send("Debes escribir tu segunda opción.")
       if(!args[3]) return message.channel.send("Debes escribir tu tercera opción.")
       if(!args[4]) return message.channel.send("Debes escribir tu cuarta opción.")    
     

       let opciones = [`${args[1]}`, `${args[2]}`, `${args[3]}`, `${args[4]}`]
      let random = opciones[Math.floor(Math.random() * opciones.length)] 
      const embed = new Discord.MessageEmbed()
    .setTitle("Elegir")
    .setColor("RANDOM")
    .addField("De las opciones:", `${args[1]}, ${args[2]}, ${args[3]}, ${args[4]}`)
    .addField("Yo Elijo", `${random}`)    
     message.channel.send(embed)   
    }

 }

} 