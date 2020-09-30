
const fs = require('fs');

exports.run = (client, message, args) => {

    let rawdata = fs.readFileSync('./config.json');
    let result = JSON.parse(rawdata);

    if(args.length < 1) { return message.channel.send(`Usage: \`${result.prefix}prefix <prefix>\``); }
    client.prefix = `${args[0]}`;

    let insert = {
        botToken: client.config.botToken,
        prune: client.config.prune,
        prefix: client.prefix,
        maxMessages:5000,  
        minTime: 180000,  
        maxTime: 360000,  
        wordsList:["xp","exp","collecting levels","experience"],  
        channel_id: "755556202699685958"
    
      }
     
    let data = JSON.stringify(insert, null, 2);
    fs.writeFileSync('./config.json', data);
    message.channel.send(`Prefix changed to ${args[0]}`);
    console.log("Prefix changed to " + `${args[0]}`);
}

