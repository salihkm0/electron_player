// const { contextBridge, ipcRenderer } = require('electron');

// contextBridge.exposeInMainWorld('electronAPI', {
//     invokeGetVideoFiles: () => ipcRenderer.invoke('get-video-files')
// });


// const { contextBridge, ipcRenderer } = require('electron');
// const path = require('path');

// // Expose the necessary APIs to the renderer process
// contextBridge.exposeInMainWorld('electronAPI', {
//   invokeGetVideoFiles: () => ipcRenderer.invoke('get-video-files'),
//   path: path // Expose path module to renderer
// });
