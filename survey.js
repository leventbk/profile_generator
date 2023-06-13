const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let name, activity, music, meal, food, sport, superpower;

rl.question("What's your name? ", (answer) => {
	name = answer;
	rl.question("What's an activity you like doing? ", (answer) => {
	  activity = answer;
	  rl.question("What do you listen to while doing that? ", (answer) => {
		music = answer;
		rl.question("Which meal is your favourite? ", (answer) => {
		  meal = answer;
		  rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
			food = answer;
			rl.question("Which sport is your absolute favourite? ", (answer) => {
			  sport = answer;
			  rl.question("What is your superpower? ", (answer) => {
				superpower = answer;
  
				const profile = `Name: ${name}\nActivity: ${activity}\nMusic: ${music}\nMeal: ${meal}\nFavorite food: ${food}\nFavorite sport: ${sport}\nSuperpower: ${superpower}`;
  
				console.log(profile);
  
				rl.close();
			  });
			});
		  });
		});
	  });
	});
  });