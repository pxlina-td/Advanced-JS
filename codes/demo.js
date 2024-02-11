function sort(arr, op) {
        return op === "asc" ? arr.sort((a, b) => a - b) : arr.sort((a, b) => b - a);
}
function argInfo(...data) {
        let result = {};
        for (let el of data) {
                let type = typeof (el);
                console.log(`${type}: ${el}`);
                if (!result.hasOwnProperty(type)) {
                        result[type] = 0;
                }
                result[type] += 1;
        }
        let sortRes = Object.entries(result).sort((a, b) => b[1] - a[1]);
        for (let [k, v] of sortRes) {
                console.log(`${k} = ${v}`);
        }
}
function fibonacci() {
        let first = 0;
        let second = 1;
        return function () {
                let res = first + second;
                first = second;
                second = res;
                return first
        }
}
function solution() {
        const store = {
                protein: 0,
                carbohydrate: 0,
                fat: 0,
                flavour: 0
        };
        const recipees={
                apple: {carbohydrate:1, flavour:2},
                lemonade:{carbohydrate:10, flavour:20},
                burger:{carbohydrate:5, fat:7, flavour:3},
                eggs:{protein:5, fat:1, flavour:1},
                turkey:{protein:10, carbohydrate:10, fat:10, flavour:10}
        }
        return function (data) {
                let [action, type, qty] = data.split(' ');
                switch (action) {
                        case 'restock':
                                store[type]+=Number(qty);
                                return "Success";
                                break;
                        case 'prepare':
                                let need = Object.entries(recipees[type]);
                                let error=false;
                                for(let el of need){
                                        let needType = el[0];
                                        let needQty = Number(el[1]) * qty;
                                        
                                        if(store[needType]< needQty){
                                                error=true;
                                                return `Error: not enough ${needType} in stock`;
                                                break;
                                        } else {
                                                store[needType]-=needQty;
                                        }
                                }
                                if (error===false){
                                        return "Success";
                                }
                                break;
                        case 'report':
                                let str='';
                                let products = Object.entries(store);
                                for(let [k,v] of products){
                                        str+=`${k}=${v} `;
                                }
                                str = str.trim();
                                return str;
                                break;
                }
        }
}
function add(num){

}