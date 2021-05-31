let a  = true;
let c = 0;
setTimeout(() => { a = false;}, 2000) ;
//setInterval(()=> {if(a) { console.log('hello') } }, 200);
//console.log("Checking After*********")
//while(a){ console.log(c++)}
//console.log("Checking End*********")

let id = setInterval(() => { 
    console.log(c++)
},200);

setTimeout(() =>{
    clearInterval(id)
},2000);
