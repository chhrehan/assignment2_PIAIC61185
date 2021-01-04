var time=prompt("Enter time", "0000");
time=Number(time);
if(time>=0 && time<1200){
	console.log("Good Morning!");
}
else if(time>=1200 && time<1700){
	console.log("Good Afternoon!");
}
else if(time>=1700 && time<2100){
	console.log("Good Evening!");
}
else if(time>=2100 && time<=2359){
	console.log("Good Night");
}
else{
	console.log("you entered incorrct!.");
}
