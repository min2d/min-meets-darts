/// <reference path="../node_modules/phaser-ce/typescript/phaser.d.ts" />
/// <reference path="../node_modules/electron/electron.d.ts" />
// declare var Window: {
//     [key: string]: any; // missing index defintion
//     prototype: Window;
//     new(): Window;
// }


  // let electron = (window as any)['require']("electron");//無理やり解決した
  // let ipcRenderer = electron.ipcRenderer;
  // console.log("ipc renderer", ipcRenderer);
  // ipcRenderer.send('message', 'ping');



import Game from './src/Game';



window.onload = () => {
  var game = new Game();
};
