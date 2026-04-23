class Chai{
    price:number;
    flavour:string;

    constructor(price:number,flavour:string){
        this.price=price
        this.flavour=flavour
        console.log(this);
    }

   
}

// const masalachai = new Chai(2,"ginger");
// console.log(masalachai.flavour);



class Account{
    public balance:number = 100;
    private  account:number=12000;
    private name:string="manish";

    protected shopName = "asdfghjk";

    show(){
        return this.account
    }
}

const c = new Account();


