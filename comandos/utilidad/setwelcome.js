const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require("megadb")

module.exports = {
  name: "setwelcome", 
  alias: ["setbienvenidas"], 

execute (client, message, args){

  if(!message.guild) return;

  var perms = message.member.hasPermission("ADMINISTRATOR")
  if(!perms) return message.channel.send("No tienes suficientes permisos!")

  const welcome = new db.crearDB("welcome")
  const mensajeb = new db.crearDB("mensajeb")
  const tipob = new db.crearDB("tipob")

  if(!welcome.tiene(`${message.guild.id}`)){
    welcome.establecer(`${message.guild.id}`, "no")
  }

  if(!mensajeb.tiene(`${message.guild.id}`)){
    mensajeb.establecer(`${message.guild.id}`, "no")
  }

  let canal = message.mentions.channels.first()
  if(!canal) return message.channel.send("Debes mencionar un canal para establecer la bienvenida!")
  const valido = message.guild.channels.resolve(canal.id)

  if(!valido) return message.channel.send("Ese canal no es de este servidor!")

  let tipo = args[1]

  if(!tipo) return message.channel.send("Debes poner un tipo de bienvenida! Debe ser normal, embed o imagen.")

  if(tipo === "normal"){

  tipob.establecer(`${message.guild.id}`, "normal")    

  let mensaje = args.slice(2).join(" ")
  if(!mensaje) return message.channel.send("Debes poner que mensaje quieres que ponga para que haga la bienvenida!")
  

  welcome.establecer(`${message.guild.id}`, `${canal.id}`)
  mensajeb.establecer(`${message.guild.id}`, `${mensaje}`)

  message.channel.send(`Las bienvenidas han sido configuradas correctamente!`)

  }

  if(tipo === "embed"){

    tipob.establecer(`${message.guild.id}`, "embed")

    let embedmensaje = args.slice(2).join(" ")
    if(!embedmensaje) return message.channel.send("Debes poner que mensaje quieres que ponga en el embed de bienvenida!")

    welcome.establecer(`${message.guild.id}`, `${canal.id}`)
    mensajeb.establecer(`${message.guild.id}`, `${embedmensaje}`)

    message.channel.send(`Las bienvenidas han sido configuradas correctamente!`)  

  }

  if(tipo === "imagen"){

    message.channel.send("Especificaciones recomendadas de la imagen:\n\n**Tamaño recomendado:** 1018 píxeles (Ancho) x  468 píxeles (Largo)\n**Formato recomendado:** Subido de Discord")

    tipob.establecer(`${message.guild.id}`, "imagen")

    let linkimagen = args.slice(2).join(" ")

    if(!linkimagen) return message.channel.send("Debes poner una URL o link de una imagen para hacer la bienvenida en imagen!\n\n**Tamaño recomendado:** 1018 píxeles (Ancho) x  468 píxeles (Largo)\n**Formato recomendado:** Subido de Discord")

    if(message.content.toLowerCase().includes("https:")) return message.channel.send("Quita el https://")

    if(message.content.toLowerCase().includes("http:")) return message.channel.send("Quita el http://")

    welcome.establecer(`${message.guild.id}`, `${canal.id}`)
    mensajeb.establecer(`${message.guild.id}`, `https://${linkimagen}`)

    message.channel.send(`Las bienvenidas han sido configuradas correctamente!`)

  }

 }

} 