// Hades star Technology Level
// This command will calculate the tech level for all users

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
    
  var msg = `Here is the Tech Score for all members:`;
  client.hsTech.forEach(function (allTech, userID, mapObj) {  
    var allTech = client.hsTech.get(userID);
    if (allTech["#Guild"] == message.guild.id){
      var techLevel = 0;
      Object.keys(allTech).map(function(techID, index) {
        if (client.config.hadesTech[techID]) 
          techLevel += client.config.hadesTech[techID].levels[Number(allTech[techID]-1)] || 0;
        });
      msg += (`\n<@${userID}>: ${techLevel}`);    
    }
  });  

  return message.reply(msg);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["ts"],
  permLevel: "User"
};

exports.help = {
  name: "techscore",
  category: "Hades Star",
  description: "Calculate Tech Score for all users",
  usage: "techscore"
};
