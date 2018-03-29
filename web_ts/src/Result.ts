import MuBase from "./MuBase";
import HexagonWithStr from "./HexagonWithStr";
import Config from "./Config";
import MuStatus from "./MuStatus";

export default class Result extends MuBase {

  
  omoteHexagon: HexagonWithStr;
  uraHexagon: HexagonWithStr;
  
  create(){
    console.log('Result created');		
    super.create();

    var styleTitleText = {align: "center",boundsAlignH: "center", boundsAlignV: "middle", font:150*Config.ZOOM + "px ProstOne"};
    var titleText = this.add.text(0, 0, "Result", styleTitleText);
    titleText.setTextBounds(0, this.world.height*0.2, this.world.width, this.world.height*0.2);
    

    this.omoteHexagon = new HexagonWithStr(this.game,this.world.width* 0.37,this.world.height*0.67,MuStatus.omoteColor);
    this.omoteHexagon.scale = new PIXI.Point(Config.ZOOM*2, Config.ZOOM*2);
    this.omoteHexagon.setText(MuStatus.scoreOmote);
    this.uraHexagon = new HexagonWithStr(this.game,this.world.width* 0.63,this.world.height*0.67,MuStatus.uraColor);
    this.uraHexagon.setText(MuStatus.scoreUra);
    this.uraHexagon.scale = new PIXI.Point(Config.ZOOM*2, Config.ZOOM*2);
    this.omoteHexagon.alpha = 0;
    this.uraHexagon.alpha = 0;
    this.add.tween(this.omoteHexagon).to({ alpha: 1 }, 500, "Linear", true);
    this.add.tween(this.uraHexagon).to({ alpha: 1 }, 500, "Linear", true);
    this.showInfoText();

  }

  showInfoText(){
    var winnerNumber = MuStatus.getWinnerNumber();
    var text ='';
    switch(winnerNumber){
      case 1:
        text = '1P won'
        break;
      case 2:
        text = '2P won'
        break;
      case 0:
        text = 'Draw'
    }   
    var styleInfoText = {align: "center",boundsAlignH: "center", boundsAlignV: "middle", font:90*Config.ZOOM + "px ProstOne"};
		var infoText = this.add.text(0, 0, text, styleInfoText);
		infoText.setTextBounds(0, this.world.height*0.78, this.world.width, this.world.height*0.2);
		infoText.alpha = 0;
		this.add.tween(infoText).to({ alpha: 1 }, 500, "Linear", true, 500);
  }
}
