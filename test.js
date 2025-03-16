// const p = new Promise((res,rej) => {
//     setTimeout(() => {
//         res("promise resolveed");
//     }, 2000);
// })
// const p1 = new Promise((res,rej) => {
//     setTimeout(() => {
//         res("promise resolveed--");
//     }, 8000);
// })

// async function getData(){
//     console.log("welcome");
    
//   const result = await p;
//   console.log("hello");
//   console.log(result);
//   const result2 = await p1;
//   console.log("hello 2");
//   console.log(result2);
// }

// getData();



// //  async function getData(){
// //   p.then((res) => console.log(res));
// //   console.log("hello");
// // }


// // getData()




// const url = 'https://api.github.com/users/mausooq';

// async function getData(){
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data);
// }

// getData();