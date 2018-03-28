import Config from "./Config";
import Hexagon from "./Hexagon";
export default class HexagonWithStr extends Phaser.Graphics{
    color: number;
    text: Phaser.Text;
    hexagon: Hexagon;
    constructor(game: Phaser.Game, x: number, y: number, color:number){
        super(game,x,y);
        this.hexagon = new Hexagon(game,0,0,color);
        this.text = game.make.text(0, 3.9, 'tes',{fontSize:140*Config.ZOOM,fill:"#FFF", font:"ProstOne"});
        this.text.anchor.setTo(0.5,0.5);
        this.addChild(this.hexagon);
        this.addChild(this.text);
        
        game.add.existing(this);
    }
    setText(str: string){
        this.text.setText(str);
    }
    startAppeal(){
        this.hexagon.startAppeal();
    }
    stopAppeal(){
        this.hexagon.stopAppeal();
    }
}