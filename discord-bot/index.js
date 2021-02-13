// Import required packages
require('dotenv').config();
const fs = require('fs');
const Discord = require('discord.js');
const puppeteer = require('puppeteer');
const {prefix, TOKEN} = require('./config.json')


// Initializing the Discord client
const client = new Discord.Client();
client.commands = new Discord.Collection();

// Dynamically accessing command files
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file in commandFiles){
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}


// Starting up the bot (client object)
client.once('ready', () => {
  console.log('Ready!');
});


// Handling commands from the users
client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  if (!client.commands.has(commandName)) return;
  const command = client.commands.get(commandName);

  if (command.args && !args.length){
    let reply = `That's not happening ${message.author}.`;

    if (command.usage){
      reply += `\nTry doing \`${prefix}${command.name} ${command.usage}\``;
    }
    return message.channel.send(reply);
  }
  try {
    command.execute(message, args);
  }
});

client.login(TOKEN);
