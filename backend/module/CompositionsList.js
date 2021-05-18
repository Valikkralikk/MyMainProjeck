let data = require ('../data/dataBase.json');
data.sort((a,b)=>a.fullName>b.fullName&&1||-1);

class CompositionsList{
    constructor(url){
        this.hash = url.split('/');
    }


    // typeList(array,type){
    //     const list = array[type].map(item=>{
    //         const notes = item.notes.map(note=>{
    //             return `<div><p>${note[0]}</p><div><div style='display:flex;'><a href="${note[1]}" download>Скачать</a><a href="${note[1]}" target="_blank">Открыть</a></div>
    //             ${(note[2] === true)?'<audio class="audio" src="'+note[3]+'"></audio><i class="far fa-play-circle i"></i><input type="range" name="duration" class="duration"></div>':'</div>'}</div>`
    //         }).join('')
    //         return `<h3>${item.name}</h3><div class="hide list">${notes}</div>`
    //     }).join('')
    //     return list;
    // }

    // createCompositors(hash){
    //     const compositor = data.find(item=>item.name === hash)
    //     let html = '';
    //     if(compositor.hasOwnProperty('opera')){
    //         html += `<h2>Оперы</h2><div class="menuList menuList_last hide">${this.typeList(compositor,'opera')}</div>`;
    //     }
    //     if(compositor.hasOwnProperty('camer')){
    //         html += `<h2>Камерно-вокальные</h2><div class="menuList menuList_last hide">${this.typeList(compositor,'camer')}</div>`;
    //     }
    //     if(compositor.hasOwnProperty('cont')){
    //         html += `<h2>Контаты и оратории</h2><div class="menuList menuList_last hide">${this.typeList(compositor,'cont')}</div>`;
    //     }
    //     return `<div class='menuList'>${html}</div>`
    // }

    // render(){
    //     return new Promise(resolve=>{
    //         if(this.hash[2]){
    //             resolve(`<div class="content">${this.createCompositors(this.hash[2])}</div>`)
    //         } else {
    //         resolve(
    //             `<div class='content'>
    //             ${data.map(item=>{
    //                 return `<div class='menuList'><h2 class="title">${item.fullName}</h2>${this.createCompositors(item.name)}</div>`
    //             }).join('')}
    //         </div>`)
    //         }
    //     })
    // }

    render(){
        return new Promise(resolve=>{
            resolve(this.hash.length.toString())
        })
    }

}

module.exports = CompositionsList;