const building=(L,B,l,b,nof,ntb)=>{
    onefloortiles= L*B/l*b;
    // nob=totaltiles/ntb;
    return totalbox=onefloortiles*nof/ntb;

}
console.log(Math.ceil(building(40,30,5,5,10,10)));