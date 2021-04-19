class Footer{
    render(){
        return new Promise(resolve=>{
            resolve(
                `<footer class="footer">
                    <p>&copy;2021 Valikkralik</p>
                </footer>`
            )
        })
    }
}

export default Footer;