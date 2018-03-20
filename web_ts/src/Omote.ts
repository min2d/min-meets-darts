import MuBase from "./MuBase";

export default class Omote extends MuBase {
	muStatus: any;
  create(){
		console.log('Omote created');
		this.muStatus = this.game.state.states['Preloader'];		
		super.create();
  }
	numberPressed(){
		var sfx = this.add.audio('sfx01');
		sfx.play();
	}
	redPressed(){
		this.fadeOut();
	}
	fadeOut(){
		this.muStatus.nextGameStateIndex++;
		var nextGameState = this.muStatus.gameStates[this.muStatus.nextGameStateIndex];

		//下のstartの引数は、(key, clearWorld, clearCache, parameter)
		this.game.state.start(nextGameState, true, false);
	}

}
