"use strict";
let firstName = 'habibullah bahar';
//----------- Primitive data types
let num = 10; // Number
let str = "Hello, world!"; // String
let bool = true; // Boolean
let undef = undefined; // Undefined
let nul = null; // Null
let symb = Symbol("foo"); // Symbol
//-------------------// Array of numbers, strings, boolean values, mixed types, Array constructor with generic type
let numbers = [1, 2, 3, 4, 5];
let fruits = ["apple", "banana", "orange"];
let flags = [true, false, true, true];
let mixed = [1, "two", 3, "four"];
let colors = ["red", "green", "blue"];
//------------ object with readonly, regular, and optional properties
const person = {
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
