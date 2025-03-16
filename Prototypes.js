// const car = {
//     name: 'Toyota',
// };

// const bike = {
//     color : 'Black',
// }


// Object.setPrototypeOf(car,bike)

// console.log(Object.getPrototypeOf(car));
// console.log(car.color);


const fib = (num , arr = [0,1]) => {
    if(num < 2) return arr;
    const [nextTolast , last] = arr.slice(-2)
    console.log(nextTolast,last);
    return fib(num -1 ,[...arr,last+nextTolast])
}
console.log(fib(12));



