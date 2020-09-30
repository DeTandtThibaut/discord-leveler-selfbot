
exports.run = (client, message, args) => {
  if(args.length > 0) {
    message.delete();
    const commandName = args[0];
    // Check if the command exists and is valid
    if(!client.commands.has(commandName)) {
      return message.channel.send(':x: That command does not exist');
    }
    // the path is relative to the *current folder*, so just ./filename.js
    delete require.cache[require.resolve(`./${commandName}.js`)];
    // We also need to delete and reload the command from the client.commands Enmap
    client.commands.delete(commandName);
    const props = require(`./${commandName}.js`);
    client.commands.set(commandName, props);
    message.channel.send(`The command ${commandName} has been reloaded`);
    console.log(`The command ${commandName} has been reloaded`);
  } else {
      const prefix = client.jsons['servers'][message.guild.id].prefix;
      message.channel.send(`Usage: \`${prefix}reload <command>\``);
  }
};