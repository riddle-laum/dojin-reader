
const electron = require('electron');
const fs = require('fs');

const LOCAL_ROOT = 'test_data';
const APP_ROOT = __dirname.toLowerCase().replace(/\\/g,'/').replace(/\/src(\/|)$/, '');

electron.ipcMain.handle(
  'electron-app-close',
  event=>globalThis.mainWindow.close()
);
electron.ipcMain.handle(
  'electron-app-minimize',
  event=>globalThis.mainWindow.minimize()
);
electron.ipcMain.handle(
  'electron-app-getlocaldojinlist',
  event=>{
    const pathlist = fs.readdirSync(`${APP_ROOT}/${LOCAL_ROOT}/`).filter(name=>/\.books\.json$/.test(name));
    const info = [];
    for(const path of pathlist) info.push(JSON.parse(fs.readFileSync(`${APP_ROOT}/${LOCAL_ROOT}/${path}`, {encoding: 'utf-8'})));
    return info;
  }
);


// electron.ipcMain.handle(
//   'electron-app-localfile',
//   (event, msg)=>{
//     // exist
//     const stat = fs.statSync(msg.path);
//     const isExist = fs.existsSync(msg.path);
//     if(msg.method == 'exist') return isExist;
//     if(msg.method != 'write' && !isExist) return null;
//     // process
//     switch(msg.method){
//       case 'read':
//         return fs.writeFileSync(path, data);
//       break;
//       case 'child':
//       break;
//       case 'write':
//       break;
//     }
//   }
// );
