const db = require("megadb")

module.exports = {
  name: "use", 
  alias: [], 

async execute (client, message, args){

  if(!message.guild) return;

  const objeto = args[0];
     let user = message.author;
     const mascarilla = new db.crearDB("mascarilla")
     const reloj = new db.crearDB("reloj")
     const pergamino = new db.crearDB("pergamino")
     const per1 = await pergamino.obtener(`${user.id}`)
     const masc1 = await mascarilla.obtener(`${user.id}`)
     const rel1 = await reloj.obtener(`${user.id}`)    

     if(!mascarilla.tiene(`${user.id}`)){
       mascarilla.establecer(`${user.id}`, 0)
     }

     if(!reloj.tiene(`${user.id}`)){
       reloj.establecer(`${user.id}`, 0)
     }

     if(!pergamino.tiene(`${user.id}`)){
       pergamino.establecer(`${user.id}`, 0)
     }

     if(!objeto) return message.channel.send("Debes poner que quieres usar.")

     if(objeto === "mascarilla"){

     if(masc1 === 0) return message.channel.send("No tienes mascarillas.")

     const embed = new Discord.MessageEmbed()
     .setTitle(`${user.tag} se ha puesto una **Mascarilla**`)
     .setDescription("Se está protegiendo contra el virus.")
     .setColor("RANDOM")
     .setImage("https://media.discordapp.net/attachments/804842440766390292/819744575425478686/1067c4bab5ebc1247afacbf3b9685644.gif")

     mascarilla.restar(`${user.id}`, 1)
     message.channel.send(embed)
     }

     if(objeto === "reloj"){
       if(rel1 === 0) return message.channel.send("No tienes relojes.")

       const moment = require("moment")

       const embed = new Discord.MessageEmbed()
     .setTitle(`${user.tag} ha mirado su **Reloj**`)
     .setDescription(`¿Qué hora será? Son las ${moment(new Date()).format("LTS")}`)
     .setColor("RANDOM")
     .setImage("https://media.discordapp.net/attachments/804842440766390292/819746146007253052/pngtree-vector-clock-icon-png-image_865317.jpg?width=566&height=566")
     

     message.channel.send(embed)
     }

     if(objeto === "pergamino"){
       if(per1 === 0) return message.channel.send("No tienes pergamino.")

       let mencionado = message.mentions.users.first()
       let mensaje = args.slice(2).join(" ");

       if(!mencionado) return message.channel.send("No has mencionado a nadie.")

       if(mencionado === user) return message.channel.send("No te puedes enviar un mensaje a ti mismo.")

       if(!mensaje) return message.channel.send("Debes poner un mensaje para enviarle a la persona")

       const embed = new Discord.MessageEmbed()
       .setTitle("Este mensaje es para usted:")
       .setDescription(`De: ${user.username}\n\nPara: ${mencionado.username}\n\n**${mensaje}**`)
       .setColor("YELLOW")
       .setThumbnail("https://media.discordapp.net/attachments/804842440766390292/819758161120329768/pergamino-y-pluma.jpg")
       .setTimestamp()
       mencionado.send(embed)
       pergamino.restar(`${user.id}`, 1)
       message.channel.send("Tu mensaje ha sido enviado correctamente.")

     }

 }

} 