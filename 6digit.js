const sixdigit=(x)=> {
    if(x>99999 && x<=999999){
        console.log("it is exactly six digit number")
    }else{
        console.log("sorry it is not a six digit number")
    }
}
sixdigit(1000000)
// method 2: optimization of 6 digit 
const sixdigit=(x)=> x>99999 && x<=999999 ? "it is six digit number" : "sorry it is not a six digit number"
console.log(sixdigit(51457));