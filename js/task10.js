var password = "hello123";
var userPassword = prompt("Enter Password.");
if(userPassword==""){
	console.log("Plese enter password!!!!!");
}
else if(userPassword==password){
	console.log("Correct! The password you entered matches the original password");
}
else{
	console.log("Incorrect Password");
}