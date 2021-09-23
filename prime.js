const number=(n)=>
{
   for(i=2; i<n; i++){
       if(n%i==0){

      return "it is not a prime number"
     
   }}
   return "prime number"
}

console.log(number(3));