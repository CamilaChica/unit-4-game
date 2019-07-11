    $(document).ready(function() {

	var matchNumber = Math.floor(Math.random() * 100)+24; 
		console.log("matchNumber: " + matchNumber); 
        $(".randomNumber").html(matchNumber); 
    

    generateCrystalNumber(1);
    generateCrystalNumber(2);
    generateCrystalNumber(3);
    generateCrystalNumber(4);
		
	var wins = 0; 
		console.log("wins: " + wins); 

	var losses = 0; 
		console.log("losses: " + losses); 

	var score = 0; 
        console.log("score: " + score); 
        
    reset();

    function generateCrystalNumber(crystalNumber) {
    var randomNumber = Math.floor(Math.random() * 10) + 1; 
    
	console.log("Crystal " + crystalNumber + ": " + randomNumber); 
    $("#image" + crystalNumber).html("<img src=" + "assets/images/image" + crystalNumber + ".gif" + " value="+randomNumber+ ' style="width:150px;height:150px;"' + "/>");
    }


	function reset () {
	matchNumber = Math.floor(Math.random() * 100)+24; 
	console.log("matchNumber: " + matchNumber); 
	$(".randomNumber").html(matchNumber); 

	score = 0; 
	$(".scoreDisplay").html(score); 

	generateCrystalNumber(1);
    generateCrystalNumber(2);
    generateCrystalNumber(3);
    generateCrystalNumber(4);

	$("img").on("click", function () {
	var newScore = score += parseInt($(this).attr("value")); 
	console.log("New Score: " + newScore); 
	$(".scoreDisplay").html(newScore); 

	if(newScore === matchNumber) { 
	wins++ ;
	$(".loser").html(""); 
	$(".winner").html("You WON!");
	$(".wins").html("<b>WINS:</b> " + wins); 
	console.log("Wins: " + wins); 
	reset(); 
	} 

	else if(newScore > matchNumber) {
	losses++ ;
	$(".winner").html("");
	$(".loser").html("You LOST!");
	$(".losses").html("<b>LOSSES:</b> " + losses); 
	console.log("Losses: " + losses); 
	reset(); 
	}
	}); 
    }
}); 