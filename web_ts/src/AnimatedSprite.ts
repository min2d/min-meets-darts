
export default class AnimatedSprite extends Phaser.Sprite {

	constructor(game: Phaser.Game, x: number, y: number) {

		super(game, x, y, 'minWhite', 0);
		this.scale.x= 0.42;
		this.scale.y= 0.42;
		// this.anchor.setTo(0.5, 0);

		// this.animations.add('walk', [0, 1, 2, 3, 4], 10, true);
		game.add.existing(this);//返り値に対して.killで消える、reviveで再出現らしい。

	}

	update() {

		// スプライトシートで表示対象を変えてアニメーションするときのやつ
		// this.body.velocity.x = 0;
		//
		// if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
		//
		// 	this.body.velocity.x = -150;
		// 	this.animations.play('walk');
		//
		// 	if (this.scale.x == 1) {
		// 		this.scale.x = -1;
		// 	}
		// }
		// else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
		//
		// 	this.body.velocity.x = 150;
		// 	this.animations.play('walk');
		//
		// 	if (this.scale.x == -1) {
		// 		this.scale.x = 1;
		// 	}
		// }
		// else {
		// 	this.animations.frame = 0;
		// }

	}

}
