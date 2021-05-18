class Components{

    showData(data){
        console.log(data)
    }
    
    sendRequest(){
        return new Promise(resolve=>{
            const xhr = new XMLHttpRequest();
            xhr.onload = ()=>{
                resolve(xhr.response);
            }
            xhr.open('GET','http://localhost:3001/');
            xhr.send();
        })
    }
}




new Components().sendRequest().then(html=>console.log(html));
