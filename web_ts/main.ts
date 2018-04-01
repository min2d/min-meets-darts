/// <reference path="../node_modules/phaser-ce/typescript/phaser.d.ts" />
/// <reference path="../node_modules/electron/electron.d.ts" />

let electron = (window as any)['require']("electron");//無理やり解決した
let ipcRenderer = electron.ipcRenderer;
console.log("ipc renderer", ipcRenderer);

import Game from './src/Game';

window.onload = () => {
  var game = new Game();
  game.setIpcRenderer(ipcRenderer);
};
