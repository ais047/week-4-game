var nobu={
	name: "Oda",
	hp:400,
	atk:150,
	counter:150,
	defeated:false
};
var musashi={
	name: "Miyamoto",
	hp:250,
	atk:250,
	counter:250,
	defeated:false
};
var lancer={
	name: "Artoria Pendragon",
	hp:300,
	atk:200,
	counter:150,
	defeated:false
};
var taiga={
	name: "??????",
	hp:40,
	atk:10,
	counter:10,
	defeated:false
};


var character = " ";
var enemy = " ";
var stupid = false;
var hero;
var herohp;

$(document).ready(function(){

	$(".card").on("click", function(){
		console.log(this.value);
		//sets selector
	
		

	var afterbeat = function (ehe){
		enemy = " ";
		console.log("beat  " + ehe.value);
		$(ehe).children(':last-child').html("Defeated");
		$(ehe).children(':first-child').width("100px");
		$(ehe).parent().appendTo(".select");
		$(".vs").remove();
	}


		//sets selected character && sets all stats to hero object
		if(character===" "){
			console.log("You chose " + this.value);

			character = this.value;
			if(character === "Taiga"){
				stupid = true;
			}
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
			herohp = $(this).children(':last-child');
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
					if(nobu.hp < 1){
						nobu.defeated = true;
						afterbeat(this);
						hero.atk += 50;
						break;
					}
					hero.hp -= hero.counter;
					break;
				case "Musashi":
					musashi.hp -= hero.atk;
					if(musashi.hp < 1){
						musashi.defeated = true;
						enemy = " ";
						afterbeat(this);
						hero.atk += 50;
						break;
					}
					hero.hp -= musashi.counter;
					break;
				case "Lancer":
					lancer.hp -= hero.atk;
					if(lancer.hp < 1){
						lancer.defeated = true;
						afterbeat(this);
						hero.atk += 50;
						break;
					}
					hero.hp -= lancer.counter;
					break;
				case "Taiga":
					taiga.hp -= hero.atk;
					if(taiga.hp < 1){
						taiga.defeated = true;
						afterbeat(this);
						hero.atk += 50;
						break;
					}
					hero.hp -= taiga.counter;
					break;
				default:
					null;
			}
		}



		//defeat and victory conditions
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


	if(hero.hp > 0){
		herohp.html(hero.name +  "<br>" + hero.hp);
	}
	if(nobu.hp > 0){
		$(".nobuhp").html(nobu.hp);
	}
	if(musashi.hp > 0){
		$(".musashihp").html(musashi.hp);
	}
	if(lancer.hp > 0){
		$(".lancerhp").html(lancer.hp);
	}
	if(taiga.hp > 0){
		$(".taigahp").html(taiga.hp);
	}


	});



});