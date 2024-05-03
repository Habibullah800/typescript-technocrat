"use strict";
//Learning Function
//Normal Function
function addNumbers(num1, num2) {
    return num1 + num2;
}
//arrow function
const addNumbers1 = (num1, num2) => {
    return num1 + num2;
};
//function into objects --> method
const poorUser = {
    name: 'habib',
    balance: 0,
    addBalance(balance) {
        return `my new balance is ${this.balance + balance}`;
    }
};
//Map into an array using Tsc callback function
const arr = [1, 3, 5];
const newArray = arr.map((elem) => elem * elem);
