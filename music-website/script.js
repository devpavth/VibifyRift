const music =new Audio('audio/1.mp3');
// music.play();

const bottom=document.querySelector(".bottom"),
// prevBtn =bottom.querySelector("#prev"),
// nextBtn =bottom.querySelector("#next");
progressArea=bottom.querySelector(".progress-area"),
progressBar=bottom.querySelector(".progress-bar");
// volumeIcon=bottom.querySelector(".volume-icon");
// volumeBar=bottom.querySelector(".vol-bar");


const songs =[
    {
        id: 1,
        songName: `Naa Ready (From "Leo") <br>
        <div class="subtitle">Anirudh Ravichander, Thalapathy Vijay, Asal Kolaar</div>`,
        poster: "img/1.jpg",
    },
    {
        id: 2,
        songName: `Ordinary Person (From "Leo") <br>
        <div class="subtitle">Anirudh Ravichander, Nikhita Gandhi</div>`,
        poster: "img/2.jpg",
    },
    {
        id: 3,
        songName: `Hayyoda (From "Jawan") <br>
        <div class="subtitle">Anirudh Ravichander, Priya Mali</div>`,
        poster: "img/3.jpg",
    },
    {
        id: 4,
        songName: `Nee Singam Dhan <br>
        <div class="subtitle">A.R. Rahman, Sid Sriram</div>`,
        poster: "img/4.jpg",
    },
    {
        id: 5,
        songName: `Unakaga <br>
        <div class="subtitle">A.R. Rahman, Sreekanth Hariharan, Madhura Dhara Talluri</div>`,
        poster: "img/5.jpg",
    },
    {
        id: 6,
        songName: `Aga Naga ("From Ponniyin Selvan Part-2") <br>
        <div class="subtitle">A.R. Rahman, Shakthisree Gopalan</div>`,
        poster: "img/6.jpg",
    },
    {
        id: 7,
        songName: `Humdard <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "img/7.jpg",
    },
    {
        id: 8,
        songName: `Vaathi Raid <br>
        <div class="subtitle">Anirudh Ravichander, Arivu</div>`,
        poster: "img/8.jpg",
    },
    {
        id: 9,
        songName: `Ark <br>
        <div class="subtitle">Zookeepers, Star Party, Ship Wrek</div>`,
        poster: "img/9.jpg",
    },
    {
        id: 10,
        songName: `Everything I Got <br>
        <div class="subtitle">Shiah Maisel, Clarx</div>`,
        poster: "img/10.jpg",
    },
    {
        id: 11,
        songName: `Be The One <br>
        <div class="subtitle">Sam Day</div>`,
        poster: "img/11.jpg",
    },
    {
        id: 12,
        songName: `Far From Home <br>
        <div class="subtitle">Charles B, Simon Fougère, Khar, Simon Says</div>`,
        poster: "img/12.jpg",
    },
    {
        id: 13,
        songName: `Reflect <br>
        <div class="subtitle">Syn Cole</div>`,
        poster: "img/13.jpg",
    },
    {
        id: 14,
        songName: `Heaven Knows <br>
        <div class="subtitle">Vizzen, Protolizard</div>`,
        poster: "img/14.jpg",
    },
    {
        id: 15,
        songName: `Enemies <br>
        <div class="subtitle">ATSMXN, XTOM </div>`,
        poster: "img/15.jpg",
    },
    {
        id: 16,
        songName: `Pray Tonight <br>
        <div class="subtitle">Wiguez, P-one </div>`,
        poster: "img/16.jpg",
    },
    {
        id: 17,
        songName: `Royalty <br>
        <div class="subtitle"> Egzod, Maestro Chives, Don Diablo </div>`,
        poster: "img/17.jpg",
        duration:"2:58",
    },
    {
        id: 18,
        songName: `Hold You <br>
        <div class="subtitle">Low Mileage </div>`,
        poster: "img/18.jpg",
        duration:"2:21",
    },
    {
        id: 19,
        songName: `Loneliness <br>
        <div class="subtitle">Poylow, Mandrazo, Barmuda </div>`,
        poster: "img/19.jpg",
        duration:"2:16",
    },
    {
        id: 20,
        songName: `Closer <br>
        <div class="subtitle"> ROY KNOX </div>`,
        poster: "img/20.jpg",
        duration:"3:36",
    },
    {
        id: 21,
        songName: `Thought It Was U <br>
        <div class="subtitle"> JJL </div>`,
        poster: "img/21.jpg",
        duration:"3:05",
    },
]


Array.from(document.getElementsByClassName('songList')).forEach((e,i)=>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})

Array.from(document.getElementsByClassName('queueSong')).forEach((e,i)=>{
    e.getElementsByTagName('img')[0].src = songs[i+16].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i+16].songName;
    e.getElementsByTagName('span')[0].innerHTML = songs[i+16].duration;
    
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




const makeAllBackground=()=>{
    Array.from(document.getElementsByClassName('songList')).forEach((el)=>{
        el.style.background = '#181818';
    })
}

// const makeAllBackgroundss=()=>{
//     Array.from(document.getElementsByClassName('queueSong')).forEach((el)=>{
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
        music.src=`audio/${index}.mp3`;
        underPoster.src=`img/${index}.jpg`;
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
        Array.from(document.getElementsByClassName('songList'))[index-1].style.background = "rgba(105,105,170,0.2)";
        // makeAllBackgroundss();
        // Array.from(document.getElementsByClassName('queueSong'))[index-1].style.background = "rgba(105,105,105,0.3)";
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
        index = Array.from(document.getElementsByClassName('songList')).length + 5;
    }

    music.src=`audio/${index}.mp3`;
    underPoster.src=`img/${index}.jpg`;
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
    Array.from(document.getElementsByClassName('songList'))[index-1].style.background = "rgba(105,105,170,0.2)";

    makeAllPlays();
    el.target.classList.remove("fa-circle-play");
    el.target.classList.add("fa-circle-pause");
});


next.addEventListener('click',()=>{
    index++;

    if (index > Array.from(document.getElementsByClassName('songList')).length + 5){
        index = 1;
    }

    music.src=`audio/${index}.mp3`;
    underPoster.src=`img/${index}.jpg`;
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
    Array.from(document.getElementsByClassName('songList'))[index-1].style.background = "rgba(105,105,170,0.2)";

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






// -----------------------I am trying to make it as a function----------------------------------


window.addEventListener("load",()=>{
    loadMusic(index);
});

function loadMusic(index){
    music.src=`audio/${index}.mp3`;
    underPoster.src=`img/${index}.jpg`;
    music.play();

    let songTitle = songs.filter((ele)=>{
        return ele.id==index;
    });

    songTitle.forEach(elez =>{
        let {songName}=elez;
        bottomHeading.innerHTML=songName;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songList'))[index-1].style.background = "rgba(105,105,170,0.2)";
}


function nextMusic(){
    index++;

    if (index > Array.from(document.getElementsByClassName('songList')).length + 5){
        index = 1;
    }

    music.src=`audio/${index}.mp3`;
    underPoster.src=`img/${index}.jpg`;
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
    Array.from(document.getElementsByClassName('songList'))[index-1].style.background = "rgba(105,105,170,0.2)";

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

const popSongs=document.querySelector(".Popular-songs");

popSongs.addEventListener("click",()=>{
    musicList.classList.remove("show");
});






let searchForm = document.querySelector(".search");

document.querySelector("#s-btn").onclick = () =>{
    searchForm.classList.toggle('active');
}

// const ulTag =wrapper.querySelector("ul");

// for (let i=8; i<songs.length;i++){
//     let liTag = `<li class="queueSong"> 
//                     <i class="material-icons md-17 md-dark">music_note</i>
//                     <img src="${songs[i].poster.src}.jpg" alt="">
//                     <i class="fa-sharp playlistPlay fa-solid fa-play" style="color: #fff;" id="1"></i>
//                     <h5>${songs[i].songName} <br>
//                         <div class="subtitle"></div>
//                     </h5>
//                     <span id="audio-duration">4:08</span>
//                 </li>`;
//     ulTag.insertAdjacentHTML("beforeend",liTag);

//     let liAudioduration = ulTag.querySelector(`#${songs[i].src}`);

//     music.addEventListener("loadeddata",()=>{

//         let audioDuration = music.duration;
//         let totalMin= Math.floor(audioDuration / 60);
//         let totalSec= Math.floor(audioDuration % 60);
//         if (totalSec < 10){
//             totalSec = `0${totalSec}`;
//         }
//         liAudioduration.innerText=`${totalMin}:${totalSec}`;

//     });
// }
