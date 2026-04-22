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


//const inputElement = document.getElementById("username") as HTMLInputElement;



let val:any;

val="chai";
val = [1,2,3];
val=2.1;
console.log(val.toUppercase());



let newVal:unknown;
newVal="chai";
newVal = [1,2,3];
newVal=2.1;

if(typeof newVal == "string"){
    newVal.toUpperCase();
}




try{
    //code 
}
catch(error){
    if(error instanceof Error){
        console.log(error.message);
    }
    console.log("Error",error);
}



const data:unknown = "chai aur code";
const strData : string = data as string;



type Role= "admin" | "user" | "superadmin";

//never is used in exhaustive checking to ensure all union type cases are handled, and if nothing is left, the variable becomes never.”

//never means no possible value is left...
function redirectBasedOnRole(role:Role): void{

    if(role === "admin"){
        console.log("Redirecting to admin dashboard");
        return;
    }

    if(role === "user"){
        console.log("Redirecting to user dashboard");
        return;
    }

    role;
}

//never is used for functions that throw errors, run infinitely, or for exhaustive checking in union types where no possible value remains.

//never is used when execution never reaches a normal return point.


function neverReturn(): never{
    while(true){};
};


function throwError(message: string): never {
    throw new Error(message);
}