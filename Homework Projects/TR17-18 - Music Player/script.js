var play = document.getElementById("play");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var song = document.getElementById("song");
var genre = document.getElementById("genre");

var popSongs = ["pop1.mp3", "pop2.mp3"];
var classicalSongs = ["classical1.mp3", "classical2.mp3"];
var jazzSongs = ["jazz1.mp3", "jazz2.mp3"];
var currentGenre = popSongs;
var currentIndex = 0;

function updateSongList() {
    if (genre.value === "classical") {
        currentGenre = classicalSongs;
    } else if (genre.value === "jazz") {
        currentGenre = jazzSongs;
    } else {
        currentGenre = popSongs;
    }
    currentIndex = 0;
    song.src = currentGenre[currentIndex];
}

genre.addEventListener("change", updateSongList);

play.addEventListener("click", function () {
    if (song.paused) {
        song.play();
        play.src = "pause.png";
    } else {
        song.pause();
        play.src = "play.png";
    }
});

next.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % currentGenre.length;
    song.src = currentGenre[currentIndex];
    song.play();
    play.src = "pause.png";
});

prev.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + currentGenre.length) % currentGenre.length;
    song.src = currentGenre[currentIndex];
    song.play();
    play.src = "pause.png";
});
