export default class Components{
    
    sendRequest(url){
        return new Promise((res)=>{
            const xhr = new XMLHttpRequest();
            xhr.open('GET','http://localhost:3001'+url);
            
            xhr.onload = ()=>{
                res(xhr.response);
            }
            xhr.send();
        })
    }

    getData(){
        return new Promise((res)=>{
            const xhr = new XMLHttpRequest();
            xhr.open('GET','http://localhost:3001/dataBase');
            xhr.onload = ()=>{
                res(JSON.parse(xhr.response));
            }
            xhr.send();
        })
    }
}