//Learning Function
//Normal Function
function addNumbers(num1: number, num2: number): number {
    return num1 + num2;
}

//arrow function

const addNumbers1 = (num1: number, num2: number): number => {
    return num1 + num2;
};

//function into objects --> method

const poorUser: {
    name: string;
    balance: number;
    addBalance: (balance: number) => string;
} = {
    name: 'habib',
    balance: 0,
    addBalance(balance: number): string {
        return `my new balance is ${this.balance + balance}`;
    }
};

//Map into an array using Tsc callback function

const arr : number [] = [1,3,5];
const newArray:Number [ ] = arr.map ((elem : number) : number => elem*elem);



