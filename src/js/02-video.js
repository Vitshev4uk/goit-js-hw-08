import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
console.log(iframe);

const player = new Player(iframe);

const savedCurrentTime = (event) => {
    localStorage.setItem('videoplayer-current-time', event.seconds)
};
player.on('timeupdate', throttle(savedCurrentTime, 1000));

const savedTime = localStorage.getItem('videoplayer-current-time');

// const savedTimeNum = Number.savedTime;
// console.log(savedTimeNum)

if (savedTime) {
    player.setCurrentTime(savedTime || 0);
};








