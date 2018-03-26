!function(t){var e={};function o(s){if(e[s])return e[s].exports;var r=e[s]={i:s,l:!1,exports:{}};return t[s].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=e,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:s})},o.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o.w={},o(o.s=9)}([function(t,e,o){"use strict";var s,r=this&&this.__extends||(s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])},function(t,e){function o(){this.constructor=t}s(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});e.__esModule=!0;var n=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.create=function(){this.input.keyboard.addCallbacks(this,null,null,this.keyPress)},e.prototype.keyPress=function(){var t=this.game.input.keyboard.event.keyCode;this.game.input.keyboard.event.shiftKey&&(t+=1e3),console.log(t);var e=this.game.state.states.Preloader.keyMap[t];console.log(e),void 0!=e?"red"==e?this.redPressed():"black"==e?this.blackPressed():this.numberPressed(e):console.log(t+"は未定義です")},e.prototype.numberPressed=function(t){console.log(t)},e.prototype.redPressed=function(){console.log("redPressed")},e.prototype.blackPressed=function(){console.log("blackPressed")},e}(Phaser.State);e.default=n},function(t,e,o){"use strict";var s,r=this&&this.__extends||(s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])},function(t,e){function o(){this.constructor=t}s(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});e.__esModule=!0;var n=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.count=0,e.bust=!1,e.score=0,e.tempScore=0,e}return r(e,t),e.prototype.create=function(){this.muStatus=this.game.state.states.Preloader,t.prototype.create.call(this),this.count=0,this.bust=!1,this.score=this.game.state.states.Preloader[this.scoreTarget],this.tempScore=this.score},e.prototype.numberPressed=function(t){if(this.add.audio("sfx01").play(),!(this.count>=3||this.bust))if(this.count++,console.log(t),this.exec(t),this.bust);else if(this.count<3)return},e.prototype.exec=function(t){var e=0;e=0==t[0]?50:t[0]*t[1],console.log("point="+e),this.tempScore=this.tempScore-e,this.tempScore<0?this.bust=!0:(0==this.tempScore&&(this.score=this.tempScore,this.winFadeOut()),this.score=this.tempScore,console.log("score="+this.score))},e.prototype.redPressed=function(){this.fadeOut()},e.prototype.fadeOut=function(){this.game.state.states.Preloader[this.scoreTarget]=this.score,this.muStatus.nextGameStateIndex++;var t=this.muStatus.gameStates[this.muStatus.nextGameStateIndex];void 0!=t?this.game.state.start(t,!0,!1):this.game.state.start("Result",!0,!1)},e.prototype.winFadeOut=function(){this.game.state.states.Preloader[this.scoreTarget]=this.score,this.game.state.start("Result",!0,!1)},e}(o(0).default);e.default=n},function(t,e,o){"use strict";var s,r=this&&this.__extends||(s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])},function(t,e){function o(){this.constructor=t}s(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});e.__esModule=!0;var n=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.create=function(){console.log("Result created"),this.muStatus=this.game.state.states.Preloader,t.prototype.create.call(this)},e}(o(0).default);e.default=n},function(t,e,o){"use strict";var s,r=this&&this.__extends||(s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])},function(t,e){function o(){this.constructor=t}s(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});e.__esModule=!0;var n=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.scoreTarget="scoreUra",e}return r(e,t),e.prototype.create=function(){console.log("Ura created"),t.prototype.create.call(this)},e}(o(1).default);e.default=n},function(t,e,o){"use strict";var s,r=this&&this.__extends||(s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])},function(t,e){function o(){this.constructor=t}s(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});e.__esModule=!0;var n=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.scoreTarget="scoreOmote",e}return r(e,t),e.prototype.create=function(){console.log("Omote created"),t.prototype.create.call(this)},e}(o(1).default);e.default=n},function(t,e,o){"use strict";var s,r=this&&this.__extends||(s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])},function(t,e){function o(){this.constructor=t}s(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});e.__esModule=!0;var n=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.create=function(){this.music=this.add.audio("titleMusic"),this.music.play(),this.background=this.add.tileSprite(0,0,this.world.width,this.world.height,"titlepage"),this.background.alpha=0,this.add.tween(this.background).to({alpha:1},2e3,Phaser.Easing.Bounce.InOut,!0);this.logo=this.add.text(this.world.width/2,-50,"titletext",{fill:"#1d043f",align:"center",boundsAlignH:"center",font:"60px ProstOne"}),this.logo.anchor.setTo(.5,.5),this.add.tween(this.logo).to({y:220},2e3,Phaser.Easing.Elastic.Out,!0,2e3);this.infoText=this.add.text(0,0,"push button",{align:"center",boundsAlignH:"center",boundsAlignV:"middle",font:"40px ProstOne"}),this.infoText.setTextBounds(0,.6*this.world.height,this.world.width,.2*this.world.height),this.infoText.alpha=0,this.add.tween(this.infoText).to({alpha:1},2e3,"Linear",!0,4e3).loop(!0),t.prototype.create.call(this)},e.prototype.redPressed=function(){this.add.audio("sfx01").play(),this.fadeOut()},e.prototype.fadeOut=function(){this.add.tween(this.infoText).to({alpha:0},2e3,Phaser.Easing.Linear.None,!0),this.add.tween(this.background).to({alpha:0},2e3,Phaser.Easing.Linear.None,!0),this.add.tween(this.logo).to({y:800},1e3,Phaser.Easing.Linear.None,!0).onComplete.add(this.startGame,this)},e.prototype.startGame=function(){this.music.stop();var t=this.game.state.states.Preloader.gameStates[0];this.game.state.start(t,!0,!1)},e}(o(0).default);e.default=n},function(t,e,o){"use strict";var s,r=this&&this.__extends||(s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])},function(t,e){function o(){this.constructor=t}s(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});e.__esModule=!0;var n=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.ready=!1,e.gameStates=["Omote","Ura","Omote","Ura","Omote","Ura","Omote","Ura","Omote","Ura","Omote","Ura","Omote","Ura","Omote","Ura","Omote","Ura","Omote","Ura"],e.nextGameStateIndex=0,e.scoreOmote=301,e.scoreUra=301,e.keyMap={13:"red",9:"black",65:[2,1],66:[4,2],67:[15,3],68:[11,3],69:[8,1],70:[14,2],71:[14,1],72:[16,2],73:[6,1],74:[6,1],75:[8,1],76:[19,1],77:[15,2],78:[12,2],79:[20,2],80:[3,1],81:[18,3],82:[0,4],83:[7,3],84:[15,1],1065:[10,2],1066:[18,1],1067:[3,2],1068:[7,2],1069:[6,2],1070:[16,1],1071:[3,3],1072:[18,1],1073:[10,1],1074:[12,3],1075:[20,3],1076:[17,2],1077:[20,1],1078:[9,1],1079:[17,1],1080:[20,1],1081:[7,1],1082:[4,3],1083:[3,1],1084:[13,1],1085:[17,1],1086:[1,1],1087:[6,3],1088:[14,3],1089:[18,2],1090:[16,3],48:[9,2],49:[13,3],50:[2,3],51:[1,3],52:[12,1],53:[11,1],54:[1,2],55:[5,1],56:[17,3],57:[19,1],1022:[8,2],1049:[13,1],1050:[0,4],1051:[15,1],1052:[11,2],1053:[1,1],1054:[14,1],1055:[5,3],1056:[8,3],1057:[19,3],1186:[9,1],1187:[7,1],1188:[19,2],1190:[5,2],1191:[5,1],186:[12,1],187:[2,2],188:[13,2],189:[4,1],190:[9,3],1189:[2,1],191:[10,3],192:[4,1],219:[11,1],221:[10,1],222:[16,1],1222:[8,2]},e}return r(e,t),e.prototype.preload=function(){this.preloadBar=this.add.sprite(300,400,"preloadBar"),this.load.setPreloadSprite(this.preloadBar),this.load.image("titlepage","assets/titlepage.png"),this.load.audio("titleMusic","assets/jingle01.wav",!0),this.load.audio("sfx01","assets/sfx01.wav",!0),this.load.image("minWhite","assets/min_white.png"),this.load.image("level1","assets/level1.png"),this.game.add.text(0,0,"hack",{font:"1px ProstOne",fill:"#FFFFFF"})},e.prototype.create=function(){this.game.state.start("MainMenu")},e}(Phaser.State);e.default=n},function(t,e,o){"use strict";var s,r=this&&this.__extends||(s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])},function(t,e){function o(){this.constructor=t}s(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});e.__esModule=!0;var n=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.init=function(){this.input.maxPointers=1,this.stage.disableVisibilityChange=!0,this.game.physics.startSystem(Phaser.Physics.ARCADE),this.game.device.desktop?this.scale.pageAlignHorizontally=!0:(this.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL,this.scale.setMinMax(480,260,1024,768),this.scale.forceLandscape=!0,this.scale.pageAlignHorizontally=!0)},e.prototype.preload=function(){this.load.image("preloadBar","assets/loader.png")},e.prototype.create=function(){this.game.state.start("Preloader")},e}(Phaser.State);e.default=n},function(t,e,o){"use strict";var s,r=this&&this.__extends||(s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])},function(t,e){function o(){this.constructor=t}s(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});e.__esModule=!0;var n=o(7),a=o(6),i=o(5),c=o(4),u=o(3),p=o(2),l=function(t){function e(){var e=t.call(this,800,450,Phaser.AUTO,"content",null)||this;return e.state.add("Boot",n.default,!1),e.state.add("Preloader",a.default,!1),e.state.add("MainMenu",i.default,!1),e.state.add("Omote",c.default,!1),e.state.add("Ura",u.default,!1),e.state.add("Result",p.default,!1),e.state.start("Boot"),e}return r(e,t),e}(Phaser.Game);e.default=l},function(t,e,o){"use strict";e.__esModule=!0;var s=o(8);window.onload=function(){new s.default}}]);
//# sourceMappingURL=bundle.js.map