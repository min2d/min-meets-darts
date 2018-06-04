import Boot from './Boot';
import Preloader from './Preloader';
import MainMenu from './MainMenu';
import Omote from './Omote';
import Ura from './Ura';
import Result from './Result';
import Config from "./Config";
import MuOutput from './MuOutput';

export default class Game extends Phaser.Game {
	muOutput: MuOutput;
	
	constructor() {
		super(1920, 1080, Phaser.AUTO, 'content', null);
		this.muOutput = new MuOutput(this);

		this.state.add('Boot', Boot, false);
		this.state.add('Preloader', Preloader, false);
		this.state.add('MainMenu', new MainMenu(this.muOutput), false);
		this.state.add('Omote', new Omote(this.muOutput), false);
		this.state.add('Ura',new  Ura(this.muOutput), false);
		this.state.add('Result',new  Result(this.muOutput), false);

		this.state.start('Boot');
	}
	setIpcRenderer(ipcRenderer:any){
		this.muOutput.setIpcRenderer(ipcRenderer);
	}

}
