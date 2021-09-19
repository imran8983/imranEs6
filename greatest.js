const greatest=(x,y)=>{
    if (x>y){
        console.log("x is greater number")
    }
    else{
        console.log("y is greater number")
    }
}
greatest(745855417,9845476248);
// method 2: optimization greatest number 
const greatest=(x,y)=> x>y ? "x is greater number" : "y is greater number"
console.log(greatest(78514751,2547896));