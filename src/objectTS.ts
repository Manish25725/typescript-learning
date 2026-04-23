let tea:{
    name:string,
    price:number,
    isHot:boolean
}

tea={
    name:"Ginger Tea",
    price:25,
    isHot:true
}

type Cup={
    size:string
};

let smallCup:Cup={size:"200ml"};
let bigCup ={size:"400ml",material:"steel"};
smallCup = bigCup;

type Brew= {brewTime:number};
const coffee ={brewTime:5,beans:"Arabica"};
const chaiBrew:Brew=coffee;

console.log(chaiBrew);

