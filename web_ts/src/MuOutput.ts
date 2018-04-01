export default class MuOutput extends Phaser.Group{
    ipcRenderer: any;
    dmxColors: number[][] = [[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]];

    constructor(game: Phaser.Game){
        super(game);
    }

    setIpcRenderer(ipcRenderer: any){
        this.ipcRenderer = ipcRenderer;
    }

    flashLargeButton(){
        if(this.ipcRenderer == {})return;
        this.ipcRenderer.send('message', {eventType: 'LargeButton', lighting: false});     
        this.ipcRenderer.send('message', {eventType: 'LargeButton', lighting: true});
        this.ipcRenderer.send('message', {eventType: 'LargeButton', lighting: false});
    }

    flashDmx(group:number,colorNum:number){
        this.setDmx(group,0x000000);
        this.setDmx(group,colorNum);
        this.game.time.events.add(Phaser.Timer.SECOND * 0.2, function(){this.setDmx(group,0x000000)}, this); //このthis何だろう
    }

    numberToRGB(num: number){
        var code = num.toString(16);
        var red   = parseInt(code.substring(0,2), 16);
        var green = parseInt(code.substring(2,4), 16);
        var blue  = parseInt(code.substring(4,6), 16);
        return [red,green,blue];
    } 

    setDmx(group:number, colorNum: number){
        var color = this.numberToRGB(colorNum);
        this.dmxColors[group] = color;
        this.ipcRenderer.send('message', {eventType: 'DMX', group: group, color: color});
    }
}