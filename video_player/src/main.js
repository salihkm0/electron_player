// const { app, BrowserWindow, ipcMain } = require('electron');
// const path = require('path');
// const fs = require('fs');
// const { promisify } = require('util');

// // Promisify fs.readdir to use async/await
// const readdir = promisify(fs.readdir);

// // Create the Electron window
// function createWindow() {
//     const win = new BrowserWindow({
//       width: 800,
//       height: 600,
//       webPreferences: {
//         preload: path.join(__dirname, 'preloader.js'),
//         nodeIntegration: false,
//         contextIsolation: true,
//       },
//     });
  
//     win.loadFile(path.join(__dirname, 'public', 'index.html'));
  
//     // Register IPC handler for 'get-video-files'
//     ipcMain.handle('get-video-files', async () => {
//       try {
//         const videoFolder = path.join(__dirname, 'public', 'ads-videos');
//         const files = await readdir(videoFolder);
//         const videoFiles = files.filter(file => file.endsWith('.mp4'));
//         return videoFiles;
//       } catch (error) {
//         console.error('Error reading video files:', error);
//         return [];
//       }
//     });
//   }

// app.whenReady().then(createWindow);


// const path = require('path');

// // Use an absolute path for preloader.js
// const preloadPath = path.join(__dirname, 'preloader.js');

// // Create the Electron window
// function createWindow() {
//     const win = new BrowserWindow({
//         width: 800,
//         height: 600,
//         webPreferences: {
//             preload: preloadPath,  // Ensure the correct preload path
//             nodeIntegration: false,
//             contextIsolation: true,
//         },
//     });

//     win.loadFile(path.join(__dirname, 'public', 'index.html'));
  
//     // Register IPC handler for 'get-video-files'
//     ipcMain.handle('get-video-files', async () => {
//       try {
//         const videoFolder = path.join(__dirname, 'public', 'ads-videos');
//         const files = await readdir(videoFolder);
//         const videoFiles = files.filter(file => file.endsWith('.mp4'));
//         return videoFiles;
//       } catch (error) {
//         console.error('Error reading video files:', error);
//         return [];
//       }
//     });
// }


const { app, BrowserWindow } = require('electron');

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
        fullscreen: true, // Set fullscreen mode
    });

    win.loadFile('index.html');
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});