import Components from '../controls/Components.js';

class Compositiors extends Components{

    render(){
        return new Promise(resolve=>{
            this.sendRequest('/').then(html=>{
                return resolve(`
                <div class="grid">
                    ${html}
                </div>
            `)
            })
            
        })
    }

    afterRender(){
        
    }
}

export default Compositiors;