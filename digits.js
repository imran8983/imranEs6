const digit=(x)=>{
    if(x>999){
        console.log("it is four digit number")
    }else{
        console.log("it is not a four digit number")
    }
}
digit(95);
// method 2: optimize
const digit=(x)=> x>999 ? "it is four digit number" : "it is not a four digit number"
console.log(digit(2000));