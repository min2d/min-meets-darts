export default class TurnablePanel extends Phaser.Group {
  activeImg: Phaser.Sprite;
  inactiveImg: Phaser.Sprite;
   // 画像はプリローダで読み込んだときの文字列を指定
  constructor(game: Phaser.Game, x: number, y: number,
              activeImgName: string, inactiveImgName: string){
                super(game);
      //スプライト取得、グローバル置き
      
      this.activeImg = game.add.sprite(x, y, activeImgName);
      this.activeImg.anchor.setTo(0.5, 0.5);
      this.inactiveImg = game.add.sprite(x, y, inactiveImgName);
      this.inactiveImg.anchor.setTo(0.5, 0.5);
      game.add.group(this);
      this.addChild(this.activeImg);
      this.addChild(this.inactiveImg);
      this.disactivate();
  }
  activate(){
    this.activeImg.visible = true;
    this.inactiveImg.visible = false;
  }
  disactivate(){
    this.activeImg.visible = false;
    this.inactiveImg.visible = true;
  }

}
