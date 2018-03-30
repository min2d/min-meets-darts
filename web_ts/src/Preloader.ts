import Config from "./Config";
import MuStatus from "./MuStatus";


export default class Preloader extends Phaser.State {

	preloadBar: Phaser.Sprite;
	background: Phaser.Sprite;
	ready: boolean = false;

	preload() {

		//	These are the assets we loaded in Boot.js
		this.preloadBar = this.add.sprite(0, 0, 'preloadBar');

		//	This sets the preloadBar sprite as a loader sprite.
		//	What that does is automatically crop the sprite from 0 to full-width
		//	as the files below are loaded in.
		this.load.setPreloadSprite(this.preloadBar);

		//	Here we load the rest of the assets our game needs.
		//	As this is just a Project Template I've not provided these assets, swap them for your own.
		this.load.image('titlepage', 'assets/titlepage.png');
		this.load.audio('titleMusic', 'assets/jingle01.wav', true);
		this.load.audio('sfx01', 'assets/sfx01.wav', true);
		this.load.image('back01', 'assets/back01.png');
		this.load.image('back02', 'assets/back02.png');
		this.load.image('back03', 'assets/back03.png');
		//	+ lots of other required assets here
		//フォントのプリロード
		this.game.add.text(0, 0, "hack", {font:"1px ProstOne", fill:"#FFFFFF"});
		var colors = Config.getColors();
		MuStatus.omoteColor = colors[0];
		MuStatus.uraColor = colors[1];
		MuStatus.ribbonColor = colors[2];
		this.game.stage.backgroundColor = "#fff";
	}

	create() {
		
		this.game.state.start('MainMenu');
	}
}
