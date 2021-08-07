const Discord = require("discord.js");
const db = require("megadb")

module.exports = async (client, member) => {

     const welcome = new db.crearDB("welcome")
     const mensajeb = new db.crearDB("mensajeb")
     const tipob = new db.crearDB("tipob")

     if(!welcome.tiene(`${member.guild.id}`)){
      welcome.establecer(`${member.guild.id}`, "no")
     }

     if(!mensajeb.tiene(`${member.guild.id}`)){
      mensajeb.establecer(`${member.guild.id}`, "no")
    }

     const idbienvenida = await welcome.obtener(`${member.guild.id}`)

     if(idbienvenida === "no"){
       return;
     }

     const tipo = await tipob.obtener(`${member.guild.id}`)

     if(tipo === "normal"){
     const men = await mensajeb.obtener(`${member.guild.id}`)

     const mensaje = men.replace(/{user}/, `<@${member.user.id}>`).replace(/{usertag}/, member.user.tag).replace(/{server}/, member.guild.name).replace(/{memberCount}/, member.guild.memberCount)

     if(idbienvenida === "no"){
       return;
     }

     const id = idbienvenida


     client.channels.cache.get(`${id}`).send(`${mensaje}`)

     }

     if(tipo === "embed"){

     const idbienvenida = await welcome.obtener(`${member.guild.id}`)     

     const men = await mensajeb.obtener(`${member.guild.id}`)

     if(idbienvenida === "no"){
       return;
     }

     const id = idbienvenida

     const mensaje = men

     const embedb = new Discord.MessageEmbed()
     .setTitle("Nuevo Miembro!")
     .setColor("RANDOM")
     .setDescription(`${member}, bienvenido al servidor ${member.guild.name}!\n\n${mensaje}`)
     .setThumbnail(member.user.displayAvatarURL({ size: 1024, dynamic: true }))
     .setFooter(`Ahora hay ${member.guild.memberCount} miembros!`)


     client.channels.cache.get(`${id}`).send(embedb)

     }

     if(tipo === "imagen"){
       
       const Canvas = require("canvas")

       const men = await mensajeb.obtener(`${member.guild.id}`)

       const url = men

       const idbienvenida = await welcome.obtener(`${member.guild.id}`)

       const id = idbienvenida

       const canvas = Canvas.createCanvas(1018, 468);
	     const ctx = canvas.getContext('2d');

	     const background = await Canvas.loadImage(`${url}`);
       
	     ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
	     ctx.strokeStyle = '#74037b';
	    ctx.strokeRect(0, 0, canvas.width, canvas.height);

      const texto = await Canvas.loadImage(`https://media.discordapp.net/attachments/837427680051200083/838542274937356288/Bienvenido_1.png`);
      ctx.drawImage(texto, 360, 60, 670, 350);

	    ctx.beginPath();
	    ctx.arc(225, 235, 163, 0, Math.PI * 2, true);
	    ctx.closePath();
	    ctx.clip();

      
	    const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ size: 1024, format: 'jpg' }));
	    ctx.drawImage(avatar, 62, 72, 330, 330);
      

	    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'bienvenida-imagen.png');

      client.channels.cache.get(`${id}`).send(attachment)

     }
   
   
  
}