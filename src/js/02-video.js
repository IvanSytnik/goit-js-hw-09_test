import Player from '@vimeo/player';
let throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Player(iframe);


player.on('timeupdate',
  throttle(() => {
    player.getCurrentTime().then(data => localStorage.setItem("videoplayer-current-time", data))
  }, 1000)
);

 let timePlayer = localStorage.getItem("videoplayer-current-time");

 console.log(`Загруженное време с локального хранилища:${timePlayer}`);

player.setCurrentTime(timePlayer).then(function() {
     // seconds = the actual time that the player seeked to
 });

