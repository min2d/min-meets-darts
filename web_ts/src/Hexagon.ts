import Config from "./Config";

export default class Hexagon extends Phaser.Graphics {
    xBase = 10;
    yBase = 13;
    color: number;

    constructor(game: Phaser.Game, x: number, y: number, color:number){
        super(game,x,y);
        
        // draw a shape
        this.color = color;
        var color1 = color;
        var color2 = 0xFFFFFF;
        this.drawHexagon(6,color1);
        this.drawHexagon(5.8,color2);
        this.drawHexagon(5.6,color1);
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

}
