sum(display , 5 , 5);

function sum(call , a , b){
     let res = a+b ;
     call(res);
}

function display(res){
    console.log(res);
    
}