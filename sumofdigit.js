const digitsum=(x)=>{
    var sum=0;
    while(x!=0){
    sum=sum+ x%10;
    x=parseInt(x/10);
    }
    return sum;
}
console.log(digitsum(5417899));
// sum of digit 