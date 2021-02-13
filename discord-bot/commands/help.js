module.exports = {
  'args': true,
  'name': 'help',
  'usage': '<command>',
  'guildOnly': true,
  'description': 'general list of commands & how to call them',
  execute(message, args){
    message.channel.send();
  },
};
