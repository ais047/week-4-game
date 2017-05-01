var nobu={
	hp:400,
	atk:100,
	counter:50,
	defeated:false
};
var musashi={
	hp:250,
	atk:500,
	counter:110,
	defeated:false
};
var lancer={
	hp:300,
	atk:100,
	counter:80,
	defeated:false
};
var taiga={
	hp:40,
	atk:10,
	counter:10,
	defeated:false
};


var character = " ";
var enemy = " ";
var stupid = false;
var hero;
var opponent;


$(document).ready(function(){

	$(".card").on("click", function(){
		console.log(this.value);
		//sets selected character && sets all stats to hero object
		if(character===" "){
			console.log("You chose " + this.value);
			character = this.value;
			if(character === "Taiga"){
				stupid = true;
			}
			$(".servant").width("100px");
			$(this).children(':first-child').width("192px");
			if(stupid){
				$(this).children(':last-child').prepend(" Why would you even choose this <br>");
			}
			else{
			$(this).children(':last-child').prepend(this.value + "<br>");
			}
			$(".text").html("Choose your opponent from below");
			$(".col-md-2").appendTo(".select");
			$(this).parent().prependTo(".fight");
			switch(this.value){
				case "Nobunaga":
					hero = nobu;
					nobu = {
						defeated : true
					};
					break;
				case "Musashi":
					hero = musashi;
						musashi = {
						defeated : true
					};
					break;
				case "Lancer":
					hero = lancer;
						lancer = {
						defeated : true
					};
					break;
				case "Taiga":
					hero = taiga;
						taiga = {
						defeated : true
					}
					break;
				default:
					hero = nobu;
			}
		}
		//Sets enemy character
		else if(enemy === " "){
			if(this.value !== character){
				enemy = this.value;
				$("<div>").addClass("col-md-1 vs").html("VS").appendTo(".fight");
				$(this).children(':first-child').width("192px");
				$(this).children(':last-child').prepend(this.value + "<br>");
				$(this).parent().appendTo(".fight");
				$(".text").html("Click on the enemy to fight!");
				if(stupid === true){
					$("#taigahp").html("You literally can't win with her");
			}

			}
		}
		else if(this.value === enemy){
			switch(this.value){
				case "Nobunaga":
					nobu.hp -= hero.atk;
					hero.hp -= nobu.counter;
					if(nobu.hp < 1){
						nobu.defeated = true;
						enemy = " ";
						console.log("beat nobu");
						$(this).children(':last-child').html("Defeated");
						$(this).children(':first-child').width("100px");
						$(this).parent().appendTo(".select");
						$(".vs").remove();
					}
					break;
				case "Musashi":
					musashi.hp -= hero.atk;
					hero.hp -= musashi.counter;
					if(musashi.hp < 1){
						musashi.defeated = true;
						enemy = " ";
						console.log("beat musashi");
						$(this).children(':last-child').html("Defeated");
						$(this).children(':first-child').width("100px");
						$(this).parent().appendTo(".select");
						$(".vs").remove();
					}
					break;
				case "Lancer":
					lancer.hp -= hero.atk;
					hero.hp -= lancer.counter;
					if(lancer.hp < 1){
						lancer.defeated = true;
						enemy = " ";
						console.log("beat lancer");
						$(this).children(':last-child').html("Defeated");
						$(this).children(':first-child').width("100px");
						$(this).parent().appendTo(".select");
						$(".vs").remove();
					}
					break;
				case "Taiga":
					taiga.hp -= hero.atk;
					hero.hp -= taiga.counter;
					if(taiga.hp < 1){
						taiga.defeated = true;
						enemy= " ";
						console.log("beat taiga");
						$(this).children(':last-child').html("Defeated");
						$(this).children(':first-child').width("100px");
						$(this).parent().appendTo(".select");
						$(".vs").remove();
					}
					break;
				default:
					opponent = nobu;
			}
		}
		if(nobu.defeated && musashi.defeated && lancer.defeated && taiga.defeated){
			console.log("You win!");
			$("<div>").addClass("col-md-1 vs").html("You've won!").appendTo(".fight");

		}
		if(hero.hp < 1){
			if(stupid){
				$("#taigahp").html("DESTROYED");
				$(".vs").remove();
				$("<div>").addClass("col-md-1 vs").html("I told you.. :/ ").appendTo(".fight");
				$(this).children(':last-child').html("Beat you");
				$(this).children(':first-child').width("100px");
				$(this).parent().appendTo(".select");
			}

			else{
				$(".vs").remove();
				$("<div>").addClass("col-md-1 vs").html("You've been defeated!").appendTo(".fight");
				$(this).children(':last-child').html("Beat you");
				$(this).children(':first-child').width("100px");
				$(this).parent().appendTo(".select");
			}
		}
	});

});