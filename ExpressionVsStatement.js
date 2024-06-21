1;

//Example of Expressions
var a,b,c=1;
a=b=c=4;
console.log(a,b,c);

//Statements are silent killers, but they do lot of actions and they are not expressions
if(a==b)
    console.log("Both a and b are same");
else
    console.log("Both a and b are not same");

//Expecting a expression
// var d = if(a==b) console.log("Both a and b are same");