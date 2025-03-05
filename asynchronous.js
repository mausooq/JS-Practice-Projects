// callback

function func1(callback){
    setTimeout(() => {
        console.log('func1');
        callback();
    },5000)
}

function func2(){
    console.log('func2');
}

// func1(func2);


console.log("-----------------------------");


// Error 





