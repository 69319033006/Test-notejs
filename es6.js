var name;
name = "John";
var age = 30;
var isStudent = true;
 console.log(`Name: ${name}, Age: ${age}, Is Student: ${isStudent}`);

 const student = {
    name: "Alice",
    age: 22,
}
    student.name = "Bob";
    student.age = 21;

console.log(`Student Name: ${student.name}, Student Age: ${student.age}`);

console.log(`การตรวจสอบอายุ
    ต้องมีอายุมากกว่า 20 ปี: ${student.age >= 20 ? 'เข้าได้' : `${student.age} ปี ห้ามเข้า`}`);

function HelloWorld() {
    console.log("Hello World");
}

HelloWorld();

const greet = (name) => {
    return `Hello, ${name}!`;
};
console.log(greet("LEO"));

function introduce(name, age) {
    return `My name is ${name} and I am ${age} years old.`;
    // console.log(`My name is ${name} and I am ${age} years old.`);
}

console.log(introduce("Alice", 18));
// introduce("Alice", 18);

//if (age <= 20 || age > 20) {
//    console.log(`${name} passed the age check.`);
//  console.log(`Student ${student.age} passed the age check.`);
//}

function circumference(radius) {
    return 2 * Math.PI * radius;
}

console.log(`Circumference = ${circumference(5)}`);

const Circumference = (radius) => 2 * Math.PI * radius;
console.log(`Circumference = ${Circumference(5)}`);