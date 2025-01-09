var song = document.getElementById("song");
var play = document.getElementById("play");

play.onclick = function() {
  if (song.paused) {
    song.play();
    play.src = "pause.png";
  }
  else {
    song.pause();
    play.src = "play.png";
  }
};

var music = [
  "Song2.mp3",
  "Song.mp3",
  "Song3.mp3",
  "Song4.mp3"
];

var prev=document.getElementById("prev");
var next=document.getElementById("next");
var i = 0;

next.onclick= function() {
  document.getElementById("song").src = music[i];
  document.getElementById("song").play();
  i++;
  if (i == 4){
    i = 0;
  }
}

prev.onclick= function() {
  document.getElementById("song").src = music[i];
  document.getElementById("song").play();
  i--;
  if (i == -1){
    i = 3;
  }
}  

//Additional Activity
var stop = document.getElementById("stop");

stop.onclick = function () {
    song.pause();
    song.currentTime = 0; // Reset to the beginning
    play.src = "play.png"; // Reset play button icon
};
