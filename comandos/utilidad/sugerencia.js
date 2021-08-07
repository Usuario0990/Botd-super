const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require("megadb")

module.exports = {
  name: "sugerencia", 
  alias: [], 

async execute (client, message, args){

  let sugerencia = args.join(" ")
  if(!sugerencia) return message.channel.send("Debes escribir tu sugerencia!")

  const canales_sugs = new db.crearDB("canales_sugs")

  if(!canales_sugs.tiene(message.guild.id)){
    canales_sugs.establecer(message.guild.id, "no")
  }

  const canal = await canales_sugs.obtener(message.guild.id)
  

  if(canal === "no"){
    return message.channel.send("<a:equis1:839254207680348160> No hay un canal de sugerencias configurado en este servidor! Prueba con el comando a!setsugs")
  }

  const idcanal = canal

  const usuario = message.author

  const embed = new Discord.MessageEmbed()
  .setTitle("Nueva sugerencia!")
  .setAuthor(usuario.tag, message.author.displayAvatarURL())
  .setDescription(sugerencia)
  .setColor("RANDOM")
  .setFooter("Para sugerir algo, escribe a!sugerencia.")
  .setTimestamp()

  const embed2 = new Discord.MessageEmbed()
  .setTitle("Todo ha salido bien!")
  .setDescription("<a:check1:839254203032535080> Tu sugerencia ha sido enviada correctamente!")
  .setColor("GREEN")

  message.channel.send(embed2)
  client.channels.cache.get(idcanal).send(embed).then(async msg => {
    msg.react("✅")
    msg.react("❌")
  })
  

 }

} 