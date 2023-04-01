import Player from '@vimeo/player';

const iframe = document.getElementById('vimeo-player');
console.log(iframe);

const player = new Player(iframe);

player.on('timeupdate', (data) => {
    localStorage.setItem('videoplayer-current-time', 'data.seconds')
});






