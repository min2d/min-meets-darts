export default class Omote extends Phaser.State {
  create(){
    console.log('Omote created');
		this.input.keyboard.addCallbacks(this, null, null, this.keyPress);    
  }
  keyPress() {
		var keyCode = this.game.input.keyboard.event.keyCode;
		if (this.game.input.keyboard.event.shiftKey){
			keyCode = keyCode + 1000;
		}
		console.log(keyCode);
		//Phaser.Keycode.A=数字みたいな宣言もあるっぽ
		//エンターは取れる。タブが取れない。
		//おそらくeventの中身はJSのKeyboardEventと同じもの

		var keyMap = this.game.state.states['Preloader'].keyMap

		var input = keyMap[keyCode];
		console.log(input);

		var sfx = this.add.audio('sfx01');
		sfx.play();
		
	}

}
