const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require("megadb")

module.exports = {
  name: "bag", 
  alias: ["mochila"], 

async execute (client, message, args){

  if(!message.guild) return;
  
     const user = message.author;     
     const hamburguesa = new db.crearDB("hamburguesa")
     const ensalada = new db.crearDB("ensalada")
     const hotdog = new db.crearDB("hotdog")
     const reloj = new db.crearDB("reloj")
     const pergamino = new db.crearDB("pergamino")
     const lapiz = new db.crearDB("lapiz")
     const diamante = new db.crearDB("diamante")
     const mascarilla = new db.crearDB("mascarilla")
     const manzana = new db.crearDB("manzana")
     
     
     if(!hamburguesa.tiene(`${user.id}`)){
       hamburguesa.establecer(`${user.id}`, 0)
     }
     if(!ensalada.tiene(`${user.id}`)){
       ensalada.establecer(`${user.id}`, 0)
     } 
     if(!hotdog.tiene(`${user.id}`)){
       hotdog.establecer(`${user.id}`, 0)
     }
     if(!reloj.tiene(`${user.id}`)){
       reloj.establecer(`${user.id}`, 0)
     } 
     if(!pergamino.tiene(`${user.id}`)){
       pergamino.establecer(`${user.id}`, 0)
     } 
     if(!lapiz.tiene(`${user.id}`)){
       lapiz.establecer(`${user.id}`, 0)
     } 
     if(!diamante.tiene(`${user.id}`)){
       diamante.establecer(`${user.id}`, 0)
     } 
     if(!mascarilla.tiene(`${user.id}`)){
       mascarilla.establecer(`${user.id}`, 0)
     } 
     if(!manzana.tiene(`${user.id}`)){
       manzana.establecer(`${user.id}`, 0)
     }
     
     const hamb1 = await hamburguesa.obtener(`${user.id}`)
     const ensal1 = await ensalada.obtener(`${user.id}`)
     const hotdg1 = await hotdog.obtener(`${user.id}`)
     const rel = await reloj.obtener(`${user.id}`)
     const perg = await pergamino.obtener(`${user.id}`)
     const lapiz1 = await lapiz.obtener(`${user.id}`)
     const dia1 = await diamante.obtener(`${user.id}`)
     const masc1 = await mascarilla.obtener(`${user.id}`) 
     const manz = await manzana.obtener(`${user.id}`)
     
     
     const embed = new Discord.MessageEmbed()
     .setTitle(`Mochila de ${user.tag}`)
     .setDescription(`Items:\n\n🍔 Hamburguesa (${hamb1})\n🥗 Ensalada (${ensal1})\n🌭 Hot dog (${hotdg1})\n⌚ Reloj (${rel})\n📜 Pergamino (${perg})\n✏ Lápiz (${lapiz1})\n💎 Diamante (${dia1})\n<:Mascarilla:814333931737710592> Mascarilla (${masc1})\n🍎 Manzana (${manz})`)     
     .setColor("RANDOM")
     .setTimestamp()
     message.channel.send(embed)

 }

} 