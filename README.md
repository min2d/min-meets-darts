# min-meets-darts

electronアプリです。パッケージングはSerialPort周りがうまくいかなかったのでやめました。

## 動作環境
nodejs v8.9.4  
html canvasが動作する端末  

## 使い方

```
npm install
npm start
```

## 注意
このアプリケーションはシリアル通信を行います。  
起動時、Arduino Unoが接続されていた場合に通信を行います。  
Unoが2台以上接続されている場合はリストの上にくる方に接続されます。  
(シリアル通信用ライブラリmin2d/node-arduino-firmata#unoの仕様です)  
  
接続先が見つからなかった場合は何もしません。  
  
接続先のarduinoはfirmataのルールで信号を受信します。  
詳細は付属のスケッチを参照ください。  


## 説明
半分ぐらいTypescriptで書いています。具体的には  
electronのview部分:Typescript  
electronのindex.js: js  
です。  
  
リポジトリにはトランスパイル済みのものが含まれます。  
アプリを動かすためだけなら特にwebpack等を実行する必要はありません。  
  
webpack.jsonが二種類ありますが、  
これはライブラリとそれ以外で分けてトランスパイルと統合を行っているためです。
