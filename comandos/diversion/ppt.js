const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "ppt", 
  alias: [], 

execute (client, message, args){

  if(!message.guild) return;

  let eleccion = args[0];

  if(!eleccion) return message.channel.send("Debes poner una de las opciones piedra, papel o tijera.")

  let elementos = ["Piedra", "Papel", "Tijera"]
  let random = elementos[Math.floor(Math.random() * elementos.length)]
       

  if(eleccion == "piedra"){
    if(random === "Piedra"){
      const embed = new Discord.MessageEmbed()
      .setTitle("Hay un Empate!")
      .setDescription(`${message.author.username} ha elegido: Piedra\n\nYo elegí: Piedra`)
      .setColor("RANDOM")
      message.channel.send(embed)
    }

    if(random == "Papel"){
      const embed2 = new Discord.MessageEmbed()
      .setTitle("He ganado!")
      .setDescription(`${message.author.username} ha elegido: Piedra\n\nYo elegí: Papel`)
      .setColor("RANDOM")
      message.channel.send(embed2)
    }

    if(random == "Tijera"){
      const embed3 = new Discord.MessageEmbed()
      .setTitle("Felicitaciones, Has ganado!")
      .setDescription(`${message.author.username} ha elegido: Piedra\n\nYo elegí: Tijera`)
      .setColor("RANDOM")
      message.channel.send(embed3)
    }
  }

  if(eleccion == "PIEDRA"){
    if(random === "Piedra"){
      const embed = new Discord.MessageEmbed()
      .setTitle("Hay un Empate!")
      .setDescription(`${message.author.username} ha elegido: Piedra\n\nYo elegí: Piedra`)
      .setColor("RANDOM")
      message.channel.send(embed)
    }

    if(random == "Papel"){
      const embed2 = new Discord.MessageEmbed()
      .setTitle("He ganado!")
      .setDescription(`${message.author.username} ha elegido: Piedra\n\nYo elegí: Papel`)
      .setColor("RANDOM")
      message.channel.send(embed2)
    }

    if(random == "Tijera"){
      const embed3 = new Discord.MessageEmbed()
      .setTitle("Felicitaciones, Has ganado!")
      .setDescription(`${message.author.username} ha elegido: Piedra\n\nYo elegí: Tijera`)
      .setColor("RANDOM")
      message.channel.send(embed3)
    }
  }

  if(eleccion == "papel"){
    if(random === "Piedra"){
      const embed4 = new Discord.MessageEmbed()
      .setTitle("Felicitaciones, Has ganado!")
      .setDescription(`${message.author.username} ha elegido: Papel\n\nYo elegí: Piedra`)
      .setColor("RANDOM")
      message.channel.send(embed4)
    }

    if(random === "Papel"){
      const embed5 = new Discord.MessageEmbed()
      .setTitle("Hay un Empate!")
      .setDescription(`${message.author.username} ha elegido: Papel\n\nYo elegí: Papel`)
      .setColor("RANDOM")
      message.channel.send(embed5)
    }

    if(random === "Tijera"){
      const embed6 = new Discord.MessageEmbed()
      .setTitle("He ganado!")
      .setDescription(`${message.author.username} ha elegido: Papel\n\nYo elegí: Tijera`)
      .setColor("RANDOM")
      message.channel.send(embed6)
    }
  }

  if(eleccion == "PAPEL"){
    if(random === "Piedra"){
      const embed4 = new Discord.MessageEmbed()
      .setTitle("Felicitaciones, Has ganado!")
      .setDescription(`${message.author.username} ha elegido: Papel\n\nYo elegí: Piedra`)
      .setColor("RANDOM")
      message.channel.send(embed4)
    }

    if(random === "Papel"){
      const embed5 = new Discord.MessageEmbed()
      .setTitle("Hay un Empate!")
      .setDescription(`${message.author.username} ha elegido: Papel\n\nYo elegí: Papel`)
      .setColor("RANDOM")
      message.channel.send(embed5)
    }

    if(random === "Tijera"){
      const embed6 = new Discord.MessageEmbed()
      .setTitle("He ganado!")
      .setDescription(`${message.author.username} ha elegido: Papel\n\nYo elegí: Tijera`)
      .setColor("RANDOM")
      message.channel.send(embed6)
    }
  }

  if(eleccion == "tijera"){
    if(random === "Piedra"){
      const embed4 = new Discord.MessageEmbed()
      .setTitle("He ganado!")
      .setDescription(`${message.author.username} ha elegido: Tijera\n\nYo elegí: Piedra`)
      .setColor("RANDOM")
      message.channel.send(embed4)
    }

    if(random === "Papel"){
      const embed5 = new Discord.MessageEmbed()
      .setTitle("Felicitaciones, Has ganado!")
      .setDescription(`${message.author.username} ha elegido: Tijera\n\nYo elegí: Papel`)
      .setColor("RANDOM")
      message.channel.send(embed5)
    }

    if(random === "Tijera"){
      const embed6 = new Discord.MessageEmbed()
      .setTitle("Hay un empate!")
      .setDescription(`${message.author.username} ha elegido: Tijera\n\nYo elegí: Tijera`)
      .setColor("RANDOM")
      message.channel.send(embed6)
    }
  }

  if(eleccion == "TIJERA"){
    if(random === "Piedra"){
      const embed4 = new Discord.MessageEmbed()
      .setTitle("He ganado!")
      .setDescription(`${message.author.username} ha elegido: Tijera\n\nYo elegí: Piedra`)
      .setColor("RANDOM")
      message.channel.send(embed4)
    }

    if(random === "Papel"){
      const embed5 = new Discord.MessageEmbed()
      .setTitle("Felicitaciones, Has ganado!")
      .setDescription(`${message.author.username} ha elegido: Tijera\n\nYo elegí: Papel`)
      .setColor("RANDOM")
      message.channel.send(embed5)
    }

    if(random === "Tijera"){
      const embed6 = new Discord.MessageEmbed()
      .setTitle("Hay un empate!")
      .setDescription(`${message.author.username} ha elegido: Tijera\n\nYo elegí: Tijera`)
      .setColor("RANDOM")
      message.channel.send(embed6)
    }
  }

 }

} 