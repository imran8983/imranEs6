const cubicarray=(data)=>{
    const newArr=[];
    data.forEach(element => {
        const cube=element**3; // const cube=Math.pow(element,3)
        newArr.push(cube)     // newArr.push(Math.pow(element,3))
        
    });
    return newArr;

}
console.log(cubicarray([2,4,5,7]));