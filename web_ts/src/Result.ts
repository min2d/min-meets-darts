import MuBase from "./MuBase";
import Config from "./Config";
import MuStatus from "./MuStatus";
import TurnablePanelText from "./TurnablePanelText";

export default class Result extends MuBase {

  
  omoteHexagon: TurnablePanelText;
  uraHexagon: TurnablePanelText;
  
  create(){
    console.log('Result created');		
    super.create();

    var background = this.add.sprite(0, 0, 'back03');
    //background.scale = new Phaser.Point(Config.ZOOM, Config.ZOOM);

    var styleTitleText = {align: "center",boundsAlignH: "center", boundsAlignV: "middle", font:150 + "px ProstOne"};
    var titleText = this.add.text(0, 0, "Result", styleTitleText);
    titleText.setTextBounds(0, this.world.height*0.2, this.world.width, this.world.height*0.2);
    
    var hexagonPositionY = this.world.height*0.65;
    var hexagonPositionXOffset = this.world.height*0.27;
    this.omoteHexagon = new TurnablePanelText(this.game,this.world.width* 0.5 - hexagonPositionXOffset, hexagonPositionY, 'omote01', 'omote01d');
    this.omoteHexagon.setText(MuStatus.scoreOmote);
    this.omoteHexagon.setFontSize(150);
    this.omoteHexagon.activate();
    this.uraHexagon = new TurnablePanelText(this.game,this.world.width* 0.5 + hexagonPositionXOffset, hexagonPositionY, 'ura01', 'ura01d');
    this.uraHexagon.setText(MuStatus.scoreUra);
    this.uraHexagon.setFontSize(150);
    this.uraHexagon.activate();

    this.omoteHexagon.setText(MuStatus.scoreOmote);
    this.uraHexagon.setText(MuStatus.scoreUra);
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
    var styleInfoText = {align: "center",boundsAlignH: "center", boundsAlignV: "middle", font:90 + "px ProstOne"};
		var infoText = this.add.text(0, 0, text, styleInfoText);
		infoText.setTextBounds(0, this.world.height*0.78, this.world.width, this.world.height*0.2);
		infoText.alpha = 0;
		this.add.tween(infoText).to({ alpha: 1 }, 500, "Linear", true, 500);
  }
}
