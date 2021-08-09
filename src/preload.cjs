console.log('load preload script');

const electron = require('electron');

electron.contextBridge.exposeInMainWorld(
  'dojinreader', {
    quit: ()=>{
      electron.ipcRenderer.invoke('electron-app-close');
    },
    minimize: ()=>{
      electron.ipcRenderer.invoke('electron-app-minimize');
    }
  }
);
