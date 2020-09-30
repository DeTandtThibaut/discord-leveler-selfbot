const fs = require('fs');
module.exports =  async(client, message) => {
    let rawdata = fs.readFileSync('./config.json');
    let output = JSON.parse(rawdata);
    // Ignore all bots
    if (message.author.id !== client.user.id || message.content.indexOf(output.prefix) !== 0) return;


    

    const prefix = output.prefix;
    // Ignore messages not starting with the prefix (in config.json)
    if (message.content.indexOf(prefix) !== 0) return;
  
    // Our standard argument/command name definition.
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  
    // Grab the command data from the client.commands Enmap
    const cmd = client.commands.get(command);
  
    // If that command doesn't exist, silently exit and do nothing
    if (!cmd) return;
  
    // Run the command
    cmd.run(client, message, args);
};

/*module.exports = (client, message) => {
    // Ignore all bots
    if (message.author.bot) return;

    const prefix = client.jsons['servers'][message.guild.id].prefix;

    // Ignore messages not starting with the prefix (in config.json)
    if (message.content.indexOf(prefix) !== 0) return;
  
    // Our standard argument/command name definition.
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  
    // Grab the command data from the client.commands Enmap
    const cmd = client.commands.get(command);
  
    // If that command doesn't exist, silently exit and do nothing
    if (!cmd) return;
  
    // Run the command
    cmd.run(client, message, args);
};*/