const fib=(n)=>{
    var a=0, b=1, c;
    for(let i=1; i<=n;i++){
        c= a+ b;
        console.log(a);
        a=b;
        b=c;
    }
}
fib(5);
// fibonacii series 