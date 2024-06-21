//* 1 Boolean

var isCompleted = true
console.log(isCompleted, typeof isCompleted)

if(isCompleted)
    console.log("Task is completed")
else
    console.log("Task is not completed")

var pi=3.1415
console.log(pi, typeof pi)

var name="Rahul"
var lastName="Demo"
console.log(name, typeof name)

var dummy= 'Name is ${name} ${lastName}';
console.log(dummy, typeof dummy)

var fullName= 'Name is '+name+' '+lastName;
console.log(fullName, typeof fullName)

//BigInt

//Using n at the last will recognise that it is a big integer and would not truncate the values
var bigValue=8432543254543543543n;
console.log(bigValue, typeof bigValue)

//Symbol:

var unique = Symbol("my-key");
console.log(unique, typeof unique)

var anotherSymbol= Symbol("my-key");
console.log(anotherSymbol, typeof anotherSymbol)

//Returns false, because it will not accept duplicate symbols with same key
console.log(unique===anotherSymbol)

//Undefined, Null, NaN

var address=null;
console.log(address, typeof address)

var streetAddress=undefined;
console.log(streetAddress, typeof streetAddress)


//Objects ---> Composite Data Types

var person = {id:1, name:"Rahul", age:25}

console.log(person, typeof person)
console.log(person.age, typeof person.age)
console.log(person.address); //Since the value is not present it returns undefined