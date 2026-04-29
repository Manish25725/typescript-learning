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
}

