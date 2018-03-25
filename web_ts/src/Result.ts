import MuBase from "./MuBase";

export default class Result extends MuBase {
	muStatus: any;  
  create(){
    console.log('Result created');
    this.muStatus = this.game.state.states['Preloader'];		
    super.create();
  }
}
