// web js file
function goToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

    document.addEventListener('DOMContentLoaded', function () {

    const audioPlayer = document.getElementById('audioPlayer');
    const songListItems = document.querySelectorAll('.songItem img');
    const masterSongName = document.getElementById('masterSongName');

    songListItems.forEach((item) => {
        item.addEventListener('click', () => {

        const songSrc = item.getAttribute('data-src');
        audioPlayer.src = songSrc;
        audioPlayer.play();

    masterSongName.textContent = `Now playing: ${item.alt}`;
        });
    });
});
function share() {
        alert("Thank You Very Much");
}

function refreshPage() {
    const audioPlayer = document.getElementById('audioPlayer');
    const currentTime = audioPlayer.currentTime;


location.reload();

document.addEventListener('DOMContentLoaded', function () {
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.currentTime = currentTime;
    audioPlayer.play();
    });
}
document.addEventListener('DOMContentLoaded', function () {
const audioPlayer = document.getElementById('audioPlayer');
const songListContainer = document.querySelector('.songList div');

const songListItems = document.querySelectorAll('.songItem img');
const originalSongList = Array.from(songListItems);

const masterSongName = document.getElementById('masterSongName');
const searchInput = document.querySelector('.search-bar input');
const searchButton = document.querySelector('.search-bar button');

    songListItems.forEach((item) => {
    item.addEventListener('click', () => {
    const songSrc = item.getAttribute('data-src');
    audioPlayer.src = songSrc;
    audioPlayer.play();
    updateNowPlaying(item.alt);
    });
});

function search() {
const query = searchInput.value.toLowerCase();

const filteredSongs = originalSongList.filter((item) => {
const songTitle = item.alt.toLowerCase();
return songTitle.includes(query);
});

songListContainer.innerHTML = '';

filteredSongs.forEach((item) => {
const newSongItem = document.createElement('div');
newSongItem.classList.add('songItem');
newSongItem.innerHTML = `<img src="${item.src}" alt="${item.alt}" data-src="${item.getAttribute('data-src')}">`;
songListContainer.appendChild(newSongItem);

newSongItem.firstChild.addEventListener('click', () => {
    const songSrc = newSongItem.firstChild.getAttribute('data-src');
    audioPlayer.src = songSrc;
    audioPlayer.play();
    updateNowPlaying(item.alt);
        });
    });
}

searchButton.addEventListener('click', search);
});

function updateNowPlaying(songName) {
const nowPlayingText = document.getElementById('masterSongName');
nowPlayingText.textContent = `Now playing: ${songName}`;
}

function share() {
alert("Thank You Very Much");
}

function refreshPage() {
const audioPlayer = document.getElementById('audioPlayer');
const currentTime = audioPlayer.currentTime;

location.reload();

document.addEventListener('DOMContentLoaded', function () {
const audioPlayer = document.getElementById('audioPlayer');
audioPlayer.currentTime = currentTime;
audioPlayer.play();
});
}
