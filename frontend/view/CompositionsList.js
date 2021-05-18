import data from '../data/dataBase.js';
import Components from '../controls/Components.js';

class CompositionsList extends Components{
    constructor(){
        super();
        this.hash = decodeURI(location.hashslice(1));
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
            },3000);
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


    render(){
        return new Promise(resolve=>{
            this.sendRequest(this.hash).then(html=>{
                return resolve(html)
            })
        })
    }

    // afterRender(){
    //     const menuList = document.querySelectorAll('.content>.menuList'),
    //         audio = document.querySelectorAll('.audio'),
    //         duration = document.querySelectorAll('.duration'),
    //         playButton = document.querySelectorAll('.i');

    //     playButton.forEach((elem,index)=>{
    //         elem.addEventListener('click',()=>{this.playMusic(index,audio,duration,playButton)})
    //     })

    //     duration.forEach((elem,i)=>{
    //         elem.addEventListener('change',()=>{
    //             this.changeDuration(i,duration,audio);
    //         })
    //     })
        

    //     menuList.forEach(menu=>{
    //         menu.querySelectorAll('h2').forEach(h2=>{
    //             h2.addEventListener('click',()=>{
    //                 h2.nextElementSibling.classList.toggle('hide')
    //             })
    //         })
    //         menu.querySelectorAll('h3').forEach(h3=>{
    //             h3.addEventListener('click',()=>{
    //                 h3.nextElementSibling.classList.toggle('hide')
    //             })
    //         })
    //     })

    // }

}

export default CompositionsList;