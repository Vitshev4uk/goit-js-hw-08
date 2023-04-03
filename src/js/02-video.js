import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const iframe = document.getElementById('vimeo-player');
console.log(iframe);

const player = new Player(iframe);

const savedCurrentTime = (event) => {
    localStorage.setItem('videoplayer-current-time', event.seconds)
};

player.on('timeupdate', throttle(savedCurrentTime, 1000));

const savedTime = localStorage.getItem('videoplayer-current-time');


const savedTimeNum = Number.savedTime;
console.log(savedTimeNum)

player.setCurrentTime(savedTime).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});






