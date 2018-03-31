import MuBase from "./MuBase";
import Config from "./Config";
import MuStatus from "./MuStatus";

export default class MainMenu extends MuBase {

	// background: Phaser.Sprite;
	background: Phaser.Sprite;
	logo: Phaser.Text;
	infoText: Phaser.Text;
	music: Phaser.Sound;

	create() {
		// set BGM
		this.music = this.add.audio('ring01');
		this.music.play();
		// set BG sprite
		this.background = this.add.sprite(0, 0, 'back02');
		this.background.alpha = 0;
		this.background.scale = new Phaser.Point(Config.ZOOM, Config.ZOOM);
		this.add.tween(this.background).to({ alpha: 1 }, 2000, Phaser.Easing.Bounce.InOut, true);

		// set logo
		var style = {fill: "#1d043f", align: "center",boundsAlignH: "center", font: 140*Config.ZOOM+"px ProstOne"};
		this.logo =  this.add.text(this.world.width/2, -100*Config.ZOOM, "titletext", style);	
		this.logo.anchor.setTo(0.5, 0.5);
		this.add.tween(this.logo).to({ y: this.world.height*0.45 }, 2000, Phaser.Easing.Elastic.Out, true, 1000);

		//info text
		var style2 = {align: "center",boundsAlignH: "center", boundsAlignV: "middle", font:60*Config.ZOOM + "px ProstOne"};
		this.infoText = this.add.text(0, 0, "push button", style2);
		this.infoText.setTextBounds(0, this.world.height*0.55, this.world.width, this.world.height*0.2);
		this.infoText.alpha = 0;
		this.add.tween(this.infoText).to({ alpha: 1 }, 2000, "Linear", true, 3000);

		super.create();
	}

	redPressed() {
		var sfx = this.add.audio('sfx01');
		sfx.play();
		this.fadeOut();
	}
	fadeOut() {
		this.add.tween(this.infoText).to({ alpha: 0 }, 500, Phaser.Easing.Linear.None, true);
		this.add.tween(this.background).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
		var tween = this.add.tween(this.logo).to({ y: this.world.height*1.5 }, 1000, Phaser.Easing.Linear.None, true);
		tween.onComplete.add(this.startGame, this);
	}
	startGame() {
		this.music.stop();
		var firstGameState = MuStatus.gameStates[0];
		//下のstartの引数は、(key, clearWorld, clearCache, parameter)
		this.game.state.start(firstGameState, true, false);
	}
}
