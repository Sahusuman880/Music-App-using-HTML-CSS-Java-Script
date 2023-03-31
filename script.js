
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "On My Way", filePath: "songs/1.mp3", coverPath: "img/1.jpg"},
    {songName: "Faded", filePath: "songs/2.mp3", coverPath: "img/2.jpg"},
    {songName: "Hold Me Close", filePath: "songs/3.mp3", coverPath: "img/3.jpg"},
    {songName: "Warrior", filePath: "songs/4.mp3", coverPath: "img/4.jpg"},
    {songName: "Best BGM", filePath: "songs/5.mp3", coverPath: "img/5.jpg"},
    {songName: "Unstopable", filePath: "songs/6.mp3", coverPath: "img/6.jpg"},
    {songName: "Pal Bhar Theher jao", filePath: "songs/7.mp3", coverPath: "img/7.jpg"},
    {songName: "Suna He teri Dil pe", filePath: "songs/8.mp3", coverPath: "img/8.jpg"},
    {songName: "Dilbar", filePath: "songs/9.mp3", coverPath: "img/9.jpg"},
    {songName: "Duniyaa", filePath: "songs/10.mp3", coverPath: "img/10.jpg"},
    {songName: "Lagdi Lahore di", filePath: "songs/11.mp3", coverPath: "img/11.jpg"},
    {songName: "O akhan naal kill kardi", filePath: "songs/12.mp3", coverPath: "img/12.jpg"},
    {songName: "Baarishein yun achanak hui", filePath: "songs/13.mp3", coverPath: "img/13.jpg"},
    {songName: "Vaaste", filePath: "songs/14.mp3", coverPath: "img/14.jpg"},
    {songName: "Lut Gaye", filePath: "songs/14.mp3", coverPath: "img/15.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=14){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
