const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require("megadb")
const ms = require("ms")

module.exports = {
  name: "tempmute", 
  alias: ["temp-mute"], 

async execute (client, message, args){

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

    let time = args[1]

    if(!time) return message.channel.send("Debes colocar el tiempo que el usuario quedará muteado. Ejemplo: 1h, 20m, 10m, 10s, etc.")

    let timer = ms(time)
        
    await user.roles.add(role.id).catch((err) => {
    return message.channel.send("El rol establecido para mutear está mas arriba que mi rol o hubo un error!")
    });

    const miembro_mute = new db.crearDB("miembro_mute")

    if(!miembro_mute.tiene(message.guild.id)){
      miembro_mute.establecer(`ultimomute_${message.guild.id}`, "no")
    }

    const tempmute = new Discord.MessageEmbed()
    .setTitle("Tempmute")
    .setDescription(`<a:check1:839254203032535080> ${user} ha sido tempmuteado correctamente!`)    
    .setColor("ORANGE")
    .addField("Tiempo", time, true)
    .addField("Moderador", `${message.author}`, true)
    .setFooter("Pueden ocurrir errores, ya que a veces el bot se desconecta")
    .setTimestamp()

    message.channel.send(tempmute)

    miembro_mute.establecer(`ultimomute_${message.guild.id}`, user.id)

    let tiempo = timer
    
    

    setTimeout(async function () {
      await user.roles.remove(role.id)

      const usuario = await miembro_mute.obtener(`ultimomute_${message.guild.id}`)

      message.channel.send(`El usuario <@${usuario}> fue desmuteado después de ${time}.`)
    }, tiempo)
    

 }

} 