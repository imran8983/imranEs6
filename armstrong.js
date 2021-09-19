
   var d=0, x,e;
   var b= prompt("enter a number");
   x=b;
 
   while(x>0){
       e=x%10;
       x=parseInt(x/10);
       d = d + e*e*e;
      
   }
   if(b==d){
       console.log("it is a armstrong number")
   }else {
       console.log("it is not")
   }
