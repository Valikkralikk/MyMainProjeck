import data from '../data/dataBase.js';
import Components from '../controls/Components.js';

class Compositiors extends Components{
<<<<<<< HEAD


    // createCardsList(){
    //     const list = data.map(item=>{
    //         return`
    //         <div class="content__item">
    //             <a href='#/compositions/${item.name}'>
    //             <img src="${item.image}" alt="${item.name}" class="image">
    //             <p class="title">${item.fullName}</p>
    //             </a>
    //         </div>`
    //     });
    //     return list.join('')
    // }
=======
>>>>>>> main

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