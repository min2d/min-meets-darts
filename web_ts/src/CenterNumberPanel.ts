import Config from "./Config";

export default class CenterNumberPanel extends Phaser.Graphics {
    text: Phaser.Text;
    constructor(game: Phaser.Game, x: number, y: number){
        super(game,x,y);
        
        this.text = game.make.text(0,0,'',{fontSize:400*Config.ZOOM, fill:"#1d043f", font:"ProstOne"});
        this.text.anchor.setTo(0.5,0.5);
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
}