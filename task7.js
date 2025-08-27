async function fetched() {
    try{
        const data= await fetch("https://jsonplaceholder.typicode.com/posts")
        //console.log(data);
        const fetchedData=await data.json()
        console.log("first 5 post:",fetchedData.slice(0,5)) 
         

    }
    catch(error)
    {
        console.log("it have an error");
        
    }
    
}
fetched();