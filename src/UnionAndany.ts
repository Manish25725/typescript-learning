let val : number | string = "24";

let apiRequest : 'pending' | 'error' | 'success' = 'pending';
apiRequest = 'success';
let airlineSeat: 'middle' | 'window' | 'aisle' = 'middle';


const orders = ['12','45','5','42','28'];

let currentOrder: string | undefined;


for(let order of orders){
    if(order === '28'){
        currentOrder = order;
        break;
    }
    currentOrder = '11';
}

console.log(currentOrder);

