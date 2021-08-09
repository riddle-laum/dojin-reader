const electron = require('electron');
const {app, Menu, BrowserWindow} = electron;

let isDebug = process.argv.indexOf('--debug') != -1 ? true : false;

globalThis.mainWindow = null;
app.on('ready', ()=>{
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 1800,
    frame: false,
    webPreferences: {
      devTools: isDebug ? true : false,
      nodeIntegration: false,
      preload: `${__dirname}\\preload.cjs`,
      contextIsolation: true
    },
  });
  mainWindow.loadURL(`file://${__dirname}/renderer/application.html`);

  if(isDebug) // if arguments has "--debug", open devtool
    mainWindow.webContents.openDevTools();

  mainWindow.on('closed', ()=>{
    mainWindow = null;
  });
});

// ref: https://qiita.com/umamichi/items/6ce4f46c1458e89c4cfc

// menu
Menu.setApplicationMenu(Menu.buildFromTemplate(require('./menu.cjs').template));

// ref: https://qiita.com/ferretdayo/items/bcbbf8246cdfa8d2ee2a

// load ipc handler
require('./ipcMain.cjs');
