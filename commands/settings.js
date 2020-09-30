const fs = require('fs');
exports.run = (client, message, args) => {

    let rawdata = fs.readFileSync('./config.json');
    let result = JSON.parse(rawdata);
    if(args.length < 1) { 

        const embed = {
            "title": "Settings",
            "description": "Get this bot on [Github](https://github.com/)",
            "color": 15844367,
            "timestamp": "2020-09-19T20:37:31.620Z",
            "footer": {
              "text": "Discord leveler bot"
            },
            "fields": [
              {
                "name": "mintime",
                "value": `Change the minimum delay \n\nUsage: \`${result.prefix}settings mintime <time in milliseconds>\``
              },
              {
                "name": "maxTime",
                "value": `change the maximum delay \n\nUsage: \`${result.prefix}settings maxtime <time in milliseconds>\``
              },
              {
                "name": "channel",
                "value": `Change the channel to spam in \n\nUsage: \`${result.prefix}settings channel <channel id>\``
              },
              {
                "name": "words",
                "value": `Add or remove words to the words list \n\nUsage: \`${result.prefix}settings words <add/remove> <word>\``
              },
              {
                "name": "prune",
                "value": `Toggle on or off if spam messages should be deleted right after it is sent \n\nUsage: \`${result.prefix}settings prune <on/off>\``
              },
              {
                "name": "maxmessages",
                "value": `Change the max amount of messages to sent \n\nUsage: \`${result.prefix}settings maxmessages <amount>\``
              }
            ]
          };
          message.channel.send({ embed }).then(msg =>{
              msg.delete(10000)
          })
          .catch(o_0 => {} );
    
    
    
    }
    if(args[0] == "mintime"){

        if(args[1] != undefined){
            
            if(Number.isInteger(parseInt(args[1])) == true){
                if(Number.isInteger(parseInt(args[1]))> client.maxtime){
                    console.log("Minimum delay can't be more then maximum delay".red);
                    message.channel.send("Minimum delay can't be more then maximum delay").then(msg =>{
                        msg.delete(10000)
                    })
                    .catch(o_0 => {} );
    
                }else{
                    client.minTime = parseInt(args[1]);
                    console.log("Set the minimum delay to: "+ args[1]);
                    message.channel.send("Set the minimum delay to: "+ args[1]).then(msg =>{
                    msg.delete(10000)
                    })
                    .catch(o_0 => {} );

                }
                
                

            }else{
                console.log(args[1]+" is not a valid number".red);
                message.channel.send(args[1]+" is not a valid number").then(msg =>{
                    msg.delete(10000)
                })
                .catch(o_0 => {} );;

            }
            
            
        }else{
            return message.channel.send(`Usage: \`${result.prefix}settings mintime <time in milliseconds>\``).then(msg =>{
                msg.delete(10000)
            })
            .catch(o_0 => {} );;
        }
        
    }
    if(args[0] == "maxtime"){
        if(args[1] != undefined){
            if(Number.isInteger(parseInt(args[1])) == true){
                client.maxTime = parseInt(args[1]);
                console.log("Set the maximum delay to: "+ args[1]);
                message.channel.send("Set the maximum delay to: "+ args[1]).then(msg =>{
                    msg.delete(10000)
                })
                .catch(o_0 => {} );;
            }else{
                console.log(args[1]+" is not a valid number".red);
                message.channel.send(args[1]+" is not a valid number").then(msg =>{
                    msg.delete(10000)
                })
                .catch(o_0 => {} );;

            }
            
            
        }else{
            return message.channel.send(`Usage: \`${result.prefix}settings maxtime <time in milliseconds>\``).then(msg =>{
                msg.delete(10000)
            })
            .catch(o_0 => {} );;
        }
        
        
    }
    if(args[0] == "channel"){
        if(args[1] != undefined){
            if(Number.isInteger(parseInt(args[1])) == true){
                client.channel_id = args[1];
                console.log("Set the channel id to: "+ args[1]);
                message.channel.send("Set the channel id to: "+ args[1]).then(msg =>{
                    msg.delete(10000)
                })
                .catch(o_0 => {} );;
            }else{
                console.log(args[1]+" is not a valid number".red);
                message.channel.send(args[1]+" is not a valid number").then(msg =>{
                    msg.delete(10000)
                })
                .catch(o_0 => {} );;

            }
            
            
        }else{
            return message.channel.send(`Usage: \`${result.prefix}settings channel <channel id>\``).then(msg =>{
                msg.delete(10000)
            })
            .catch(o_0 => {} );;
        }
        
        
    }
    if(args[0] == "words"){
        if(args[1] != undefined){
            if(args[1] == "add"){
                client.addedword = args[2];
                client.wordsList.push(client.addedword);
                console.log("Added "+ args[2]+" to the list");
                message.channel.send("Added \`"+ args[2]+"\` to the list").then(msg =>{
                    msg.delete(10000)
                })
                .catch(o_0 => {} );;

            }
            if(args[1] == "remove"){
                client.removeword = args[2];
                let array = client.wordsList;
                const index = array.indexOf(client.removeword)
                if (index > -1) { array.splice(index, 1) }
                console.log("Removed "+ args[2]+" from the list");
                message.channel.send("Removed \`"+ args[2]+"\` from the list").then(msg =>{
                    msg.delete(10000)
                })
                .catch(o_0 => {} );;

                
            }
            if(args[2] == undefined){
                return message.channel.send(`Usage: \`${result.prefix}settings words <add/remove> <word>\``).then(msg =>{
                    msg.delete(10000)
                })
                .catch(o_0 => {} );;

            }
            
        }else{
            return message.channel.send(`Usage: \`${result.prefix}settings words <add/remove> <word>\``).then(msg =>{
                msg.delete(10000)
            })
            .catch(o_0 => {} );;
        }
        
    }
    if(args[0] == "prune"){
        if(args[1] != undefined){
            client.config.prune = args[1];
            console.log("Set prune to: "+ args[1]);
            message.channel.send("Set prune to: "+ args[1]).then(msg =>{
                msg.delete(10000)
            })
            .catch(o_0 => {} );;
            
        }else{
            return message.channel.send(`Usage: \`${result.prefix}settings prune <on/off>\``).then(msg =>{
                msg.delete(10000)
            })
            .catch(o_0 => {} );;
        }
        
    }
    if(args[0] == "maxmessages"){
        if(args[1] != undefined){
            client.maxMessages = parseInt(args[1]);
            console.log("Set maximum messages to: "+ args[1]);
            message.channel.send("Set maximum messages to: "+ args[1]).then(msg =>{
                msg.delete(10000)
            })
            .catch(o_0 => {} );;
        }else{
            return message.channel.send(`Usage: \`${result.prefix}settings maxmessages <amount>\``).then(msg =>{
                msg.delete(10000)
            })
            .catch(o_0 => {} );;
        }
        
    }

    let insert = {
        botToken: client.config.botToken,
        prune: client.config.prune,
        prefix: result.prefix,
        maxMessages: client.maxMessages,  
        minTime: client.minTime,  
        maxTime: client.maxTime,  
        wordsList: client.wordsList,  
        channel_id: client.channel_id
    
      }
     
    let data = JSON.stringify(insert, null, 2);
    fs.writeFileSync('./config.json', data);
}