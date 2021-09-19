const greeting=(type)=>{
    switch(type){
        case 1:
             console.log("Good Morning")
             break;
        case 2:
             console.log("Good Afternoon")
             break;
        case 3:
             console.log("Good Evening")
             break;
        case 4: 
        console.log("Good Night")
        break;
        default:
            console.log("Hello")
    }
}
greeting(5);