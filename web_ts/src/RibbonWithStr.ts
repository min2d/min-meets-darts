import Config from "./Config";
import Ribbon from "./Ribbon";
export default class RibbonWithStr extends Phaser.Graphics{
    color: number;
    text: Phaser.Text;
    Ribbon: Ribbon;
    constructor(game: Phaser.Game, x: number, y: number, color:number){
        super(game,x,y);
        this.Ribbon = new Ribbon(game,0,0,color);
        this.text = game.make.text(0, 3.9, '',{fontSize:100,fill:"#FFF", font:"ProstOne"});
        this.text.anchor.setTo(0.5,0.5);
        this.addChild(this.Ribbon);
        this.addChild(this.text);
        
        game.add.existing(this);
    }
    setText(val: string|number){
        if(typeof(val) == 'number'){
            this.text.setText(val.toString());
        }else{
            this.text.setText(val);
        }
    }
    startAppeal(){
        this.Ribbon.startAppeal();
    }
    stopAppeal(){
        this.Ribbon.stopAppeal();
    }
}