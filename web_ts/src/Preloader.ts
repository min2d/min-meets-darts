export default class Preloader extends Phaser.State {

	preloadBar: Phaser.Sprite;
	background: Phaser.Sprite;
	ready: boolean = false;

  //グローバルの代わり
	//this.game.state.states['Preloader'].変数名で参照できる
	gameStates = ['Omote','Ura','Omote','Ura','Omote','Ura','Omote','Ura','Omote','Ura',
								'Omote','Ura','Omote','Ura','Omote','Ura','Omote','Ura','Omote','Ura'];
	nextGameStateIndex = 0;
	scoreOmote = 301;
	scoreUra = 301;
	keyMap = {
		13:"red",9:"black",
		65:[2,1],66:[4,2],67:[15,3],68:[11,3],69:[8,1],70:[14,2],71:[14,1],
		72:[16,2],73:[6,1],74:[6,1],75:[8,1],76:[19,1],77:[15,2],78:[12,2],
		79:[20,2],80:[3,1],81:[18,3],82:[0,4],83:[7,3],84:[15,1],
		1065:[10,2],1066:[18,1],1067:[3,2],1068:[7,2],1069:[6,2],1070:[16,1],1071:[3,3],
		1072:[18,1],1073:[10,1],1074:[12,3],1075:[20,3],1076:[17,2],1077:[20,1],1078:[9,1],
		1079:[17,1],1080:[20,1],1081:[7,1],1082:[4,3],1083:[3,1],1084:[13,1],1085:[17,1],
		1086:[1,1],1087:[6,3],1088:[14,3],1089:[18,2],1090:[16,3],
		//ここから数字
		48:[9,2],49:[13,3],50:[2,3],51:[1,3],52:[12,1],53:[11,1],54:[1,2],55:[5,1],56:[17,3],57:[19,1],
		//ここから記号
		1022:[8,2],1049:[13,1],1050:[0,4],1051:[15,1],1052:[11,2],1053:[1,1],
		1054:[14,1],1055:[5,3],1056:[8,3],1057:[19,3],1186:[9,1],1187:[7,1],1188:[19,2],
		1190:[5,2],1191:[5,1],186:[12,1],187:[2,2],188:[13,2],189:[4,1],190:[9,3],
		1189:[2,1],191:[10,3],192:[4,1],219:[11,1],221:[10,1],222:[16,1],1222:[8,2]
	}


	preload() {

		//	These are the assets we loaded in Boot.js
		this.preloadBar = this.add.sprite(300, 400, 'preloadBar');

		//	This sets the preloadBar sprite as a loader sprite.
		//	What that does is automatically crop the sprite from 0 to full-width
		//	as the files below are loaded in.
		this.load.setPreloadSprite(this.preloadBar);

		//	Here we load the rest of the assets our game needs.
		//	As this is just a Project Template I've not provided these assets, swap them for your own.
		this.load.image('titlepage', 'assets/titlepage.png');
		this.load.audio('titleMusic', 'assets/jingle01.wav', true);
		this.load.audio('sfx01', 'assets/sfx01.wav', true);
		this.load.image('logo', 'assets/logo.png');
    // this.load.spritesheet('simon', 'assets/simon.png', 58, 96, 5);
		this.load.image('minWhite', 'assets/min_white.png');
    this.load.image('level1', 'assets/level1.png');
		//	+ lots of other required assets here

	}

	create() {
		this.game.state.start('MainMenu');
	}
}
