$(document).ready(function(){

var character="";
var enemy="";
var stupid = false;

var nobu={
	hp:400,
	atk:100,
	counter:50
};
var musashi={
	hp:250,
	atk:500,
	counter:100
};
var lancer={
	hp:300,
	atk:100,
	counter:150
};
var taiga={
	hp:40,
	atk:10,
	counter:10
};

	$(".card").on("click", function(){
		console.log(this.value);
			if(character===""){
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
				$(".text").html("Choose your first opponent from below");
				$(".col-md-2").appendTo(".select")
				$(this).parent().prependTo(".fight")
			}
		})






});