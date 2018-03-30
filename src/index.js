const electron = require('electron')
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')
const ArduinoFirmata = require('arduino-firmata');
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow;
var arduino;


function createWindow () {
  // Create the browser window.
  // mainWindow = new BrowserWindow({width: 800, height: 600})
  mainWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
    //transparent: true,    // ウィンドウの背景を透過
    frame: false,     // 枠の無いウィンドウ
    resizable: true
  });

  // and load the index.html of the app.
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // DevToolsを開く
  mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })

  arduino = new ArduinoFirmata().connect();
  arduino.on('connect', function(){
    console.log("arduino:");
    console.log(arduino);
    // setInterval(function(){
    //   arduino.sysex(0x01, null ,function(){});
    // },1000);
  });

}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})


electron.ipcMain.on('message', function (event, arg) {
  //受信(シリアル発火用)
  // event.sender.send('asynchronous-reply', 'pong') //返し
  console.log(arduino);
  if(arduino.serialport){
    console.log('arduino not found');
  }else{
    switch(arg.eventType){
      case 'DMX':
        sendDmxEvent(arg.group,arg.color[0],arg.color[1],arg.color[2]);
        break;
      case 'LargeButton':
        if(arg.lighting){
          turnOnlargeButton();
        }else{
          turnOfflargeButton();
        }
        break;
      case 'UpButton':
        break;
      //これ以外のボタン使わないから後でかくぅ・・・
    }
  }
})

function sysExCallback(){}

function sendDmxEvent(group,r,g,b){
  //255以上は切る
  var bytesR = r;
  var bytesG = g;
  var bytesB = b;
  if(r>255) bytesR=255;
  if(g>255) bytesG=255;
  if(b>255) bytesB=255;
  var arr = [
    group,
    bytesR >> 1,
    (bytesR & 0b10000000) >> 7,
    bytesG >> 1,
    (bytesG & 0b10000000) >> 7,
    bytesB >> 1,
    (bytesB & 0b10000000) >> 7,
  ]
  console.log(arr);
  arduino.sysex(0x01, arr ,sysExCallback);
}

//適当な色を一回送信する ※TSに書く時の参考用
function sendRandomColor(){
  var r =  Math.floor( Math.random() * 256 );
  var g =  Math.floor( Math.random() * 256 );
  var b =  Math.floor( Math.random() * 256 );
  sendDmxEvent(1,r,g,b)
}

function turnOnlargeButton(){
  arduino.sysex(0x02,[1],sysExCallback);
}
function turnOffLargeButton(){
  arduino.sysex(0x02,[0],sysExCallback);
}
