const notbetween=(x)=> {
    if(x>=5 && x<=27){
        console.log("it is in the range")
    }else{
        console.log("it is out of range")
    }
}
notbetween(3);
// method 2: optimize
const notbetween=(x)=> x>=5 && x<=27 ? "it is in between range": "it is out of the range"
console.log(notbetween(30));