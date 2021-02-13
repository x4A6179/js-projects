module.exports = {
  'args': true,
  'name': 'thanos',
  'guildOnly': true,
  'description': 'deletes messages',
  execute(message, args){
    if (!message.member.hasPermission('MANAGE_GUILD')) return 'You don\'t have the stones for that.';

    let deleteLen = parseInt(args[0], 10);
    let totalRemoved = 0;

    if (!args.length || deleteLen < 1) return;
    while (deleteLen > 0){
      if (deleteLen > 100){
        message.channel.bulkDelete(100).catch(error => message.reply("Something went wrong possibly"));
        totalRemoved += 100;
        deleteLen -= 100;
      } else {
        message.channel.bulkDelete(deleteLen + 1).catch(error => message.reply("Something went wrong possibly"));
        totalRemoved += deleteLen;
        deleteLen -= deleteLen;
      }
    }
    message.channel.send(`Deleted ${totalRemoved} messages.`).then(m => m.delete({timeout: 2000}));
  }
};
