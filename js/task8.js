var number = prompt("Enter any number.", "0");
number=Number(number);
if(number==0){
	console.log("your number is: 0");
}
else if(number>0){
	console.log("your number is Positive.");
}
else{
	console.log("your number is Negative");
}