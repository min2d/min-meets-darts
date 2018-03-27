import Boot from './Boot';
import Preloader from './Preloader';
import MainMenu from './MainMenu';
import Omote from './Omote';
import Ura from './Ura';
import Result from './Result';
import Config from "./Config";

export default class Game extends Phaser.Game {

	constructor() {
		super(1920*Config.ZOOM, 1080*Config.ZOOM, Phaser.AUTO, 'content', null);

		this.state.add('Boot', Boot, false);
		this.state.add('Preloader', Preloader, false);
		this.state.add('MainMenu', MainMenu, false);
		this.state.add('Omote', Omote, false);
		this.state.add('Ura', Ura, false);
		this.state.add('Result', Result, false);


		this.state.start('Boot');
	}

}
