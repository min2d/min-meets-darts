import Player from './Player';
export default class Level1 extends Phaser.State {

	background: Phaser.TileSprite;
	// music: Phaser.Sound;
	player: Player;

	create() {

		this.background = this.add.tileSprite(0, 0, this.world.width, this.world.height, 'level1');

		this.player = new Player(this.game, 0, 0);

	  //受け渡しが必要な変数はどこかのstateに置いておく
		console.log(this.game.state.states['Preloader'].prop);


	}

}
