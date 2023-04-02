import Player from '@vimeo/player';

const iframe = document.getElementById('vimeo-player');
console.log(iframe);

const player = new Player(iframe);

player.on('timeupdate', (data) => {
    localStorage.setItem('videoplayer-current-time', data.seconds);
    return;
});

const savedTime = localStorage.getItem('videoplayer-current-time');

const savedTimeNum = Number.savedTime;
console.log(savedTimeNum)

console.log(savedTime)

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






