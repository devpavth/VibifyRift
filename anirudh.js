const music =new Audio('audio/1.mp3');
// music.play();

const bottom=document.querySelector(".bottom"),
// prevBtn =bottom.querySelector("#prev"),
// nextBtn =bottom.querySelector("#next");
progressArea=bottom.querySelector(".progress-area"),
progressBar=bottom.querySelector(".progress-bar");
// volumeIcon=bottom.querySelector(".volume-icon");
// volumeBar=bottom.querySelector(".vol-bar");


// const anirudhSongs=[
//     {
//         id: 1,
//         poster: "img/anirudh/1.jpg",
//         listening:`Naa Ready (From "Leo")
//         <span class="listener">100,063,396</span>
//         <span class="timestamp">4:08</span>`
//     },
//     {
//         id: 2,
//         poster: "img/anirudh/2.jpg",
//         listening:`Ordinary Person (From "Leo")
//         <span class="listener">21,426,317</span>
//         <span class="timestamp">2:19</span>`
//     },
//     {
//         id: 3,
//         poster: "img/anirudh/3.jpg",
//         listening:`Hayyoda (From "Jawan")
//         <span class="listener">173,109,279</span>
//         <span class="timestamp">3:20</span>`
//     },
// ]

// Array.from(document.getElementsByClassName('songItem')).forEach((element,j)=>{
//     // e.getElementsByTagName('span')[0].innerText = anirudhSongs[i].id;
//     element.getElementsByTagName('img')[0].src = anirudhSongs[j].poster;
//     element.getElementsByTagName('h5')[0].innerHTML = anirudhSongs[j].listening;
// });


const songs =[
    {
        id: 1,
        songName: `Naa Ready (From "Leo") <br>
        <div class="subtitle">Anirudh Ravichander, Thalapathy Vijay, Asal Kolaar</div>`,
        poster: "img/anirudh/1.jpg",
    },
    {
        id: 2,
        songName: `Ordinary Person (From "Leo") <br>
        <div class="subtitle">Anirudh Ravichander, Nikhita Gandhi</div>`,
        poster: "img/anirudh/2.jpg",
    },
    {
        id: 3,
        songName: `Hayyoda (From "Jawan") <br>
        <div class="subtitle">Anirudh Ravichander, Priya Mali</div>`,
        poster: "img/anirudh/3.jpg",
    },
    {
        id: 4,
        songName: `Hukum - Thalaivar Alappara <br>
        <div class="subtitle">Anirudh Ravichander, Super Subu</div>`,
        poster: "img/anirudh/4.jpg",
    },
    {
        id: 5,
        songName: `Yaanji <br>
        <div class="subtitle">Anirudh Ravichander, Shakthisree Gopalan, Sam C.S.</div>`,
        poster: "img/anirudh/5.jpg",
    },
    {
        id: 6,
        songName: `Porkanda Singam <br>
        <div class="subtitle">Anirudh Ravichander, Ravi G</div>`,
        poster: "img/anirudh/6.jpg",
    },
    {
        id: 7,
        songName: `Dippam Dappam <br>
        <div class="subtitle">Anirudh Ravichander, Anthony Daasan</div>`,
        poster: "img/anirudh/7.jpg",
    },
    {
        id: 8,
        songName: `Naanum Rowdy Dhaan <br>
        <div class="subtitle">Benny Dayal, Anirudh Ravichander</div>`,
        poster: "img/anirudh/8.jpg",
    },
    {
        id: 9,
        songName: `Vaathi Raid <br>
        <div class="subtitle">Anirudh Ravichander, Arivu</div>`,
        poster: "img/anirudh/9.jpg",
    },
    {
        id: 10,
        songName: `Don'u Don'u Don'u (The Don's Romance) <br>
        <div class="subtitle">Anirudh Ravichander,  Alisha Thomas</div>`,
        poster: "img/anirudh/10.jpg",
    },
    {
        id: 11,
        songName: `Tamilselvi <br>
        <div class="subtitle">Anirudh Ravichander, Nakash Aziz</div>`,
        poster: "img/anirudh/11.jpg",
    },
    {
        id: 12,
        songName: `Kadhal Kan Kattudhe <br>
        <div class="subtitle">Anirudh Ravichander, Shakthisree Gopalan</div>`,
        poster: "img/anirudh/12.jpg",
    },
    {
        id: 13,
        songName: `Enakenna Yaarum Illaye (From "Aakko") <br>
        <div class="subtitle">Anirudh Ravichander </div>`,
        poster: "img/anirudh/13.jpg",
    },

]


Array.from(document.getElementsByClassName('songList')).forEach((e,i)=>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})


Array.from(document.getElementsByClassName('queueSong')).forEach((e,i)=>{
    e.getElementsByTagName('img')[0].src = songs[i+3].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i+3].songName;
})





//--------------------search-bar starts-------------------------------

let searchResults = document.getElementsByClassName("search-results")[0];

songs.forEach(element => {
    const {id,songName,poster} = element;
    let card = document.createElement('a');
    card.classList.add('card');
    card.href = "#"+ id;

    card.innerHTML = `<img src="${poster}" alt="">
                        <div class="search-content">
                            ${songName}
                        </div>`;

    searchResults.appendChild(card);
});

let input = document.getElementsByTagName('input')[0];

input.addEventListener('keyup',()=>{
    let inputValue = input.value.toUpperCase();
    let items = searchResults.getElementsByTagName('a');

    for (let index = 0; index < items.length; index++) {
        let as = items[index].getElementsByClassName('search-content')[0];
        let textValue = as.textContent || as.innerHTML;

        if(textValue.toUpperCase().indexOf(inputValue) > -1){
            items[index].style.display = "flex";
        }else{
            items[index].style.display = "none";
        }
        
        if (input.value == 0) {
            searchResults.style.display = "none";
        } else {
            searchResults.style.display = "";
        }
    }
});

//--------------------search-bar ends------------------------------






let allPlaylist=document.getElementById('allPlaylist');

allPlaylist.addEventListener('click',() => {
    if (music.paused || music.currentTime<=0){
        music.play();
        allPlaylist.classList.add("fa-circle-pause");
        allPlaylist.classList.remove("fa-circle-play");
        masPlay.classList.add("fa-circle-pause");
        masPlay.classList.remove("fa-circle-play");
        document.getElementById("mzPlay").style.fontSize = "xx-large";
    }else{
        music.pause();
        allPlaylist.classList.remove("fa-circle-pause");
        allPlaylist.classList.add("fa-circle-play");
        masPlay.classList.remove("fa-circle-pause");
        masPlay.classList.add("fa-circle-play");
        document.getElementById("mzPlay").style.fontSize = "xx-large";
    }
})
let masterPlay=document.getElementById('1');

masterPlay.addEventListener('click',() => {
    if (music.paused || music.currentTime<=0){
        music.play();
        masPlay.classList.add("fa-circle-pause");
        masPlay.classList.remove("fa-circle-play");
        document.getElementById("mzPlay").style.fontSize = "xx-large";
    }else{
        music.pause();
        masPlay.classList.remove("fa-circle-pause");
        masPlay.classList.add("fa-circle-play");
        document.getElementById("mzPlay").style.fontSize = "xx-large";
    }
})

let masPlay=document.getElementById('mzPlay');

masPlay.addEventListener('click',() => {
    if (music.paused || music.currentTime<=0){
        music.play();
        allPlaylist.classList.add("fa-circle-pause");
        allPlaylist.classList.remove("fa-circle-play");
        masPlay.classList.add("fa-circle-pause");
        masPlay.classList.remove("fa-circle-play");
        document.getElementById("mzPlay").style.fontSize = "xx-large";
    }else{
        music.pause();
        allPlaylist.classList.remove("fa-circle-pause");
        allPlaylist.classList.add("fa-circle-play");
        masPlay.classList.remove("fa-circle-pause");
        masPlay.classList.add("fa-circle-play");
        document.getElementById("mzPlay").style.fontSize = "xx-large";
    }
})

// ---------------add to playlist icon starts----------------

var heartBtn=document.getElementById('heart-icon');

function likeBtn(){
    if (heartBtn.classList.contains("fa-regular")){
        heartBtn.classList.remove("fa-regular");
        heartBtn.classList.add("fa-solid");
        document.getElementById('heart-icon').style.color = '#36e2ec';
    }else{
        heartBtn.classList.add("fa-regular");
        heartBtn.classList.remove("fa-solid");
        document.getElementById('heart-icon').style.color = 'gray';
    }
}

// ---------------add to playlist icon ends----------------
// --------------------add to playlist icon starts for anirudh----------------

var heartShapeBtn=document.getElementById('heart-list');

function likeShapeBtn(){
    if (heartShapeBtn.classList.contains("fa-regular")){
        heartShapeBtn.classList.remove("fa-regular");
        heartShapeBtn.classList.add("fa-solid");
        document.getElementById('heart-list').style.color = '#36e2ec';
    }else{
        heartShapeBtn.classList.add("fa-regular");
        heartShapeBtn.classList.remove("fa-solid");
        document.getElementById('heart-list').style.color = 'gray';
    }
}

// -----------------------add to playlist icon ends for anirudh----------------




const makeAllBackground=()=>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.style.background = '#121213';
    })
}

// const makeAllBackgroundColor=()=>{
//     Array.from(document.getElementsByClassName('songList')).forEach((el)=>{
//         el.style.background = '#181818';
//     })
// }




const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('playlistPlay')).forEach((el)=>{
        el.classList.remove("fa-circle-pause");
        el.classList.add("fa-circle-play");
    })
}

let index=0;
let underPoster= document.getElementById('underPoster');
let bottomHeading=document.getElementById('bottomHeading');


Array.from(document.getElementsByClassName('playlistPlay')).forEach((e)=>{
    e.addEventListener('click',(el)=>{
        index=el.target.id;
        music.src=`audio/anirudh/${index}.mp3`;
        underPoster.src=`img/anirudh/${index}.jpg`;
        music.play();
        masPlay.classList.add("fa-circle-pause");
        masPlay.classList.remove("fa-circle-play");
        document.getElementById("mzPlay").style.fontSize = "xx-large";

        let songTitle = songs.filter((ele)=>{
            return ele.id==index;
        });

        songTitle.forEach(elez =>{
            let {songName}=elez;
            bottomHeading.innerHTML=songName;
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-4].style.background = "rgba(105,105,170,0.1)";

        // makeAllBackgroundColor();
        // Array.from(document.getElementsByClassName('songList'))[index-15].style.background = "rgba(105,105,170,0.2)";

        makeAllPlays();
        el.target.classList.remove("fa-circle-play");
        el.target.classList.add("fa-circle-pause");
    })
})





music.addEventListener("timeupdate",(e)=>{
    const currentTime=e.target.currentTime;
    const duration=e.target.duration;
    let progressWidth = (currentTime/duration)*100;
    progressBar.style.width=`${progressWidth}%`;

    let musicCurrentTime=bottom.querySelector(".startTime");
    musicDuration = bottom.querySelector(".endTime");

    music.addEventListener("loadeddata",()=>{

        let audioDuration = music.duration;
        let totalMin= Math.floor(audioDuration / 60);
        let totalSec= Math.floor(audioDuration % 60);
        if (totalSec < 10){
            totalSec = `0${totalSec}`;
        }
        musicDuration.innerText=`${totalMin}:${totalSec}`;

    });

    let currentMin= Math.floor(currentTime / 60);
    let currentSec= Math.floor(currentTime % 60);
    if (currentSec < 10){
        currentSec = `0${currentSec}`;
    }
    musicCurrentTime.innerText=`${currentMin}:${currentSec}`;
});

progressArea.addEventListener("click",(e)=>{
    let progressWidthval=progressArea.clientWidth;
    let clickedOffSetX=e.offsetX;
    let songDuration = music.duration;

    music.currentTime=(clickedOffSetX / progressWidthval)*songDuration;
    music.play();
    masPlay.classList.add("fa-circle-pause");
    masPlay.classList.remove("fa-circle-play");
});




// ------------------------prev and next button starts-------------------------

let prev = document.getElementById('prev');
let next = document.getElementById('next');

prev.addEventListener('click',()=>{
    index--;

    if (index < 1){
        index = Array.from(document.getElementsByClassName('songItem')).length + 3;
    }

    music.src=`audio/anirudh/${index}.mp3`;
        underPoster.src=`img/anirudh/${index}.jpg`;
        music.play();
        masPlay.classList.add("fa-circle-pause");
        masPlay.classList.remove("fa-circle-play");
        allPlaylist.classList.add("fa-circle-pause");
        allPlaylist.classList.remove("fa-circle-play");
        document.getElementById("mzPlay").style.fontSize = "xx-large";

        let songTitle = songs.filter((ele)=>{
            return ele.id==index;
        });

        songTitle.forEach(elez =>{
            let {songName}=elez;
            bottomHeading.innerHTML=songName;
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-4].style.background = "rgba(105,105,170,0.1)";

        makeAllPlays();
        el.target.classList.remove("fa-circle-play");
        el.target.classList.add("fa-circle-pause");
});



next.addEventListener('click',()=>{
    index++;

    if (index > Array.from(document.getElementsByClassName('songItem')).length + 3){
        index = 1;
    }

    music.src=`audio/anirudh/${index}.mp3`;
        underPoster.src=`img/anirudh/${index}.jpg`;
        music.play();
        masPlay.classList.add("fa-circle-pause");
        masPlay.classList.remove("fa-circle-play");
        allPlaylist.classList.add("fa-circle-pause");
        allPlaylist.classList.remove("fa-circle-play");
        document.getElementById("mzPlay").style.fontSize = "xx-large";

        let songTitle = songs.filter((ele)=>{
            return ele.id==index;
        });

        songTitle.forEach(elez =>{
            let {songName}=elez;
            bottomHeading.innerHTML=songName;
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-4].style.background = "rgba(105,105,170,0.1)";

        makeAllPlays();
        el.target.classList.remove("fa-circle-play");
        el.target.classList.add("fa-circle-pause");
});

// ------------------------prev and next button ends-------------------------





// volumeBar.addEventListener('change',()=>{
//     if (volumeBar.value == 0){
//         volumeIcon.classList.remove('fa-volume-high');
//         volumeIcon.classList.remove('fa-volume-low');
//         volumeIcon.classList.add('fa-volume-xmark');
//     }
//     if (volumeBar.value > 0){
//         volumeIcon.classList.remove('fa-volume-high');
//         volumeIcon.classList.add('fa-volume-low');
//         volumeIcon.classList.remove('fa-volume-xmark');
//     }
//     if (volumeBar.value > 50){
//         volumeIcon.classList.add('fa-volume-high');
//         volumeIcon.classList.remove('fa-volume-low');
//         volumeIcon.classList.remove('fa-volume-xmark');
//     }

//     let volumeWidth = volumeBar.value;
//     volumeBar.style.width = `${volumeWidth}`;
// });



const slider= document.querySelector('.slider');
const progress= document.querySelector('.progress');
const volumeSlider= document.querySelector('.volume-slider .slider');
const volumeProgress= document.querySelector('.volume-slider .progress');
const volumeIcon= document.querySelector('.volume-icon');

let volumeMuted = false;


// function customSlider(){
//     const val = (slider.value / music.duration)*100+ "%";
//     progress.style.width=val;
//     music.currentTime=slider.value;
// }

// customSlider();

// slider.addEventListener("input",customSlider);

let val;

function customVolumeSlider(){
    const maxVal = volumeSlider.getAttribute("max");
    val=(volumeSlider.value/maxVal)*100+"%";
    volumeProgress.style.width=val;
    music.volume=volumeSlider.value/100;
    if(music.volume > 0.5){
        volumeIcon.innerHTML=`<span>
        <i class="fa-solid fa-volume-high" style="color: #c7c6c6;"></i>
    </span>`;
        
    }
    else if(music.volume === 0){
        volumeIcon.innerHTML=`<span>
        <i class="fa-solid fa-volume-xmark" style="color: #c7c6c6;"></i>
    </span>`;
    }
    else{
        volumeIcon.innerHTML=`<span>
        <i class="fa-solid fa-volume-low" style="color: #c7c6c6;"></i>
    </span>`;
    }
}
customVolumeSlider();

volumeSlider.addEventListener("input",customVolumeSlider);


volumeIcon.addEventListener('click',()=>{
    if(volumeMuted === false){
        volumeIcon.innerHTML=`<span>
        <i class="fa-solid fa-volume-xmark" style="color: #c7c6c6;"></i>
    </span>`;
        music.volume=0;
        volumeProgress.style.width=0;
        volumeMuted=true;
    }
    else{
        volumeIcon.innerHTML=`<span>
        <i class="fa-solid fa-volume-low" style="color: #c7c6c6;"></i>
    </span>`;
        music.volume=0.5;
        volumeProgress.style.width=val;
        volumeMuted=false;
    }
});



let loadMoreBtn = document.querySelector("#load-more");
let currentItem=5;


loadMoreBtn.onclick=()=>{
    let boxes = [...document.querySelectorAll('.menuSong li')];
    for (var i=currentItem; i< currentItem +5 ;i++){
        boxes[i].style.display= 'flex';
    }
    currentItem+=5;

    if (currentItem>= boxes.length){
        loadMoreBtn.textContent == "See more" ? loadMoreBtn.textContent = "Show less" : loadMoreBtn.textContent = "See more";
        loadMoreBtn.style.display= 'none';
    }
    // else if(currentItem>= boxes.length && loadMoreBtn.textContent == "Show less"){
    //     loadMoreBtn.style.display= 'none';
    // }
}

// loadMoreBtn.onclick=()=>{
//     let boxes = [...document.querySelectorAll('.menuSong li')];
//     for (var i=currentItem; i > currentItem +10 ;i--){
//         boxes[i].style.display= 'none';
//     }
//     currentItem+=5;
//     // document.querySelectorAll('.menuSong li').style.height = "740px";

//     if (currentItem>= boxes.length){
//         loadMoreBtn.textContent == "Show more" ? loadMoreBtn.textContent = "Show less" : loadMoreBtn.textContent = "Show more";
//     }
// }

// loadMoreBtn.onclick=()=>{
//     if (loadMoreBtn.classList.contains("loadMoreBtn.textContent == Show less")){
//         document.querySelectorAll('.menuSong li').style.display= 'none';
//     }
// }









// -----------------------I am trying to make it as a function----------------------------------


window.addEventListener("load",()=>{
    loadMusic(index);
});

function loadMusic(index){
    music.src=`audio/anirudh/${index}.mp3`;
    underPoster.src=`img/anirudh/${index}.jpg`;
    music.play();

    let songTitle = songs.filter((ele)=>{
        return ele.id==index;
    });

    songTitle.forEach(elez =>{
        let {songName}=elez;
        bottomHeading.innerHTML=songName;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-4].style.background = "rgba(105,105,170,0.1)";
}


function nextMusic(){
    index++;

    if (index > Array.from(document.getElementsByClassName('songItem')).length +3){
        index = 1;
    }

    music.src=`audio/anirudh/${index}.mp3`;
    underPoster.src=`img/anirudh/${index}.jpg`;
    music.play();
    masPlay.classList.add("fa-circle-pause");
    masPlay.classList.remove("fa-circle-play");
    document.getElementById("mzPlay").style.fontSize = "xx-large";

    let songTitle = songs.filter((ele)=>{
        return ele.id==index;
    });

    songTitle.forEach(elez =>{
        let {songName}=elez;
        bottomHeading.innerHTML=songName;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-4].style.background = "rgba(105,105,170,0.1)";

    makeAllPlays();
    el.target.classList.remove("fa-circle-play");
    el.target.classList.add("fa-circle-pause");
}




// -----------------------repet ,repeat-1 and shuffle starts-----------------------------------

const repeatBtn = bottom.querySelector("#repeat-plist");
repeatBtn.addEventListener("click",()=>{
    let getText = repeatBtn.innerText;

    switch(getText){
        case "repeat":
            repeatBtn.innerText = "repeat_one";
            repeatBtn.setAttribute("title","Song looped");
            break;
        case "repeat_one":
            repeatBtn.innerText = "shuffle";
            repeatBtn.setAttribute("title","Playback shuffle");
            break;
        case "shuffle":
            repeatBtn.innerText = "repeat";
            repeatBtn.setAttribute("title","Playlist looped");
            break;
    }
});



music.addEventListener("ended",()=>{
    let getText = repeatBtn.innerText;

    switch(getText){
        case "repeat":
            nextMusic();
            break;
        case "repeat_one":
            music.currentTime = 0;
            loadMusic(index);
            music.play();
            break;
        case "shuffle":
            let randIndex = Math.floor((Math.random() * songs.length) +1); 
            do{
                randIndex = Math.floor((Math.random() * songs.length) +1); 
            }while(index == randIndex);
            index = randIndex;
            loadMusic(index);
            music.play();
            break;
    }
});


// -----------------------repet ,repeat-1 and shuffle ends-------------------------------------------






const wrapper=document.querySelector(".wrapper"),
musicList = wrapper.querySelector(".music-list"),
showMoreBtn = bottom.querySelector("#more-music"),
hideMusicBtn = musicList.querySelector("#close");

showMoreBtn.addEventListener("click",()=>{
    musicList.classList.toggle("show");
});

window.onscroll= () =>{
    musicList.classList.remove("show");
}

hideMusicBtn.addEventListener("click",()=>{
    showMoreBtn.click();
});









let searchForm = document.querySelector(".search");

document.querySelector("#s-btn").onclick = () =>{
    searchForm.classList.toggle('active');
}