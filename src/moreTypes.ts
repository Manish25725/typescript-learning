let response : any  = "42";

//Type Assertion-> Type assertion in TypeScript is used when I know the type of a value better than TypeScript does.
//It tells the compiler to treat a value as a specific type without changing the actual runtime value.


let numericLength : number = (response as string).length;
console.log(numericLength);


type Book = {
    name:string
};

let bookString ='{name : "who moved my cheese"}';

let bookObject = JSON.parse(bookString) as Book;
console.log(bookObject);

