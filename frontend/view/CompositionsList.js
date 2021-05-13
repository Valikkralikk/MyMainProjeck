import data from '../data/dataBase.js';

class CompositionsList{
    constructor(){
        this.hash = decodeURI(location.hash).split('/');
        this.id = '';
    }

    playMusic(index,audio,duration,button){
        duration[index].max = audio[index].duration;
        if(button[index].classList.contains('fa-play-circle')){
            audio[index].play();
            this.id = setInterval(()=>{
                duration[index].value = audio[index].currentTime;
                if(audio[index].currentTime === audio[index].duration){
                    button[index].classList.value = 'far fa-play-circle i';
                    clearInterval(this.id);
                    audio[index].pause();
                    duration[index].value = 0;
                }
            },500);
            button[index].classList.value = 'fas fa-pause-circle i';
        } else if(button[index].classList.contains('fa-pause-circle')){
            clearInterval(this.id);
            audio[index].pause();
            button[index].classList.value = 'far fa-play-circle i';
        }
    }

    changeDuration(i,duration,audio){
        audio[i].currentTime = duration[i].value;
    }

    typeList(array,type){
        const list = array[type].map(item=>{
            const notes = item.notes.map(note=>{
                return `<div><p>${note[0]}</p><div><a href="${note[1]}" download>Скачать</a><a href="${note[1]}" target="_blank">Открыть</a>
                ${(note[2] === true)?'<audio class="audio" src="'+note[3]+'"></audio><i class="far fa-play-circle i"></i><input type="range" name="duration" class="duration"></div>':'</div>'}</div>`
            }).join('')
            return `<h3>${item.name}</h3><div class="hide list">${notes}</div>`
        }).join('')
        return list;
    }

    createCompositors(hash){
        const compositor = data.find(item=>item.name === hash)
        let html = '';
        if(compositor.hasOwnProperty('opera')){
            html += `<h2>Оперы</h2><div class="menuList menuList_last hide">${this.typeList(compositor,'opera')}</div>`;
        }
        if(compositor.hasOwnProperty('camer')){
            html += `<h2>Камерно-вокальные</h2><div class="menuList menuList_last hide">${this.typeList(compositor,'camer')}</div>`;
        }
        if(compositor.hasOwnProperty('cont')){
            html += `<h2>Контаты и оратории</h2><div class="menuList menuList_last hide">${this.typeList(compositor,'cont')}</div>`;
        }
        return `<div class='menuList'>${html}</div>`
    }

    render(){
        return new Promise(resolve=>{
            if(this.hash[2]){
                resolve(`<div class="content">${this.createCompositors(this.hash[2])}</div>`)
            } else {
            resolve(
                `<div class='content'>
                ${data.map(item=>{
                    return `<div class='menuList'><h2 class="title">${item.fullName}</h2>${this.createCompositors(item.name)}</div>`
                }).join('')}
            </div>`)
            }
        })
    }

    afterRender(){
        const menuList = document.querySelectorAll('.content>.menuList'),
            audio = document.querySelectorAll('.audio'),
            duration = document.querySelectorAll('.duration'),
            playButton = document.querySelectorAll('.i');

        playButton.forEach((elem,index)=>{
            elem.addEventListener('click',()=>{this.playMusic(index,audio,duration,playButton)})
        })

        duration.forEach((elem,i)=>{
            elem.addEventListener('change',()=>{
                this.changeDuration(i,duration,audio);
            })
        })
        

        menuList.forEach(menu=>{
            menu.querySelectorAll('h2').forEach(h2=>{
                h2.addEventListener('click',()=>{
                    h2.nextElementSibling.classList.toggle('hide')
                })
            })
            menu.querySelectorAll('h3').forEach(h3=>{
                h3.addEventListener('click',()=>{
                    h3.nextElementSibling.classList.toggle('hide')
                })
            })
        })

    }

}

export default CompositionsList;