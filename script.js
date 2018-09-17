// list of five number

var num1=-8;
var num2 = 12.5;
var num3= -6.769;
var num4 = 0;
var num5 =-1;
var num =[-8,12.5,-6.769,0,-1];
//using conditional statement to find the largest of the given number;
console.log('num1 = '+ num1);
 console.log('num2 = '+ num2);
 console.log('num3 = '+ num3);
console.log('num4 = '+ num4);
 console.log('num5 = '+ num5);
console.log("Largest in the above 5 number is");
var largest= num1;
if(num2>largest){
    largest= num2;
}
if(num3>largest){
    largest=num3
}
if(num4>largest){
    largest= num4;
}
if(num5>largest){
    largest= num5;
}
console.log(largest);
