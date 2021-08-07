const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require("megadb")

module.exports = {
  name: "unmute", 
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

  if(muterolnum === "no") return message.channel.send("Debes asignar un rol para desmutear, prueba con el comando setmute.")

  const idrol = muterolnum

     let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
            let role = message.guild.roles.cache.find(rol => rol.id === `${idrol}`)


                if (!args[0]) return message.channel.send("Debes mencionar a un usuario.")
                if (!user) return message.channel.send("Debes mencionar a un usuario válido.")

                if(user.id === message.author.id) return message.channel.send("No te puedes desmutear a ti mismo!")

                if(user.id === "861259381849194576"){
    return message.channel.send("Hey no! No puedes hacer eso conmigo!")
  }

                if (!user.roles.cache.has(role.id)) return message.channel.send("Ese usuario no está muteado.")   
                              
        
                await user.roles.remove(role.id).catch((err) => {
              return message.channel.send("Hubo un error al realizar la operación.")
                })                        
                                                
                return message.channel.send(`<a:check1:839254203032535080> ${user} ha sido desmuteado correctamente.`)               
             

 }

} 