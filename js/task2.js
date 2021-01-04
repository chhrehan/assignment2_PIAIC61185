var color = prompt("Enter Trafic Signal colors.", "red");
if(color == "red" || color == "Red"){
	console.log("Must Stop.");
}
else if(color == "yellow" || color == "Yello"){
	console.log("Ready to move.");
}
else if(color == "green" || color == "Green"){
	console.log("Move now.");
}
else{
	console.log("You Entered incorrect color.");
}