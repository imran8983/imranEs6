const imgdata=(arr)=> arr.map(item=> `<img src="${item.url}" alt="${item.title}" />`);
console.log(imgdata([
    {url:"google.com", title:"google"},
    {url:"pickupbiz.com", title:"pickupbiz"},
    {url:"gmail.com", title:"gmail"}
]))

