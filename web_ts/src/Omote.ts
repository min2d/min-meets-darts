import PlayBase from "./PlayBase";
import MuStatus from "./MuStatus";

export default class Omote extends PlayBase {
	scoreTarget = 'scoreOmote';
	create(){
		console.log('Omote created');
		super.create();
	}
	//オーバーライド
	visualInit(){
		this.uraHexagon.disactivate();
		this.uraBack.disactivate();
		this.omoteHexagon.activate();
		this.omoteBack.activate();
		this.centerNumberPanel.setText(MuStatus.scoreOmote);
	}
	//オーバーライド
	showScore(score:number){
		super.showScore(score);
		this.omoteHexagon.setText(score);
	}
	

}
