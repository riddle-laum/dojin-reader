
const electron = require('electron');

electron.ipcMain.handle(
  'electron-app-close',
  event=>globalThis.mainWindow.close()
);
electron.ipcMain.handle(
  'electron-app-minimize',
  event=>globalThis.mainWindow.minimize()
);
