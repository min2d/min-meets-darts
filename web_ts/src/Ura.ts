import PlayBase from "./PlayBase";
import MuStatus from "./MuStatus";

export default class Ura extends PlayBase {
  scoreTarget = 'scoreUra';
  create(){
    console.log('Ura created');
    super.create();  
    this.omoteHexagon.stopAppeal();
    this.centerNumberPanel.setText(MuStatus.scoreUra);
  }
}
