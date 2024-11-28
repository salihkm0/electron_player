// document.addEventListener('DOMContentLoaded', () => {
//     const videoElement = document.getElementById('ad-video');
  
//     // Function to set a random video
//     async function setRandomVideo() {
//       try {
//         // Get list of video files from the main process via contextBridge
//         const videoFiles = await window.electronAPI.invokeGetVideoFiles();
        
//         if (videoFiles.length === 0) {
//           console.error('No video files found');
//           return;
//         }
  
//         // Select a random video
//         const randomVideo = videoFiles[Math.floor(Math.random() * videoFiles.length)];
  
//         // Use the path module from electronAPI to join paths
//         const videoFolder = window.electronAPI.path.join(__dirname, 'public', 'ads-videos', randomVideo);
//         videoElement.src = `file://${videoFolder}`;
  
//         // Reload and play the video
//         videoElement.load();
//         videoElement.play();
  
//         // Loop the video by setting a new random video when it ends
//         videoElement.onended = () => {
//           setRandomVideo();
//         };
//       } catch (err) {
//         console.error('Error selecting video:', err);
//       }
//     }
  
//     // Start playing a random video
//     setRandomVideo();
// });


const videoPlayer = document.getElementById('video-player');
const videoFolder = '/home/project123/Desktop/pi_server/ads-videos'; 

function playRandomVideo() {
    const fs = require('fs');
    const path = require('path');

    fs.readdir(videoFolder, (err, files) => {
        if (err) {
            console.error('Error reading video folder:', err);
            return;
        }

        const randomIndex = Math.floor(Math.random() * files.length);
        const randomVideo = files[randomIndex];
        const videoPath = path.join(videoFolder, randomVideo);

        videoPlayer.src = `file://${videoPath}`;
        videoPlayer.play();
    });
}

playRandomVideo();