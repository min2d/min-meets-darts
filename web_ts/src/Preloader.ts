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
		this.load.audio('loop01', 'assets/loop01.mp3', true);
		this.load.audio('loop02', 'assets/loop02.mp3', true);
		this.load.audio('ring01', 'assets/ring01.mp3', true);
		this.load.audio('ring02', 'assets/ring02.mp3', true);	
		this.load.audio('sfx01', 'assets/sfx01.mp3', true);		
		this.load.audio('sfx02', 'assets/sfx02.mp3', true);		
		this.load.image('back01', 'assets/back01.png');
		this.load.image('back02', 'assets/back02.png');
		this.load.image('back03', 'assets/back03.png');

		var imageNames = ['omote01', 'omote01d', 'omote02', 'omote02d',
						  'ura01', 'ura01d', 'ura02', 'ura02d',];
		for (var name of imageNames){
			this.load.image(name,'assets/'+ name +'.png');
		}
		
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
