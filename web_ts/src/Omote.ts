export default class Omote extends Phaser.State {
  create(){
    console.log('Omote created');
		this.input.keyboard.addCallbacks(this, null, null, this.keyPress);    
  }
  keyPress() {
		console.log(this.game.input.keyboard.event.keyCode);
		console.log(this.game.input.keyboard.event.key);
		//Phaser.Keycode.A=数字みたいな宣言もあるっぽ
		//エンターは取れる。タブが取れない。
		//おそらくeventの中身はJSのKeyboardEventと同じもの

		var sfx = this.add.audio('sfx01');
		sfx.play();
		
	}

}
