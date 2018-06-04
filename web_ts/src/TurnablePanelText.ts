import TurnablePanel from "./TurnablePanel";

export default class TurnablePanelText extends TurnablePanel{
    text: Phaser.Text;
    fontSize = 100;
    constructor(game: Phaser.Game, x: number, y: number,
                activeImgName: string, inactiveImgName: string){
        super(game,x,y,activeImgName,inactiveImgName);
        this.text = game.add.text(x, y, '',{fontSize: this.fontSize, fill:"#FFF", font:"ProstOne"});
        this.text.stroke = '#000000'; //ふち
        this.text.strokeThickness = 6;//ふちのふとさ
        this.text.anchor.setTo(0.5,0.5);
        this.addChild(this.text);
    }
    setText(val: string|number){
        //遷移を追加する場合は同じ文字ならアクションさせないように・・・
        if(typeof(val) == 'number'){
            this.text.setText(val.toString());
        }else{
            this.text.setText(val);
        }
    }
    setFontSize(size: number){
        this.text.fontSize = size;
    }
    //中央から文字位置をずらす
    setOffset(){
        //offsetがTextに存在するのでそれを使えるかもしれない
    }
    //文字色（単色しかいまのところ無い。#6桁・3桁もしくはcssと同等の単語指定）
    setFill(fill:string){
        this.text.fill= fill;
    }
}