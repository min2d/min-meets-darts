import PlayBase from "./PlayBase";

export default class Omote extends PlayBase {
	scoreTarget = 'scoreOmote';
	create(){
		console.log('Omote created');
		super.create();
		this.uraHexagon.stopAppeal();
	}

}
