var subject1 = prompt("Enter marks of First subject");
var subject2 = prompt("Enter marks of Second subject");
var subject3 = prompt("Enter marks of Third subject");
var total = Number(subject1) + Number(subject2) + Number(subject3);
var percentage = (total/300)*100;
if(percentage >= 80){
	console.log("Total Marks: 3000");
	console.log("Marks Obtained: " +total);
	console.log("Percentage is: " +percentage+ "%");
	console.log("Grade is: A-one");
	console.log("Remarks: Excellent.");
}
else if(percentage >= 70){
	console.log("Total Marks: 3000");
	console.log("Marks Obtained: " +total);
	console.log("Percentage is: " +percentage + "%");
	console.log("Grade is: A");
	console.log("Remarks: Good.");
}
else if(percentage >= 60){
	console.log("Total Marks: 3000");
	console.log("Marks Obtained: " +total);
	console.log("Percentage is: " +percentage+ "%");
	console.log("Grade is: B");
	console.log("Remarks: You need to improve.");
}
else if(percentage < 60){
	console.log("Total Marks: 3000");
	console.log("Marks Obtained: " +total);
	console.log("Percentage is: " +percentage+ "%");
	console.log("Grade is: Fail");
	console.log("Remarks: Sorry.");
}
else{
	console.log("you entered incorrect value!!!!");
}
