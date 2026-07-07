const name="Waleed Ahmed";

const Age=25;

const semester=5;

console.log(name+" "+Age+" "+semester);

/----------------------------------/

let student =
{
    name: "Waleed Ahmed",
    age: 26,
    semester: 5

};


console.log(`${student.name}`);

student.university="NUML";

console.log(`Name: ${student.name}
Age: ${student.age}
Semester: ${student.semester}
University: ${student.university}    `);

/----------------------------------------/

const arr=["waleed ahmed", 76, "NUML", 398765432];

console.log(arr[0], arr[1]);

arr.push("My name is Waleed Ahmed!");

console.log(arr[4]);


/------------------------------------------------/


const laptop =
{
    ram: "16GB",
    brand: "HP",
    storage: "512GB"
};

laptop.screen="16 inch";


console.log(laptop.screen);

console.log(`${laptop.screen}
 ${laptop.ram}
 ${laptop.brand}
 ${laptop.storage}`);

const {ram,brand}=laptop;

console.log(`the Laptops ram is: ${laptop.ram}`);

console.log(ram);

const students=["Name", "Semester"];

console.log(...students);

const newarr=[...students,...arr];

console.log(newarr);


