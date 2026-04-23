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


// for protected...
class Shop{
    protected  shopName="Phoenx"
}

class branch extends Shop{
    getName(){
        return this.shopName;
    }
}


class Wallet{
    #balance=100;

    getBalance(){
       return this.#balance;
    }
}



class Cup{
    readonly capacity:number = 21

    constructor(capacity:number){
        this.capacity=capacity;
    }
}



class flex{
    private _price: number = 0;

    set price(value: number) {
        if (value < 0) {
            console.log("Price cannot be negative");
            return;
        }
        this._price = value;
    }

    get price() {
        return this._price;
    }
}