
const chaiFlavours:string[]= ["Masala","Adrak"];
const chaiPrice:number[]=[20,30];


const rating:Array<number> =[4.5,5.0];

type Chai={
    name:string,
    price:number
}

const menu:Chai[]=[
    {name:"Masala",price:34},
    {name:"Adrak",price:25}
]


const cities : readonly string[] =["Delhi","Jaipur"];
//cities.push(cities);  --> not possible..


const table : number[][] = [
    [1,2,3],
    [4,5,6]
]



//tuple in typescript...
let chaiTuple:[string,number];
chaiTuple=["Masala",23];


let userInfo:[string,number,boolean?];
userInfo=["manish",23];

const location:readonly [number,number] = [23,45];



