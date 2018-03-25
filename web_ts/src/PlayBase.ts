import MuBase from "./MuBase";

export default class PlayBase extends MuBase {
	muStatus: any;
    create(){
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
        if(nextGameState == undefined){
            this.game.state.start('Result', true, false);
            return;
        }
        //下のstartの引数は、(key, clearWorld, clearCache, parameter)
        this.game.state.start(nextGameState, true, false);
    }

}
