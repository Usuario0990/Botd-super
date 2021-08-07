const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "reportbug", 
  alias: ["reportarbug"], 

execute (client, message, args){

  let reporte = args.join(" ");

  if(!reporte) return message.channel.send("Escribe que bug quieres reportar!")

  const embed1 = new Discord.MessageEmbed()
  .setTitle("Enhorabuena!")
  .setDescription("<a:check1:839254203032535080> | Reporte de Bug enviado correctamente")
  .setColor("RED")
  .setFooter("Se ha enviado el reporte, se tratará de solucionar lo más pronto posible")
  .setTimestamp()

  const embed2 = new Discord.MessageEmbed()
  .setTitle(":incoming_envelope: | Nuevo reporte de bug")
  .setThumbnail(message.author.displayAvatarURL({ size: 1024 }))
  .setColor("RED")
  .setDescription(`⇺----------------⇼-----------------⇻\n\nAutor del reporte: ${message.author.tag}\nID: ${message.author.id}\n\nServidor: ${message.guild.name}\n\nReporte:\n**${reporte}**`)
  .setTimestamp()
  message.channel.send(embed1)
  client.users.cache.get('693564975570092073').send(embed2)

 }

} 