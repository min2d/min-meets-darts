import MuBase from "./MuBase";
import CenterNumberPanel from "./CenterNumberPanel";
import MuStatus from "./MuStatus";
import Config from "./Config";
import MuOutput from "./MuOutput";
import TurnablePanelText from "./TurnablePanelText";
import TurnablePanel from "./TurnablePanel";
import PanelText from "./PanelText";

export default class PlayBase extends MuBase {
    scoreTarget: string;
    count = 0;
    bust = false;
    score = 0;
    tempScore = 0;
    omoteBack: TurnablePanel;
    uraBack: TurnablePanel;
    omoteHexagon: TurnablePanelText;
    uraHexagon: TurnablePanelText;
    centerNumberPanel: CenterNumberPanel;
    ribbons: TurnablePanelText[];
    roundPanel: PanelText;
    hit_sfx: Phaser.Sound;
    create(){
            super.create();

            this.hit_sfx= this.add.audio('sfx02');

            this.count = 0;
            this.bust = false;
            this.score = MuStatus.getScore(this.scoreTarget);
            this.tempScore = this.score;

            var background = this.add.sprite(0, 0, 'back01');

            var backPositionY = this.world.height*0.55
            var backPositionXOffset = this.world.width* 0.35
            this.omoteBack = new TurnablePanel(this.game,  this.world.width* 0.5 - backPositionXOffset , backPositionY, 'omote02', 'omote02d');
            this.omoteBack.activate();
            this.uraBack = new TurnablePanel(this.game, this.world.width* 0.5 + backPositionXOffset, backPositionY,'ura02', 'ura02d');
            this.uraBack.activate();

            //Hexagonは以前六角形を表示していた名残（なおすのめんどい）
            this.omoteHexagon = new TurnablePanelText(this.game,this.world.width* 0.35,this.world.height*0.85,'omote01', 'omote01d');
            this.omoteHexagon.setText(MuStatus.scoreOmote);
            this.omoteHexagon.setFontSize(150);
            this.uraHexagon = new TurnablePanelText(this.game,this.world.width* 0.65,this.world.height*0.85,'ura01', 'ura01d');
            this.uraHexagon.setText(MuStatus.scoreUra);
            this.uraHexagon.setFontSize(150);
            
            this.centerNumberPanel = new CenterNumberPanel(this.game, this.world.width*0.5,this.world.height*0.5);

            this.ribbons = new Array();
            this.ribbons[0] = new TurnablePanelText(this.game, this.world.width*0.68, this.world.height*0.12,'ribbon01','ribbon01d');
            this.ribbons[1] = new TurnablePanelText(this.game, this.world.width*0.48, this.world.height*0.12,'ribbon01','ribbon01d');
            this.ribbons[2] = new TurnablePanelText(this.game, this.world.width*0.28, this.world.height*0.12,'ribbon01','ribbon01d');
            for(var i=0;i<3;i++){
                this.ribbons[i].disactivate();
                this.ribbons[i].setFontSize(60);
            }
            this.roundPanel = new PanelText(this.game, this.world.width*0.07, this.world.height*0.1, 'round01');
            this.roundPanel.setText(Math.floor(MuStatus.nextGameStateIndex/2) + 1);


            this.visualInit();//baseでできない処理(オーバーライドしてる)
    }

    //オーバーライド(mubase)
    numberPressed(input: any){
        if(this.count >= 3 ){
            return;
        }
        if(this.bust){
            return;
        }
        //hit
        this.hit_sfx.play();
        this.muOutput.flashDmx(1,0xffffff);
        this.count++;
        for(var i=0;i<this.count;i++){
            this.ribbons[i].activate();
        }
        console.log(input);
        this.exec(input); // 値確定
        var histText = '';
        if(this.bust){
            // bust
            histText='Bust'
        }else{
            // 得点獲得の場合のview
            this.showScore(this.tempScore);
            if(input[0] == 0){
                histText = Config.histText[0];
            }else{
                histText = Config.histText[input[1]] + ' ' + input[0];
            }
            this.ribbons[this.count-1].setText(histText);//リボン表示
        }
        if(this.count>=3 || this.bust){//残り本数が無くなったとき
            console.log('push red button');
        }
        
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
    visualInit(){}//オーバーライド用
    showScore(score:number){//裏表同名メソッドでそれぞれの枠も更新するように上書き
        this.centerNumberPanel.setText(score);
    }

    //オーバーライド(mubase)
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
