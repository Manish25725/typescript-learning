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




type Item={name:"string",quantity:number};
type Address={street:"string",pin:number};

type Order={
    id:string,
    items:Item[],
    address:Address[]
}


type Chai={
    name:string,
    price:number,
    isHot:boolean
}


const updateChai = (updates:Partial<Chai>)=>{
    console.log("updating chai with",updates);
}
updateChai({price:34});


let newData: Partial<Chai> = {
    price: 34
}



type ChaiOrder={
    name?:string,
    quantity?:number
};


const placeOrder=(order:Required<ChaiOrder>)=>{
    console.log(order);
}


type parent={
    name:string,
    price:number,
    isHot:boolean,
    ingrediants:string[]
};



type child = Pick<parent,"name"|"price">;

const asdInfo:child={
    name:"narrowing",
    price:30
};

console.log(asdInfo);



type ChaiNew={
    name:string,
    price:number,
    isHot:boolean,
    secretIngrediants:string[]
}

type  PublicChai=Omit<ChaiNew,"secretIngrediants">;

