type TeacRecipe = {
    water:number,
    milk:number
};


//Interface in TypeScript is used to define the structure or shape of an object or class.
//It acts like a contract, ensuring that required properties and methods are present.

class MasalaChai implements TeacRecipe{
    water: number=12;
    milk=20
}

//“In simple object structures both type and interface work similarly.
//The main difference is that interface is better for object/class contracts and supports //declaration merging, while type is more powerful for unions, primitives, and advanced type combinations.”


interface CupSize{
    size:"small" | "large";
}

class Chai implements CupSize{
    size : "large" | "small"="large";
}


//“A class cannot properly implement a union type like { ok: true } | { ok: false } because it must satisfy one exact structure. Also boolean is broader than literal types like true or false.”

// type Response= {ok:true} | {ok:false};

// class MyRes implements Response{
//     ok:boolean = true;
// }


//literal types
type teaType = "masala" | "ginger" | "lemon";

function orderChai(t : teaType){
    console.log(t);
}


//key of both types need to be included

type BaseChai = {teaLeaves:number};
type Extra = {masala:number};


type Combo = BaseChai & Extra;

const cup: Combo={
    teaLeaves:2,
    masala:23
}

type User={
    username:string,
    bio?:string
}

const u1:User={username:"manish"};
const u2:User={username:"manish",bio:"manish.ai"};


type Conf={
    readonly appName:string,
    version:number
}

const cfg:Conf={
    appName:"Masterji",
    version:1
}

// cfg.appName="hello world" //you cant do this now 