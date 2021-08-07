const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "shop", 
  alias: ["Tienda"], 

execute (client, message, args){

  if(!message.guild) return;

  let apartado = args.join(" ");

  if(!apartado) {
    const embed = new Discord.MessageEmbed()
  .setTitle("⛔ Tienda ⛔")
  .setDescription("Bienvenidos a la tienda de ChickBot.\n\n**items:**\n\n🍔 Hamburguesa | <:Alfr_moneda:841452547130523658> 20\nUna hamburguesa deliciosa para quitar el hambre.\n\n🥗 Ensalada | <:Alfr_moneda:841452547130523658> 10\nUn poco de ensalada para los veganos o vegetarianos. 👌\n\n🌭 Hot dog | <:Alfr_moneda:841452547130523658> 20\nPan con hot dog.\n\n⌚ Reloj | <:Alfr_moneda:841452547130523658> 100\nObjeto de utilidad.")
  .setColor("RANDOM")
  .setFooter("Página 1 de 2 | Tienda")
  message.channel.send(embed)
  }

  if(apartado === "1"){

    const embed = new Discord.MessageEmbed()
  .setTitle("⛔ Tienda ⛔")
  .setDescription("Bienvenidos a la tienda de ChickBot.\n\n**items:**\n\n🍔 Hamburguesa | <:Alfr_moneda:841452547130523658> 20\nUna hamburguesa deliciosa para quitar el hambre.\n\n🥗 Ensalada | <:Alfr_moneda:841452547130523658> 10\nUn poco de ensalada XD\n\n🌭 Hot dog | <:Alfr_moneda:841452547130523658> 20\nPan con hot dog.\n\n⌚ Reloj | <:Alfr_moneda:841452547130523658> 100\nObjeto de utilidad.")
  .setColor("RANDOM")
  .setFooter("Página 1 de 2 | Tienda")
  message.channel.send(embed)
  }

  if(apartado === "2"){
    const embed = new Discord.MessageEmbed()
  .setTitle("⛔ Tienda ⛔")
  .setDescription("Bienvenidos a la tienda de ChickBot.\n\n**items:**\n\n📜 Pergamino | <:Alfr_moneda:841452547130523658> 15\nÚsala para escribir un mensaje a tus amigos.\n\n✏ Lápiz | <:Alfr_moneda:841452547130523658> 5\nNo creo que te sirva, pero lo puedes coleccionar.\n\n💎 Diamante | <:Alfr_moneda:841452547130523658> 20\nTe servirá como dinero también.\n\n<:Mascarilla:839254190995144764> Mascarilla | <:Alfr_moneda:841452547130523658> 2\nProtégete del virus con esta mascarilla.\n\n🍎 Manzana | <:Alfr_moneda:841452547130523658> 10\nLas manzanas son saludables y nutritivas, quien sabe si te salvaría la vida...\n\n**Mascotas:**\n\n:guide_dog: Perro (Mascota) | :gem: 10\nPodras compartir buenos momentos con tu mascota.")
  .setColor("RANDOM")
  .setFooter("Página 2 de 2 | Tienda")
  message.channel.send(embed)
  }
  
 }

} 