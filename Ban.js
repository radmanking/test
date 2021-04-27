const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	var a = message.id;

	if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply("شما پریمیشن کیک کردن را ندارید");

	var user = message.mentions.users.first();

	if(!user) return message.reply("شما هیچ کس را منشن نکردید!");

	var reas = args.splice(1).join(' ');
	if(!reas) return message.reply("شما هیچ دلیلی برای کیک کردن ننوشتید!");
	if(user.hasPermission('ADMINISTRATOR')) return message.reply("شما نمی توانید یک ادمین را کیک کنید");
	var jad = "";

	var embs = new discord.MessageEmbed()
   .setColor("#e9dfdf") //hex color
    .setDescription(`${useri} بن شد`)

	message.channel.messages.fetch(a).then(msg => msg.delete({ timeout: 1000 }));
	await user.send(`شما بن شدید از سرور : ${user.guild} توسط: ${reas}`);
	await message.guild.members.ban(user).catch(err =>{
		jad = err;
	});
	if(!jad){
		return message.channel.send(embs);
	}
	else{
		return message.channel.send("ERROR:404");
	}

};


module.exports.help = {
	name: "ban",
    aliases: []
};
