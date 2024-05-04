let firstName: string = 'habibullah bahar';

//----------- Primitive data types

let num: number = 10; // Number
let str: string = "Hello, world!"; // String
let bool: boolean = true; // Boolean
let undef: undefined = undefined; // Undefined
let nul: null = null; // Null
let symb: symbol = Symbol("foo"); // Symbol

//-------------------// Array of numbers, strings, boolean values, mixed types, Array constructor with generic type

let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: string[] = ["apple", "banana", "orange"];
let flags: boolean[] = [true, false, true, true];
let mixed: (number | string)[] = [1, "two", 3, "four"];
let colors: Array<string> = ["red", "green", "blue"];


//------------ object with readonly, regular, and optional properties
const person: {
    readonly name: string;
    readonly age: number;
    readonly isStudent: boolean;
    readonly address?: {
        street: string;
        city: string;
        postalCode: string;
    };
    phoneNumbers?: string[];
    readonly roles: string[];
}

    = {
    name: "John Doe",
    age: 25,
    isStudent: true,
    address: {
        street: "123 Main St",
        city: "Anytown",
        postalCode: "12345"
    },
    phoneNumbers: ["123-456-7890", "456-789-1234"],
    roles: ["Admin", "User"]
};

console.log('object');




// {
//   // Basic Data Type

//   //string
//   let firstName: string = "mezba";
//   //number
//   let roll: number = 123;
//   //boolean
//   let isAdmin: boolean = true;
//   // undefined
//   let x: undefined = undefined;
//   // null
//   let y: null = null;

//   let d: number;

//   d = 123;

//   // Array

//   let friends: string[] = ["rachel", "monica"];

//   let eligibleRollList: number[] = [1, 3];

//   eligibleRollList.push("dd");

//   // tuple --> array --> order --> type of values

//   let coordinates: [number, number] = [1, 5];

//   let ageName: [number, string, boolean] = [50, "Mr.X", true];

//   ageName[0] = 67;
// }




