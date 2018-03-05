import Boot from './Boot';
import Preloader from './Preloader';
import MainMenu from './MainMenu';
import Level1 from './Level1';

export default class Game extends Phaser.Game {


	constructor() {
		super(800, 450, Phaser.AUTO, 'content', null);

		this.state.add('Boot', Boot, false);
		this.state.add('Preloader', Preloader, false);
		this.state.add('MainMenu', MainMenu, false);
		this.state.add('Level1', Level1, false);

		this.state.start('Boot');
	}

}
