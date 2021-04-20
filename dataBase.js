const dataBase = [
    {
        name:'Мусоргский',
        fullName:'Мусоргский</br> Модест Петрович',
        date:'(1839-1881)',
        image:'./source/image/musirgski.jpg',
        opera:[
            {
                name:'Борис Годунов',
                date:'1874',
                notes:[
                    ['Борис Годунов Клавир','./source/notes/Musorgski/Opera/BorisGodunov/Boris_Godunov_klavir.pdf',false,'address'],
                    ['Борис Годунов Клавир 1896г','./source/notes/Musorgski/Opera/BorisGodunov/Boris_Godunov_klavir_1896g.pdf',false,'address'],
                    ['Монолог Бориса Скорбит душа','./source/notes/Musorgski/Opera/BorisGodunov/Monolog_Borisa_Skorbit_dushaquot.pdf',false,'address'],
                    ['Монолог Марины','./source/notes/Musorgski/Opera/BorisGodunov/Monolog_Mariny.pdf',false,'address'],
                    ['Песня про комара','./source/notes/Musorgski/Opera/BorisGodunov/Pesnya_pro_komara.pdf',false,'address'],
                    ['Песня Варлаама','./source/notes/Musorgski/Opera/BorisGodunov/Pesnya_Varlaama.pdf',false,'address'],
                    ['Рассказ Пимена','./source/notes/Musorgski/Opera/BorisGodunov/Rasskaz_Pimena.pdf',false,'address'],
                    ['Речь Щекалова','./source/notes/Musorgski/Opera/BorisGodunov/Rech_Schekalova.pdf',false,'address'],
                    ['Речетатив и ария Бориса','./source/notes/Musorgski/Opera/BorisGodunov/Rechitativ_i_aria_Borisa.pdf',false,'address'],
                ],
            },
            {
                name:'сорочинская ярмарка',
                date:'1913',
                notes:[
                    ['Клавир','./source/notes/Musorgski/Opera/SorochinskayaYarmarka/klavirSorochinskaya_yarmarka.pdf',false,'address'],
                    ['Думка Параси','./source/notes/Musorgski/Opera/SorochinskayaYarmarka/Dumka_Parasi.pdf',false,'address'],
                ],
            },
            {
                name:'женитьба',
                date:'',
                notes:[
                    ['Рассказ свахи','./source/notes/Musorgski/Opera/Zhenitba/Modest_Musorgskiy_-_Rasskaz_svakhi.pdf',false,'address'],
                ],
            },
            {
                name:'хованщина',
                date:'1886',
                notes:[
                    ['Клавир','./source/notes/Musorgski/Opera/Khovanshina/Khovanschina_klavir.pdf',false,'address'],
                    ['Ария Шкаловитого','./source/notes/Musorgski/Opera/Khovanshina/Modest_Musorgskiy_-_Aria_Shaklovitogo.pdf',false,'address'],
                    ['Акт-2 Сцена-2 партитура','./source/notes/Musorgski/Opera/Khovanshina/musorgskiy-khovamshina-akt2scen2-partitura.pdf',false,'address'],
                    ['Песня Марфы','./source/notes/Musorgski/Opera/Khovanshina/Pesnya_Marfy.pdf',false,'address'],
                    ['Сцена гадания Марфы','./source/notes/Musorgski/Opera/Khovanshina/stsena_gadania_Marfy.pdf',false,'address'],
                ]
            }
        ],
        camer:[
            {
                name:'Цикл песни и пляски смерти',
                date:'',
                notes:[
                    ['Трепак','./source/notes/Musorgski/CamernoVocalnii/CiklPesniIPliyaskiSmerti/1_Trepak.pdf',false,'address'],
                    ['Колыбельная','./source/notes/Musorgski/CamernoVocalnii/CiklPesniIPliyaskiSmerti/2_Kolybelnaya.pdf',false,'address'],
                    ['Серенада','./source/notes/Musorgski/CamernoVocalnii/CiklPesniIPliyaskiSmerti/3_Serenada.pdf',false,'address'],
                    ['Полководец','./source/notes/Musorgski/CamernoVocalnii/CiklPesniIPliyaskiSmerti/4_Polkovodets.pdf',false,'address'],
                    ['Песня и пляска смерти','./source/notes/Musorgski/CamernoVocalnii/CiklPesniIPliyaskiSmerti/pesni_i_plyaski_smerti.pdf',false,'address'],
                ],
            },
            {
                name:'Детская. Эпизоды из детской жизни.',
                date:'',
                notes:[
                    ['Детская','./source/notes/Musorgski/CamernoVocalnii/Детская. Эпизоды из детской жизни. Вокальный цикл на слова композитора (1870)/Musorgskiy_-_Detskaya.pdf',false,'address'],
                ],
            },
            {
                name:'Вокальный цикл «Без солнца»',
                date:'',
                notes:[
                    ['Детская','./source/notes/Musorgski/CamernoVocalnii/«Без солнца». Вокальный цикл на стихи А. А. Голенищева-Кутузова (1874)/Bez_solntsa.pdf',false,'address'],
                ],
            },
        ]
    },
    {
        name:'Римский-Корсаков',
        fullName:'Римский-Корсаков</br> Николай Андреевич',
        image:'./source/image/korsakov.jpg',
        date:'(1844-1908)',
        camer:[
            {
                name:'Борис Годунов',
                date:'1874',
                notes:[['note','address','audio','address']],
            },
            {
                name:'сорочинская ярмарка',
                date:'1913',
                notes:[['note','address','audio','address']],
            },
            {
                name:'хованщина',
                date:'1886',
                notes:[['Клавир','http://drive.google.com/uc?export=view&id=1z7mMBl_6xDZcdjNHzBw_TOb4h3xPEnH1','audio','address']]
            }
        ]
    },
    {
        name:'Глинка',
        fullName:'Глинка</br> Михаил Иванович',
        date:'(1804-1857)',
        image:'./source/image/glinka.jpg',
        opera:[
            {
                name:'Борис Годунов',
                date:'1874',
                notes:[['note','address','audio','address']],
            },
            {
                name:'сорочинская ярмарка',
                date:'1913',
                notes:[['note','address','audio','address']],
            },
            {
                name:'хованщина',
                date:'1886',
                notes:[['Клавир','http://drive.google.com/uc?export=view&id=1z7mMBl_6xDZcdjNHzBw_TOb4h3xPEnH1','audio','address']]
            }
        ],
        cont:[
            {
                name:'Борис Годунов',
                date:'1874',
                notes:[['note','address',true,'address']],
            },
            {
                name:'сорочинская ярмарка',
                date:'1913',
                notes:[['note','address',true,'address']],
            },
            {
                name:'хованщина',
                date:'1886',
                notes:[['Клавир','http://drive.google.com/uc?export=view&id=1z7mMBl_6xDZcdjNHzBw_TOb4h3xPEnH1','audio','address']]
            }
        ]
    },
    {
        name:'Чайковский',
        fullName:'Чайковский</br> Пётр Ильич',
        date:' (1840-1893)',
        image:'./source/image/chaikovsky.jpg',
        cont:[
            {
                name:'Борис Годунов',
                date:'1874',
                notes:[['note','address','audio','address']],
            },
            {
                name:'сорочинская ярмарка',
                date:'1913',
                notes:[['note','address','audio','address']],
            },
            {
                name:'хованщина',
                date:'1886',
                notes:[
                    ['Клавир','http://drive.google.com/uc?export=view&id=1z7mMBl_6xDZcdjNHzBw_TOb4h3xPEnH1',true,'address'],
                    ['Алавир','http://drive.google.com/uc?export=view&id=1z7mMBl_6xDZcdjNHzBw_TOb4h3xPEnH1',true,'address'],
                    ['Улавир','http://drive.google.com/uc?export=view&id=1z7mMBl_6xDZcdjNHzBw_TOb4h3xPEnH1',false,'address'],
                ]
            }
        ]
    },
]

function compositionsList(array){
    array.forEach(item => {
        let compositions = [item.name];
        if(item.hasOwnProperty('opera')){
            item.opera.forEach(opera=>{
                compositions.push(['opera',opera.name])
            })
        }
        if(item.hasOwnProperty('cont')){
            item.cont.forEach(cont=>{
                compositions.push(['cont',cont.name])
            })
        }
        if(item.hasOwnProperty('camer')){
            item.camer.forEach(camer=>{
                compositions.push(['camer',camer.name])
            })
        }
        item.compositionsList = compositions;
    });
}
compositionsList(dataBase);

export default dataBase;