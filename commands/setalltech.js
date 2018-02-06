// *AF*
// Hades star Technology Level

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  
  //const user = `<@${message.author.id}>`;
  
  if (args[0] == null || args[1] == null) return message.reply("Invalid command, need 2 arguments");

  const techSize = {"ships":3,"trade":10,"mining":8,"weapons":5,"shields":5,"support":17};
  const techGroup = args[0];
  if (techSize[techGroup] == null) return message.reply("Invalid Tech!");
  
  var techLevels = args[1];
    
  if (args[1].indexOf(",") >0) {
    techLevels = techLevels.split(",");
    if (techSize[techGroup] != techLevels.length)
       return message.reply(`Invalid number of techs: ${techLevels.length} instead of ${techSize[techGroup]}`);
  }
  else
    return message.reply(`Invalid number of techs: 1 instead of ${techSize[techGroup]}`);
    
  var allTech = client.hsTech.get(message.author.id) || { transp: 0,	miner: 0,	bs: 0,	cargobay: 0,	computer: 0,	tradeboost: 0,	rush: 0,	tradeburst: 0,	autopilot: 0,	offload: 0,	beam: 0,	entrust: 0,	recall: 0,	hydrobay: 0,	miningboost: 0,	enrich: 0,	remote: 0,	hydroupload: 0,	miningunity: 0,	crunch: 0,	genesis: 0,	battery: 0,	laser: 0,	mass: 0,	dual: 0,	barrage: 0,	alpha: 0,	delta: 0,	pas: 0,	omega: 0,	mirror: 0,	emp: 0,	teleport: 0,	rsextender: 0,	repair: 0,	warp: 0,	unity: 0,	sanctuary: 0,	stealth: 0,	fortify: 0,	impulse: 0,	rocket: 0,	salvage: 0,	suppress: 0,	destiny: 0,	barrier: 0,	vengeance: 0,	leap: 0 };
  //var msg1 = await message.channel.send(`<@${message.author.id}>, setting values:\n${msg}`);
  
  var i = 0;
  var msg = "";
  //var techLevel = 0;
  
  Object.keys(client.config.techArray).forEach(techID => {
    if (client.config.techArray[techID].split(" ")[0].toLowerCase() == techGroup) {
      var techLevel = techLevels[i++];
      msg += `\n${client.config.techArray[techID]} : set to ${techLevel} (was ${allTech[techID]})`;
      allTech[techID] = techLevel;
      client.hsTech.set(message.author.id, allTech);
      
    }        
  });  
  return message.reply(`Setting values:\n${msg}`);
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sat"],
  permLevel: "User"
};

exports.help = {
  name: "setalltech",
  category: "Hades Star",
  description: "Update ALL your Technology Levels",
  usage: "setalltech [group] [n,n...,n]\n Where each group need all it's techs:\n >>Ships	3\n >>Trade	10\n >>Mining	8\n >>Weapons	5\n >>Shields	5\n >>Support	17\n\nExample:\n : setalltech ships 4,4,4"
};

/*
Ships	3\nTrade	10\nMining	8\nWeapons	5\nShields	5\nSupport	17\n
*/