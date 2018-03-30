/// <reference path="../node_modules/phaser-ce/typescript/phaser.d.ts" />
/// <reference path="../node_modules/electron/electron.d.ts" />

let electron = (window as any)['require']("electron");//無理やり解決した
let ipcRenderer = electron.ipcRenderer;
console.log("ipc renderer", ipcRenderer);
ipcRenderer.send('message', {eventType: 'DMX', group:1, color:[255,255,255]});
ipcRenderer.send('message', {eventType: 'LargeButton', lighting: true});
//↑照明系はこんな感じで！(参考用)

import Game from './src/Game';



window.onload = () => {
  var game = new Game();
};
