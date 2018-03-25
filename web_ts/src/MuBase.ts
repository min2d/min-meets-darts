export default class MuBase extends Phaser.State {
    create(){
		this.input.keyboard.addCallbacks(this, null, null, this.keyPress);          
    }
    keyPress() {
		var keyCode = this.game.input.keyboard.event.keyCode;
		if (this.game.input.keyboard.event.shiftKey){
			keyCode = keyCode + 1000;
		}
		console.log(keyCode);

		var keyMap = this.game.state.states['Preloader'].keyMap

		var input = keyMap[keyCode];
        console.log(input);	
        if (input == undefined){
            console.log(keyCode + 'は未定義です')
            return;
        }
        if (input == 'red'){
            this.redPressed();
        }else if (input == 'black'){
            this.blackPressed();
        }else{
            this.numberPressed(input);
        }
    }

    // inputは{n,倍率}(bullは特殊コードでもいい気がする)
    //オーバーライドするときはこの下のを書き換える
    numberPressed(input: any){
        console.log(input);
    }
    redPressed(){
        console.log('redPressed');
    }
    blackPressed(){
        console.log('blackPressed');
    }
  }
  