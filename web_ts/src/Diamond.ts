export default class Diamond extends Phaser.Graphics {
    xBase = 30;
    yBase = 39;

    constructor(game: Phaser.Game, x: number, y: number){
        super(game,x,y);
        
        // draw a shape
        var color1 = 0xd46a6a;
        var color2 = 0xFFFFFF;
        this.drawDiamond(6,color1);
        this.drawDiamond(5.8,color2);
        this.drawDiamond(5.6,color1);
        this.drawDiamond(4.3,color2);
        this.drawDiamond(4.2,color1);
        this.drawDiamond(4.0,color2);

        game.add.existing(this);
    }

    drawDiamond(dia: number, col:number){
        this.beginFill(col);
        this.moveTo(0,-1*this.yBase*dia);
        this.lineTo(this.xBase*dia, 0);
        this.lineTo(0, this.yBase*dia);
        this.lineTo(-1*this.xBase*dia, 0);
        this.lineTo(0, -1*this.yBase*dia);
        this.endFill();
    }
}
