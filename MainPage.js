class MainPage{
    render(){
        return new Promise(resolve=>{
            resolve(
                `<p id='first-page'>Welcome!</p>`
            )
        })
    }

    afterRender(){
        
    }
}

export default MainPage;