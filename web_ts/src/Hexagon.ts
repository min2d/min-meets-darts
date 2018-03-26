export default class Hexagon extends Phaser.Graphics {
    xBase = 10;
    yBase = 13;
    color: number;
    text: Phaser.Text;

    constructor(game: Phaser.Game, x: number, y: number, color:number){
        super(game,x,y);
        
        // draw a shape
        this.color = color;
        var color1 = color;
        var color2 = 0xFFFFFF;
        this.drawHexagon(6,color1);
        this.drawHexagon(5.8,color2);
        this.drawHexagon(5.6,color1);

        this.text = game.make.text(0,this.yBase*0.3,'',{fontSize:70,fill:"#FFF"});
        this.text.anchor.setTo(0.5,0.5);
        this.addChild(this.text);


        game.add.existing(this);
    }

    drawHexagon(dia: number, col:number){
        this.beginFill(col);
        this.moveTo(this.xBase*0.85*dia,this.yBase*-1*dia);
        this.lineTo(this.xBase*1.85*dia, 0);
        this.lineTo(this.xBase*0.85*dia, this.yBase*dia);
        this.lineTo(this.xBase*-0.85*dia, this.yBase*dia);
        this.lineTo(this.xBase*-1.85*dia,0);
        this.lineTo(this.xBase*-0.85*dia,this.yBase*-1*dia);
        this.lineTo(this.xBase*0.85*dia,this.yBase*-1*dia);
        this.endFill();
    }

    startAppeal(){
        var color1 = this.color;
        var color2 = 0xFFFFFF;
        this.drawHexagon(6,color1);
        this.drawHexagon(5.8,color2);
        this.drawHexagon(5.6,color1);

    }
    stopAppeal(){
        var color1 = 0xcccccc;
        var color2 = 0xFFFFFF;
        this.drawHexagon(6,color1);
        this.drawHexagon(5.8,color2);
        this.drawHexagon(5.6,color1);
    }
    setText(str: string){
        this.text.setText(str);
    }
}
