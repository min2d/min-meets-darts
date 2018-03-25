import MuBase from "./MuBase";

export default class MainMenu extends MuBase {

	// background: Phaser.Sprite;
	background: Phaser.TileSprite;
	logo: Phaser.Sprite;
	infoText: Phaser.Text;
	music: Phaser.Sound;

	create() {
		// set BGM
		this.music = this.add.audio('titleMusic');
		this.music.play();
		// set BG sprite
		this.background = this.add.tileSprite(0, 0, this.world.width, this.world.height, 'titlepage');
		this.background.alpha = 0;
		this.add.tween(this.background).to({ alpha: 1 }, 2000, Phaser.Easing.Bounce.InOut, true);

		// set logo
		this.logo = this.add.sprite(this.world.centerX, -300, 'logo');
		this.logo.anchor.setTo(0.5, 0.5);	
		this.add.tween(this.logo).to({ y: 220 }, 2000, Phaser.Easing.Elastic.Out, true, 2000);

		//info text
		var style = {align: "center",boundsAlignH: "center", boundsAlignV: "middle" };
		this.infoText = this.add.text(0, 0, "push button", style);
		this.infoText.setTextBounds(0, this.world.height*0.6, this.world.width, this.world.height*0.2);
		this.infoText.alpha = 0;
		this.add.tween(this.infoText).to({ alpha: 1 }, 2000, "Linear", true, 4000);

		super.create();
	}

	redPressed() {
		var sfx = this.add.audio('sfx01');
		sfx.play();
		this.fadeOut();
	}
	fadeOut() {
		this.add.tween(this.infoText).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
		this.add.tween(this.background).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
		var tween = this.add.tween(this.logo).to({ y: 800 }, 1000, Phaser.Easing.Linear.None, true);
		tween.onComplete.add(this.startGame, this);
	}
	startGame() {
		this.music.stop();
		var firstGameState = this.game.state.states['Preloader'].gameStates[0];
		//下のstartの引数は、(key, clearWorld, clearCache, parameter)
		this.game.state.start(firstGameState, true, false);
	}
}
