const config = require('../config.json');
let repeat;
let sentMessages = 0;
exports.run = (client, message, args) => {
  if(args[0] == "on"){
    sentMessages = 0;
    client.sendSpamMessage = sendSpamMessage;
 
    function sendSpamMessage() {
        
        if (client.config.wordsList) {
          let spamChannel = client.channels.get(client.config.channel_id);
          if(spamChannel == undefined){
            console.log("Please give in a valid channel id".red);
            console.log(spamChannel);
          }else if(spamChannel.type == "text"){
            // mcp #general id 566293511293632520
            spamChannel.send(client.config.wordsList[Math.floor(Math.random() * client.config.wordsList.length)]);
            sentMessages = sentMessages + 1;
            

            console.log("Started Collecting with the following settings:".yellow)
            console.log("Mintime:" + client.config.minTime)
            console.log("Maxtime:"+ client.config.maxTime)
            console.log("Maxmessages:"+ client.config.maxMessages)
            console.log("Prune:"+ client.config.prune)

          
            console.log("\nMessage succesfully sent!".green);
            console.log("Time: " + new Date());
            console.log("Guild: " + spamChannel.guild);
            console.log("Channel: " + spamChannel.name);
            console.log("Messages sent:" + sentMessages);
            
            //IF you want to see the RAM usage of the script remove the "/* */""
            /*const used = process.memoryUsage().heapUsed / 1024 / 1024;
            console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB\n`);*/
            if(client.config.prune == true){
              spamChannel.fetchMessages()
              .then(messages => {
                let message_array = messages.array();
                message_array.length = 1;
                message_array.map(msg => msg.delete().catch(O_o => {}));
              }).catch(console.error);

            }

          }else{
            console.log("\nThis script is only suppossed to be used in guilds\n".red);
            process.exit();

          }
          

          if(sentMessages < client.config.maxMessages){
            timeToWait = Math.floor(Math.random() * (client.config.maxTime - client.config.minTime)) + client.config.minTime;
          /*console.log(timeToWait);*/

          repeat = setTimeout(sendSpamMessage, timeToWait);

          }else{
            console.log("\nReached max messages!".red);
            console.log("Do the collect command to start spamming messages again\n".yellow);
          }
          
          
      
        } else {
            console.log("\nYou need to add words to the words list!\n".rod);
        }
        
      }
      message.delete().catch(O_o => {});
      sendSpamMessage();
  }else if (args[0]== "off"){
    clearTimeout(repeat);
    console.log("\nThe bot has stopped spamming!\n".yellow);
    message.channel.send("The bot has stopped spamming!");
  }else if(args.length < 1) { return message.channel.send(`Usage: \`${client.config.prefix}collect <on/off>\``); }
}
