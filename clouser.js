// let x = 1;

// function func(){
//     let val = 2;
//     console.log(x);
//     console.log(val);

//     const sFunc = () => {
//         console.log(x+=1);
//         console.log(val+=1);
//     }
//     return sFunc
// }


// const res = func();

// res();

// res()

// console.log();


// IIFE

// const func = (() => {
//     let cnt = 0;
//     console.log('initial counter ', cnt);
//     return () =>{cnt +=1; console.log("child",cnt);
//     }
// })();

// func()
// func()
// func()



const credit = ((num) => {
    let credit = num;
    console.log(`credit ${credit}`);
    
    return () => {
        credit -=1;
        let res = credit > 0 ? `Playing Game ${credit} credits remaining` : `No enough credit to play`
        console.log(res)
    }
})(3);

credit()
credit()
credit()