const mypromise = new Promise((resolve, reject)=>{
let age = 25;
if(age > 18){
    resolve("You are eligible to vote");
} else{
    reject("You are not eligible to vote");
}
});

// mypromise.then((message)=>{             
//     console.log(message);
// })
// .catch((message)=>{
//     console.log(message);
// })

const f1 = async ()=>{
    const message = await mypromise;
    console.log(message);
}
f1();

const getData = async()=>{
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();  
    return data;

}
getData().then((data)=>{
    console.log(data);
});


const mypromise = new Promise((resolve, reject)=>{
    let age = 24; 
    if(age > 18){
        resolve("You are eligible to vote")   
    } else{
        reject("You are not eligible to vote")
    });
    // fetchb('https://fakestoreapi.com/products')
    // .then((response)=>response.json())
    // .then((data)=>
    //     console.log(data))

    // mypromise.then((message)=>{
    //     console.log(message);
    // })
    // .catch((message)=>{
    //     console.log(message);
    // })  
    // f1(); 