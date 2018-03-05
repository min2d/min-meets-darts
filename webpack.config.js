const path = require("path");
module.exports = {
  mode: 'production',
  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: './web_ts/main.ts',
  // ファイルの出力設定
  output: {
    //  出力ファイルのディレクトリ名
    path: `${__dirname}/src/js`,
    // 出力ファイル名
    filename: 'bundle.js'
  },
  target: "node",
  module: {
    rules: [
      {
        // 拡張子 .ts の場合
        test: /\.ts$/,
        // TypeScript をコンパイルする
        use: 'awesome-typescript-loader'
      },
      // ソースマップファイルの処理
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ]
  },
  // import 文で .ts ファイルを解決するため
  resolve: {
    extensions: [
      '.ts','.js'
    ],
    alias: {
    pixi: path.join(__dirname, 'node_modules/phaser-ce/build/custom/pixi.js'),
    phaser: path.join(__dirname, 'node_modules/phaser-ce/build/custom/phaser-split.js'),
    p2: path.join(__dirname, 'node_modules/phaser-ce/build/custom/p2.js'),
    assets: path.join(__dirname, 'assets/')
}
  },
  node: {
    __dirname: false,
    // fs: 'empty'//fsが無いって怒られるのでググったらこうしろと書いてあったがfsが空になっちゃうのでダメ
  },
  // ソースマップを有効に
  devtool: 'source-map'
};
