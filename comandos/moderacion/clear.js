const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "clear", 
  alias: ["purge"], 

execute (client, message, args){

  if(!message.guild) return;

  let permiso = message.member.hasPermission("MANAGE_CHANNELS");
     if(!permiso) return message.channel.send('No tienes los permisos suficientes');
     if(!args[0]) return message.channel.send("Debes poner cuantos mensajes quieres eliminar.")
     if(isNaN(args[0])) return message.channel.send("Esa no es una cantidad válida!")
     if(args[0] > 99) return message.channel.send("No puedo eliminar 100 mensajes o más de 100 mensajes.")    
   
  setTimeout(function(){
  message.channel.bulkDelete(args[0]).then(()=> {

  
    message.channel.send(`<a:check1:839254203032535080> **${args[0]}** mensajes borrados correctamente.`).then(msg => msg.delete({timeout: 10000}))
    });

  }, 1000)

 }

} 