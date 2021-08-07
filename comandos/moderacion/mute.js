const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require("megadb")

module.exports = {
  name: "mute", 
  alias: [], 

async execute (client, message, args){

  if(!message.guild) return;

       let permiso = message.member.hasPermission("MANAGE_CHANNELS");
     if(!permiso) return message.channel.send('No tienes los permisos suficientes.'); 

     const muterol = new db.crearDB("muterol")

  if(!muterol.tiene(`${message.guild.id}`)){
    muterol.establecer(`${message.guild.id}`, "no")
  }
  

  const muterolnum = await muterol.obtener(`${message.guild.id}`)

  if(muterolnum === "no") return message.channel.send("Debes asignar un rol para mutear, prueba con el comando setmute.")

  const idrol = muterolnum
     

    let user = message.mentions.members.first()

    let role = message.guild.roles.cache.find(rol => rol.id === `${idrol}`)
            
    if (!user) return message.channel.send("Debes mencionar a un usuario!")

    if(user.id === message.author.id) return message.channel.send("No te puedes mutear a ti mismo!")

    if(user.id === "861259381849194576"){
    return message.channel.send("Hey no! No puedes hacer eso conmigo!")
  }

  if(message.member.roles.highest.comparePositionTo(user.roles.highest) <= 0 ) return message.channel.send("No puedes mutear a una persona de igual o mayor rango que el tuyo.")

    if(user.roles.cache.has(role.id)) return message.channel.send("El usuario mencionado ya está muteado")
        
    await user.roles.add(role.id).catch((err) => {
    return message.channel.send("El rol establecido para mutear está mas arriba que mi rol o hubo un error!")
    });
                
    if(!args[1]){                 
    return message.channel.send(`<a:check1:839254203032535080> ${user} ha sido muteado correctamente.\nRazón: No especificado`)
    }                
                                                
    return message.channel.send(`<a:check1:839254203032535080> ${user} ha sido muteado correctamente.\nRazón: ${args.slice(1).join(" ")}`)               
                

 }

}
 