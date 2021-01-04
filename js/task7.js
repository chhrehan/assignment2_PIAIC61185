var num1= prompt("Enter First Number.");
var num2= prompt("Enter Second Number.");
var selector= prompt("Enter One of these. ( +, -, / ,%)");
num1=Number(num1);
num2=Number(num2);
var result;
var flag = true;
if(selector == '+'){
	result = num1+num2;
}
else if(selector == '-'){
	result = num1-num2;
}
else if(selector == '*'){
	result = num1*num2;
}
else if(selector == '/' && num2>0){
	result = num1/num2;
}
else if(selector == '%' && num2>0){
	result = num1%num2;
}
else{
	flag = false;
	console.log("you entered incorrect!");
}
if (flag==true) {
	console.log("Result of your values is: "+result);
}