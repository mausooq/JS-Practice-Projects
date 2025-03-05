// let cars = ['bmw','Benz','jaguar','maruti'];

// cars.forEach(uppercase)
// cars.forEach(display)

// function uppercase(ele ,idx , cars ){
//     cars[idx] = ele.toUpperCase();
// }

// function display(ele){
//     console.log(ele);
    
// }

// MAP

// const number = [1,2,3,4,5];

// const sq = number.map(square);

// console.log(sq);

// function square(ele){
//     return Math.pow(ele,2);
// }


// const date = ["12-02-2000","12-02-2000","12-02-2000"];

// const formatedDate = date.map(ele => {
//     newDate = ele.split('-');
//     return `${newDate[1]}/${newDate[0]}/${newDate[2]}`;
// })
// console.log(formatedDate);


// filter 

const number = [1,2,3,4,5,6,7,8];

const data = number.filter(ele => {
    if(ele % 2 === 0){
        return ele;
    }
})

console.log(data);
