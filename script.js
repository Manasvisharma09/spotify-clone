console.log("Welcome to Spotify");
let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName:"Warriyo - Mortals [NCS Release]",filepath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"tum ho",filepath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"raabta",filepath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"aayat",filepath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"pheli nazar",filepath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"still falling for you",filepath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"bad guy",filepath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"heart want what it wants",filepath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"wildest dreams",filepath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"rozana",filepath:"songs/1.mp3",coverPath:"covers/1.jpg"},

]

songItems.forEach((element, i)=>{
  
  element.getElementsByTagName("img")[0].src=songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})



masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
      audioElement.play();
      masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');
      gif.style.opacity=1;
    } else {
      audioElement.pause();
      masterPlay.classList.remove('fa-pause-circle');
      masterPlay.classList.add('fa-play-circle');
      gif.style.opacity=0;
    }
  });
audioElement.addEventListener('timeupdate', ()=>{
   
    progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})


const makeAllPlays = () => {
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
  });
};

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
  element.addEventListener('click', (e) => {
    makeAllPlays(); // Reset all elements before updating the clicked one
    const songIndexndex = parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();

    // Assuming masterPlay is a valid variable referring to the master play button
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
  });
});

document.getElementById('next').addEventListener('click',()=>{
  if(songIndex>=9){
    songIndex =0;
  }
  else{
    songIndex += 1;
  }
  audioElement.src = `songs/${songIndex+1}.mp3`;
  masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();

    
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click',()=>{
  if(songIndex<=0){
    songIndex =0;
  }
  else{
    songIndex -= 1;
  }
  audioElement.src = `songs/${songIndex+1}.mp3`;
  masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();

    
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})









