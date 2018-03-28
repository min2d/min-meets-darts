import MuBase from "./MuBase";
import HexagonWithStr from "./HexagonWithStr";
import CenterNumberPanel from "./CenterNumberPanel";
import MuStatus from "./MuStatus";

export default class PlayBase extends MuBase {
    scoreTarget: string;
    count = 0;
    bust = false;
    score = 0;
    tempScore = 0;
    omoteHexagon: HexagonWithStr;
    uraHexagon: HexagonWithStr;
    centerNumberPanel: CenterNumberPanel;
    create(){	
            super.create();
            this.count = 0;
            this.bust = false;
            this.score = MuStatus.getScore(this.scoreTarget);
            this.tempScore = this.score;
            this.omoteHexagon = new HexagonWithStr(this.game,this.world.width* 0.25,this.world.height*0.85,MuStatus.omoteColor);
            this.uraHexagon = new HexagonWithStr(this.game,this.world.width* 0.75,this.world.height*0.85,MuStatus.uraColor);
            this.centerNumberPanel = new CenterNumberPanel(this.game, this.world.width*0.5,this.world.height*0.5);
    }
    numberPressed(input: any){
        var sfx = this.add.audio('sfx01');
        sfx.play();
        if(this.count >= 3 ){
            return;
        }
        if(this.bust){
            return;
        }
        //hit
        this.count++;
        console.log(input);
        this.exec(input);
        if(this.bust){
            //bust
        }else{
            //点数確定
            if(this.count<3){
                return;
            } 
        }
        //待機
        //"push red button"
    }
    exec(input: any){

        var point = 0;
        if(input[0] == 0){
            point = 50;
        }else{
            point = input[0]* input[1];
        }
        console.log("point="+point);
        this.tempScore = this.tempScore - point;
        if(this.tempScore < 0){
            this.bust = true;
            return;
        }else if(this.tempScore == 0){
            this.score = this.tempScore;
            this.winFadeOut();
        }
        this.score = this.tempScore;
        console.log('score=' + this.score);

    }
    redPressed(){
        this.fadeOut();
    }
    fadeOut(){
        MuStatus.setScore(this.scoreTarget,this.score);
        MuStatus.nextGameStateIndex++;
        var nextGameState = MuStatus.gameStates[MuStatus.nextGameStateIndex];
        if(nextGameState == undefined){
            this.game.state.start('Result', true, false);
            return;
        }
        //下のstartの引数は、(key, clearWorld, clearCache, parameter)
        this.game.state.start(nextGameState, true, false);
    }
    winFadeOut(){
        //とりあえずリザルトに飛ぶだけにしておく
        MuStatus.setScore(this.scoreTarget,this.score);
        this.game.state.start('Result',true,false);
    }
}
