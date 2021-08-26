console.log('load preload script');

const electron = require('electron');

electron.contextBridge.exposeInMainWorld(
  'dojinreader', {
    quit: ()=>{
      electron.ipcRenderer.invoke('electron-app-close');
    },
    minimize: ()=>{
      electron.ipcRenderer.invoke('electron-app-minimize');
    },
    getLocalDojinList: async ()=>{
      return await electron.ipcRenderer.invoke('electron-app-getlocaldojinlist');
    },
    // localFile: (method, path, data = void 0)=>{
    //   electron.ipcRenderer.invoke('electron-app-localfile', {method: method, path: path, data: data});
    // },
  }
);
