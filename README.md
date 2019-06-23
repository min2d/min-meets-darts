# min-meets-darts

electronアプリです。パッケージングはSerialPort周りがうまくいかなかったのでやめました。
キー配置は市販のdartslive(キーボードとして認識されるもの)に対応しています。

## 動作環境
nodejs v8.9.4  
html canvasが動作する端末  

## 使い方

```
npm install
npm start
```

## npm startに失敗(cannot locate modulesと言われる場合)
npm_modulesの該当モジュールディレクトリを削除してnpm installをやり直すと直るかもしれません・・・
node-arduino-firmataは参照先を変更したので問題が無くても入れなおしたほうがいいかもしれません


## npm startに失敗(dllが無いと言われる場合)
electronのリビルドが必要です。  
`./node_modules/.bin/electron-rebuild`  
実行できない場合は下記手順で実行してください  
* powershellを管理者権限で開き、 `npm install --global --production windows-build-tools`
* 通常権限で`npm config set msvs_version 2017 --global`
(2017は今後windows-build-toolsでインストールされるバージョンによって変わる可能性があります)
* コマンドラインを開き直す
* `./node_modules/.bin/electron-rebuild` 再実行

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
