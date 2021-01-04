var ramdumNumber = 3;
var guessedNumber = prompt("Enter any number between 0 and 10");
guessedNumber = Number(guessedNumber)
if(Number(guessedNumber) == ramdumNumber){
	console.log("Bingo! Correct answer.");
}
else if(++guessedNumber == ramdumNumber){
	console.log("Close enough to the correct answer");
}
else{
	console.log("Sorry!!!!!");
}