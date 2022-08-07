
let songIndex=0;
let audio=new Audio("/songs/1.mp3");
let powerplay=document.getElementById("powerplay");
let gif=document.getElementById("pp");
let next=document.getElementById("next");
let previous=document.getElementById("previous");
let myProgressBar=document.getElementById("songprogress");
let masterSongName=document.getElementById("masterSongName");
 let songItems=Array.from(document.getElementsByClassName("songs"));

 let songs=[
     {songName:"Ghoomar-Padmavat" ,filePath:"/songs/1.mp3",coverPath:"/covers/1.jpg" },
     {songName:"Ik Vaari Aa - Raabta (Arijit Singh)" ,filePath:"/songs/2.mp3",coverPath:"/covers/2.jpg" },
     {songName:"Gangland - Mankirt Aulakh (DJ Remix)" ,filePath:"/songs/3.mp3",coverPath:"/covers/3.jpg" },
     {songName:"Naina Da Kya Kasoor - Unplugged" ,filePath:"/songs/4.mp3",coverPath:"/covers/4.jpg" },
     {songName:"Phir Le Aya Dil - Arijit Singh" ,filePath:"/songs/5.mp3",coverPath:"/covers/5.jpg" },
     {songName:"Raat Di Gedi - Diljit Dosanjh" ,filePath:"/songs/6.mp3",coverPath:"/covers/6.jpg" },
     {songName:"Rang Gora Akhil" ,filePath:"/songs/7.mp3",coverPath:"/covers/7.jpg" },
     {songName:"Ranjhana - Diljit Dosanjh" ,filePath:"/songs/8.mp3",coverPath:"/covers/8.jpg" },
     {songName:"Sharry Maan - 3 Peg" ,filePath:"/songs/9.mp3",coverPath:"/covers/9.jpg" },
     {songName:"Yaarr Ni Milyaa - Hardy Sandhu" ,filePath:"/songs/10.mp3",coverPath:"/covers/10.jpg"},
 ]
 songItems.forEach((element,i)=>{
     element.getElementsByTagName("img")[0].src=songs[i].coverPath;
     element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
 })

powerplay.addEventListener('click',()=>{
    if(audio.paused||audio.currentTime<=0){
        audio.play();
        powerplay.classList.remove('bx-play-circle');
        powerplay.classList.add('bx-pause-circle');
        gif.style.opacity=1;
    }
   else {
    audio.pause();
    powerplay.classList.remove('bx-pause-circle');
    powerplay.classList.add('bx-play-circle');
    gif.style.opacity=0;
   }
})
audio.addEventListener('timeupdate',()=>{
     progress=parseInt((audio.currentTime/audio.duration)*100);
     myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audio.currentTime =audio.duration*myProgressBar.value/100; 
})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove('bx-pause-circle');
        element.classList.add('bx-play-circle');
    })
}
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('bx-play-circle');
        e.target.classList.add('bx-pause-circle');
         audio.src=`songs/${songIndex+1}.mp3`;
         masterSongName.innerText=songs[songIndex].songName;
         audio.currentTime=0;
         audio.play();
         gif.style.opacity=1;
         powerplay.classList.remove('bx-play-circle');
         powerplay.classList.add('bx-pause-circle');

    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else {
        songIndex+=1;
    }
    audio.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audio.currentTime=0;
    audio.play();
    gif.style.opacity=1;
    powerplay.classList.remove('bx-play-circle');
    powerplay.classList.add('bx-pause-circle');
})    
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else {
        songIndex-=1;
    }
    audio.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audio.currentTime=0;
    audio.play();
    gif.style.opacity=1;
    powerplay.classList.remove('bx-play-circle');
    powerplay.classList.add('bx-pause-circle');
})    