// const myVideo = document.getElementById('myVideo');
//   const btn = document.getElementById('audioToggle');

//   btn.addEventListener('click', function() {
//     if (myVideo.muted) {
//       myVideo.muted = false;
//       myVideo.volume = 0.4; // Safe background volume level
//       btn.innerText = "Mute Audio";
//     } else {
//       myVideo.muted = true;
//       btn.innerText = "Unmute Background";
//     }
//   });

const video = document.getElementById('myVideo');
  video.playbackRate = 0.5;
  video.volume = 0.2; 