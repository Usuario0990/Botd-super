const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require("megadb")

module.exports = {
  name: "eat", 
  alias: [], 

async execute (client, message, args){

  if(!message.guild) return;

  let user = message.author;     
     const hotdog = new db.crearDB("hotdog")
     const hamburguesa = new db.crearDB("hamburguesa")
     const ensalada = new db.crearDB("ensalada")
     const manzana = new db.crearDB("manzana")
     const manz1 = await manzana.obtener(`${user.id}`)
     const ens1 = await ensalada.obtener(`${user.id}`)
     const hamb1 = await hamburguesa.obtener(`${user.id}`)
     const hotdg1 = await hotdog.obtener(`${user.id}`)

     if(!hotdog.tiene){
       hotdog.establecer(`${user.id}`, 0)
     }

     if(!hamburguesa.tiene){
       hamburguesa.establecer(`${user.id}`, 0)
     }

     if(!ensalada.tiene){
       ensalada.establecer(`${user.id}`, 0)
     }

     if(!manzana.tiene){
       manzana.establecer(`${user.id}`, 0)
     }

     if(!args[0]) return message.channel.send("Debes elegir que quieres comer! Hay hamburguesa, manzana, ensalada y hot dog.")

     if(args[0] === "manzana"){
      if(manz1 === 0) return message.channel.send("No tienes manzanas.")
      const embed = new Discord.MessageEmbed()
     .setTitle(`${user.tag} está comiendo Manzana`)
     .setImage("http://mx.emedemujer.com/wp-content/uploads/sites/5/2017/01/apple.gif")
     .setColor("RANDOM")

     manzana.restar(`${user.id}`, 1)
     message.channel.send(embed)
      
     }

     if(args[0] === "ensalada"){
      if(ens1 === 0) return message.channel.send("No tienes ensalada.")

      const embed = new Discord.MessageEmbed()
      .setTitle(`${user.tag} está comiendo ensalada`)
      .setImage("https://media.tenor.com/images/5323fd2f72bb8311d43622e06f409830/tenor.gif")
      .setColor("RANDOM")

      ensalada.restar(`${user.id}`, 1)
     message.channel.send(embed)
     }

     if(args[0] === "hamburguesa"){
       if(hamb1 === 0) return message.channel.send("No tienes hamburguesas.")

       const embed = new Discord.MessageEmbed()
      .setTitle(`${user.tag} está comiendo Hamburguesa`)
      .setImage("https://m.gifmania.com/Gif-Animados-Dibujos-Animados/Imagenes-Nickelodeon/Bob-Esponja/Patricio-Comiendo-Hamburguesas-67043.gif")
      .setColor("RANDOM")
      
      hamburguesa.restar(`${user.id}`, 1)
      message.channel.send(embed)
     }

     if(args.slice(0).join(" ") === "hot dog"){
     if(hotdg1 === 0) return message.channel.send("No tienes hot dog.")
     
      const embed = new Discord.MessageEmbed()
      .setTitle(`${user.tag} está comiendo Hot dog`)
      .setImage("https://media3.giphy.com/media/l1K9Dcy7ww0CW3JHq/giphy.gif")
      .setColor("RANDOM")
      
      hotdog.restar(`${user.id}`, 1)
      message.channel.send(embed)     
     }

 }

} 