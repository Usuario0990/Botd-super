const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require("megadb")

module.exports = {
  name: "buy", 
  alias: [], 

async execute (client, message, args){
  
  if(!message.guild) return;

     const user = message.author;

     const dinero = new db.crearDB("dinero")     
     const hamburguesa = new db.crearDB("hamburguesa")
     const ensalada = new db.crearDB("ensalada")
     const hotdog = new db.crearDB("hotdog")
     const reloj = new db.crearDB("reloj")
     const pergamino = new db.crearDB("pergamino")
     const lapiz = new db.crearDB("lapiz")
     const diamante = new db.crearDB("diamante")
     const mascarilla = new db.crearDB("mascarilla")
     const manzana = new db.crearDB("manzana")
     const mascota = new db.crearDB("mascota")

     if(!dinero.tiene(`${user.id}`)){
       dinero.establecer(`${user.id}`, 0)
     }
     let dinerouser = await dinero.obtener(`${user.id}`)
     const objeto = args.join(" ")
     if(!objeto) return message.channel.send("Debes escribir un objeto.")

     if(objeto === "hamburguesa"){
       if(!hamburguesa.tiene(`${user.id}`)){
         if(dinerouser < 20) return message.channel.send("No tienes suficiente dinero.")
         if(dinerouser === 0) return message.channel.send("No tienes dinero.")
       hamburguesa.establecer(`${user.id}`, 1)
       dinero.restar(`${user.id}`, 20)       
       }else{
         if(dinerouser < 20) return message.channel.send("No tienes suficiente dinero.")
         if(dinerouser === 0) return message.channel.send("No tienes dinero.")
        hamburguesa.sumar(`${user.id}`, 1)
        dinero.restar(`${user.id}`, 20)        
       }       

       message.channel.send(`${user} Has comprado una **Hamburguesa** por <:Alfr_moneda:841452547130523658> **20**`)
     } 

     if(objeto === "perro"){
       if(!mascota.tiene(`${user.id}`)){
         if(!diamante.tiene(`${user.id}`)){
           diamante.establecer(`${user.id}`, "0")
         }
         
         const diaman1 = await diamante.obtener(`${user.id}`)
         if(diaman1 < 10) return message.channel.send("No tienes suficientes diamantes.")
         if(diaman1 === 0) return message.channel.send("No te quedan diamantes.")
       mascota.establecer(`${user.id}`, ":guide_dog: Perro")
       diamante.restar(`${user.id}`, 10)       
       }else{

         if(!diamante.tiene(`${user.id}`)){
           diamante.establecer(`${user.id}`, "0")
         }
         
         const diaman12 = await diamante.obtener(`${user.id}`)
         if(diaman12 < 10) return message.channel.send("No tienes suficientes diamantes.")
          if(diaman12 === 0) return message.channel.send("No te quedan diamantes.")
        mascota.establecer(`${user.id}`, ":guide_dog: Perro")
        diamante.restar(`${user.id}`, 10)        
       }       

       message.channel.send(`${user} Has comprado un **Perro** para que sea su mascota por :gem: **10**`)
     }
     
     if(objeto === "gato"){
       return;
     }



     if(objeto === "ensalada"){
       if(!ensalada.tiene(`${user.id}`)){
         if(dinerouser < 10) return message.channel.send("No tienes suficiente dinero.")
         if(dinerouser === 0) return message.channel.send("No tienes dinero.")
       ensalada.establecer(`${user.id}`, 1)
       dinero.restar(`${user.id}`, 10)       
       }else{
         if(dinerouser < 10) return message.channel.send("No tienes suficiente dinero.")
         if(dinerouser === 0) return message.channel.send("No tienes dinero.")
        ensalada.sumar(`${user.id}`, 1)
        dinero.restar(`${user.id}`, 10)        
       }       

       message.channel.send(`${user} Has comprado una **Ensalada** por <:Alfr_moneda:841452547130523658> **10**`)
     }

     if(objeto === "hot dog"){
       if(!hotdog.tiene(`${user.id}`)){
         if(dinerouser < 20) return message.channel.send("No tienes suficiente dinero.")
         if(dinerouser === 0) return message.channel.send("No tienes dinero.")
       hotdog.establecer(`${user.id}`, 1)
       dinero.restar(`${user.id}`, 20)       
       }else{
         if(dinerouser < 20) return message.channel.send("No tienes suficiente dinero.")
         if(dinerouser === 0) return message.channel.send("No tienes dinero.")
        hotdog.sumar(`${user.id}`, 1)
        dinero.restar(`${user.id}`, 20)        
       }       

       message.channel.send(`${user} Has comprado un **Hot dog** por <:Alfr_moneda:841452547130523658> **20**`)
     }
     

     if(objeto === "reloj"){
       if(!reloj.tiene(`${user.id}`)){
         if(dinerouser < 100) return message.channel.send("No tienes suficiente dinero.")
         if(dinerouser === 0) return message.channel.send("No tienes dinero.")
       reloj.establecer(`${user.id}`, 1)
       dinero.restar(`${user.id}`, 100)       
       }else{
         if(dinerouser < 100) return message.channel.send("No tienes suficiente dinero.")
         if(dinerouser === 0) return message.channel.send("No tienes dinero.")
        reloj.sumar(`${user.id}`, 1)
        dinero.restar(`${user.id}`, 100)        
       }       

       message.channel.send(`${user} Has comprado un **Reloj** por <:Alfr_moneda:841452547130523658> **100**`)
     }

     if(objeto === "pergamino"){
       if(!pergamino.tiene(`${user.id}`)){
         if(dinerouser < 15) return message.channel.send("No tienes suficiente dinero.")
         if(dinerouser === 0) return message.channel.send("No tienes dinero.")
       pergamino.establecer(`${user.id}`, 1)
       dinero.restar(`${user.id}`, 15)       
       }else{
         if(dinerouser < 15) return message.channel.send("No tienes suficiente dinero.")
         if(dinerouser === 0) return message.channel.send("No tienes dinero.")
        pergamino.sumar(`${user.id}`, 1)
        dinero.restar(`${user.id}`, 15)        
       }       

       message.channel.send(`${user} Has comprado un **Pergamino** por <:Alfr_moneda:841452547130523658> **15**`)
     }     

     if(objeto === "lápiz"){
       if(!lapiz.tiene(`${user.id}`)){
         if(dinerouser < 5) return message.channel.send("No tienes suficiente dinero.")
         if(dinerouser === 0) return message.channel.send("No tienes dinero.")
       lapiz.establecer(`${user.id}`, 1)
       dinero.restar(`${user.id}`, 5)       
       }else{
         if(dinerouser < 5) return message.channel.send("No tienes suficiente dinero.")
         if(dinerouser === 0) return message.channel.send("No tienes dinero.")
        lapiz.sumar(`${user.id}`, 1)
        dinero.restar(`${user.id}`, 5)        
       }       

       message.channel.send(`${user} Has comprado un **Lápiz** por <:Alfr_moneda:841452547130523658> **5**`)
     }

     if(objeto === "diamante"){
       if(!diamante.tiene(`${user.id}`)){
         if(dinerouser < 20) return message.channel.send("No tienes suficiente dinero.")
         if(dinerouser === 0) return message.channel.send("No tienes dinero.")
       diamante.establecer(`${user.id}`, 1)
       dinero.restar(`${user.id}`, 20)       
       }else{
         if(dinerouser < 20) return message.channel.send("No tienes suficiente dinero.")
         if(dinerouser === 0) return message.channel.send("No tienes dinero.")
        diamante.sumar(`${user.id}`, 1)
        dinero.restar(`${user.id}`, 20)        
       }       

       message.channel.send(`${user} Has comprado un **Diamante** por <:Alfr_moneda:841452547130523658> **20**`)
     }

     if(objeto === "mascarilla"){
       if(!mascarilla.tiene(`${user.id}`)){
         if(dinerouser < 2) return message.channel.send("No tienes suficiente dinero.")
         if(dinerouser === 0) return message.channel.send("No tienes dinero.")
       mascarilla.establecer(`${user.id}`, 1)
       dinero.restar(`${user.id}`, 2)       
       }else{
         if(dinerouser < 2) return message.channel.send("No tienes suficiente dinero.")
         if(dinerouser === 0) return message.channel.send("No tienes dinero.")
        mascarilla.sumar(`${user.id}`, 1)
        dinero.restar(`${user.id}`, 2)        
       }       

       message.channel.send(`${user} Has comprado una **Mascarilla** por <:Alfr_moneda:841452547130523658> **2**`)
     }

     if(objeto === "manzana"){
       if(!manzana.tiene(`${user.id}`)){
         if(dinerouser < 10) return message.channel.send("No tienes suficiente dinero.")
         if(dinerouser === 0) return message.channel.send("No tienes dinero.")
       manzana.establecer(`${user.id}`, 1)
       dinero.restar(`${user.id}`, 10)       
       }else{
         if(dinerouser < 10) return message.channel.send("No tienes suficiente dinero.")
         if(dinerouser === 0) return message.channel.send("No tienes dinero.")
        manzana.sumar(`${user.id}`, 1)
        dinero.restar(`${user.id}`, 10)        
       }       

       message.channel.send(`${user} Has comprado una **Manzana** por <:Alfr_moneda:841452547130523658> **10**`)
     }

 }

} 