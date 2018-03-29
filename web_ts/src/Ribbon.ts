export default class Ribbon extends Phaser.Graphics {
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
        this.drawLayerdShape(color1,color2)
        game.add.existing(this);
    }

    drawRibbon(dia: number, col: number){
        this.beginFill(col);
        this.moveTo(this.xBase*4*dia,this.yBase*1*dia);
        this.lineTo(this.xBase*3*dia,0);
        this.lineTo(this.xBase*4*dia,this.yBase*-1*dia);
        this.lineTo(this.xBase*-2.6*dia,this.yBase*-1*dia);
        this.lineTo(this.xBase*-3.6*dia,0);
        this.lineTo(this.xBase*-2.6*dia,this.yBase*1*dia);
        this.lineTo(this.xBase*4*dia,this.yBase*1*dia);
        this.endFill();
        
    }

    drawLayerdShape(color1: number,color2: number){
        this.drawRibbon(6,color1);
        this.drawRibbon(5.8,color2);
        this.drawRibbon(5.5,color1);
    }

    startAppeal(){
        var color1 = this.color;
        var color2 = 0xFFFFFF;
        this.drawLayerdShape(color1,color2);
    }
    
    stopAppeal(){
        var color1 = 0xcccccc;
        var color2 = 0xFFFFFF;
        this.drawLayerdShape(color1,color2);
    }
}