var a = 4;
if (++a === 5) {
	alert("given condition for variable a is true"); //this statment will run because its pre-increment and value of a will be 5.
}
var b = 82;
if (b++ === 83){
	alert("given condition for variable b is true");//this statment will not run because its post-increment and value of b will be remain 82.
}
var c = 12;
if (c++ === 13){
	alert("condition 1 is true");//this statment will not run because its post-increment and value of c will be remain 12.
}
if (c === 13){
	alert("condition 2 is true");//this statment will run because its value increased due to previous post-increment and value of c is 13.
}
if (++c < 14){
	alert("condition 3 is true");//this statment will not run because its pre-increment and value of c will be 14.
}
if(c === 14){
	alert("condition 4 is true");//this statment will run because due to previous pre incriment value of c is 14.
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
	alert("The cost equals");//this statment will run because cost is equal.
}
if (true){
	alert("True");//this statment will run because condition is true.
}
if (false){
	alert("False");//this statment will not run because condition is false.
}
if("car" < "cat"){
	alert("car is smaller than cat");//this statment will run because both are strings and last string is true.
}