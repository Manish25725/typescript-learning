interface asd{
    flavour:string,
    price:number,
};

const masala :asd={
    flavour:"masala",
    price:30
}


interface Shop{
    readonly id:number,
    name:string
};

const s:Shop = {id:2,name:"Chai code caffe"};


interface DiscountCalculator{
    (price:number) : number
};

const apply50 :DiscountCalculator = (p) => p*1.5;


interface TeaMachine{
    start():void
    stop():void
};


const machine:TeaMachine={
    start(){
        console.log("start");
    },
    stop(){
        console.log("stop");
    }
}


//index signature...

interface ChaiRatings{
    [flavour:string] : number
};


const ratings:ChaiRatings={
    masala:3.4,
    ginger:4.4
}

interface User{
    name:string
};

interface User{
    age:number
};

const u:User={
    name:"manish",
    age:21
}


interface A{
    a:string
}

interface B{
    b:string
}


interface C extends A,B{
    
}
