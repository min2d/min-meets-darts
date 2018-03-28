import PlayBase from "./PlayBase";
import MuStatus from "./MuStatus";

export default class Omote extends PlayBase {
	scoreTarget = 'scoreOmote';
	create(){
		console.log('Omote created');
		super.create();
		this.uraHexagon.stopAppeal();
		this.centerNumberPanel.setText(MuStatus.scoreOmote);
	}

}
