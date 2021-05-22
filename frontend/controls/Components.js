export default class Components{
    
    sendRequest(url){
        return new Promise((res)=>{
            const xhr = new XMLHttpRequest();
            xhr.open('GET','http://localhost:3001'+url);
            console.log(url)
            xhr.onload = ()=>{
                res(xhr.response);
            }
            xhr.send();
        })
    }
}