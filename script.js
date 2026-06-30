// // const myVideo = document.getElementById('myVideo');
// //   const btn = document.getElementById('audioToggle');

// //   btn.addEventListener('click', function() {
// //     if (myVideo.muted) {
// //       myVideo.muted = false;
// //       myVideo.volume = 0.4; // Safe background volume level
// //       btn.innerText = "Mute Audio";
// //     } else {
// //       myVideo.muted = true;
// //       btn.innerText = "Unmute Background";
// //     }
// //   });

// const video = document.getElementById('myVideo');
//   video.playbackRate = 0.5;
//   video.volume = 0.2; 


    // Select both block elements
    const blocks = document.querySelectorAll('.block1, .block2');

    blocks.forEach(block => {
        block.addEventListener('mousemove', (e) => {
            // Get the bounding boundaries of the specific hovered box
            const rect = block.getBoundingClientRect();
            
            // Calculate mouse position relative to the box's top-left corner
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Pass the coordinates directly into the CSS variables
            block.style.setProperty('--mouse-x', `${x}px`);
            block.style.setProperty('--mouse-y', `${y}px`);
        });
    });
