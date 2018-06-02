import PlayBase from "./PlayBase";
import MuStatus from "./MuStatus";

export default class Ura extends PlayBase {
  scoreTarget = 'scoreUra';
  create(){
    console.log('Ura created');
    super.create();  
  }
  //オーバーライド
	visualInit(){
    this.omoteHexagon.disactivate();
    this.uraHexagon.activate();
    this.centerNumberPanel.setText(MuStatus.scoreUra);
  }
  //オーバーライド
	showScore(score:number){
    super.showScore(score);
		this.uraHexagon.setText(score);
	}
	
}
