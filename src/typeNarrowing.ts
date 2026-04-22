
function getChai(kind : string | number){
    if(typeof kind == 'string'){
        return `Making ${kind} chai..`;
    }
    return `Chai order : ${kind}`
}


function serveChai(msg? : string){
    if(msg){
        return `Serving ${msg}`;
    }
    return `Serving default chai`;
}



function orderChai(size : "medium" | "small" | "large" | number){
    if(size == 'small'){
        return `small cutting chai..`;
    }
    else if(size == 'medium' ||  size == 'large'){
        return `extra chai`;
    }
    return `Chai order ${size}`;
}


class a{
    serve(){
        return "this is a.";
    }
}

class b{
    serve(){
        return `this is b.`;
    }
}


function asd(val : a | b){
    if(val instanceof a){
        return val.serve(); //this is a;
    }
    return val.serve(); // this is b
}



type chai={
    type:string,
    sugar:number
};



//type-guarding...
function isChai(obj: any): obj is chai {
    return (
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    );
}



function serveOrder(item : chai | string){
    if(isChai(item)){
        return `${item.type} - ${item.sugar}`;
    }

    return `${item}`;
}


//------------------------------------------


type CreditCard = {
    cardNumber: string;
};

type UPI = {
    upiId: string;
};

type Cash = {
    amount: number;
};

type Payment = CreditCard | UPI | Cash;

let pay1: Payment = {
    upiId: "manish@upi"
};

console.log(pay1);


//type guarding ->Type guarding is a way to check the type of a variable at runtime so TypeScript can safely understand its exact type.


function isStringArray(arr: unknown): arr is string[] {
    return Array.isArray(arr) &&
           arr.every(item => typeof item === "string");
}



