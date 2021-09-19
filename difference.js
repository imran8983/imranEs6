const difference=(x,y)=>{
    if(x-y<5){
        console.log("difference is less than 5")
    }else{
        console.log("difference is greater than 5")
    }
}
difference(10,5);
method 2: optimize form
const difference=(x,y)=>x-y<5 ? "yes" : "no" 
console.log(difference(10,2));