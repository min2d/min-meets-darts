!function(t){var e={};function o(r){if(e[r])return e[r].exports;var s=e[r]={i:r,l:!1,exports:{}};return t[r].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=e,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},o.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o.w={},o(o.s=16)}([function(t,e,o){"use strict";e.__esModule=!0;var r=function(){function t(){}return t.getColors=function(){for(var t=Math.floor(Math.random()*this.playerColors.length),e=Math.floor(Math.random()*this.playerColors.length);t==e;)e=Math.floor(Math.random()*this.playerColors.length);for(var o=Math.floor(Math.random()*this.playerColors.length);o==e||o==t;)o=Math.floor(Math.random()*this.playerColors.length);return[this.playerColors[t],this.playerColors[e],this.playerColors[o]]},t.ZOOM=.5,t.keyMap={13:"red",9:"black",65:[2,1],66:[4,2],67:[15,3],68:[11,3],69:[8,1],70:[14,2],71:[14,1],72:[16,2],73:[6,1],74:[6,1],75:[8,1],76:[19,1],77:[15,2],78:[12,2],79:[20,2],80:[3,1],81:[18,3],82:[0,4],83:[7,3],84:[15,1],1065:[10,2],1066:[18,1],1067:[3,2],1068:[7,2],1069:[6,2],1070:[16,1],1071:[3,3],1072:[18,1],1073:[10,1],1074:[12,3],1075:[20,3],1076:[17,2],1077:[20,1],1078:[9,1],1079:[17,1],1080:[20,1],1081:[7,1],1082:[4,3],1083:[3,1],1084:[13,1],1085:[17,1],1086:[1,1],1087:[6,3],1088:[14,3],1089:[18,2],1090:[16,3],48:[9,2],49:[13,3],50:[2,3],51:[1,3],52:[12,1],53:[11,1],54:[1,2],55:[5,1],56:[17,3],57:[19,1],1022:[8,2],1049:[13,1],1050:[0,4],1051:[15,1],1052:[11,2],1053:[1,1],1054:[14,1],1055:[5,3],1056:[8,3],1057:[19,3],1186:[9,1],1187:[7,1],1188:[19,2],1190:[5,2],1191:[5,1],186:[12,1],187:[2,2],188:[13,2],189:[4,1],190:[9,3],1189:[2,1],191:[10,3],192:[4,1],219:[11,1],221:[10,1],222:[16,1],1222:[8,2]},t.playerColors=[15963904,15073298,42971,39236,14140487,10190006,44457,12280861,15225496,31170,7125850,11927674,15013663,5384326,30906,105062,14962067,8472353,11127889,15629082,41182],t}();e.default=r},function(t,e,o){"use strict";e.__esModule=!0;var r=function(){function t(){}return t.getScore=function(t){return"scoreOmote"==t?this.scoreOmote:"scoreUra"==t?this.scoreUra:-1},t.setScore=function(t,e){"scoreOmote"==t?this.scoreOmote=e:"scoreUra"==t&&(this.scoreUra=e)},t.gameStates=["Omote","Ura","Omote","Ura","Omote","Ura","Omote","Ura","Omote","Ura","Omote","Ura","Omote","Ura","Omote","Ura","Omote","Ura","Omote","Ura"],t.nextGameStateIndex=0,t.scoreOmote=301,t.scoreUra=301,t}();e.default=r},function(t,e,o){"use strict";var r,s=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])},function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});e.__esModule=!0;var n=o(0),i=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return s(e,t),e.prototype.create=function(){this.input.keyboard.addCallbacks(this,null,null,this.keyPress)},e.prototype.keyPress=function(){var t=this.game.input.keyboard.event.keyCode;this.game.input.keyboard.event.shiftKey&&(t+=1e3),console.log(t);var e=n.default.keyMap[t];console.log(e),void 0!=e?"red"==e?this.redPressed():"black"==e?this.blackPressed():this.numberPressed(e):console.log(t+"は未定義です")},e.prototype.numberPressed=function(t){console.log(t)},e.prototype.redPressed=function(){console.log("redPressed")},e.prototype.blackPressed=function(){console.log("blackPressed")},e}(Phaser.State);e.default=i},function(t,e,o){"use strict";var r,s=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])},function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});e.__esModule=!0;var n=o(2),i=o(10),a=o(8),u=o(1),c=o(0),h=o(7),l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.count=0,e.bust=!1,e.score=0,e.tempScore=0,e}return s(e,t),e.prototype.create=function(){t.prototype.create.call(this),this.count=0,this.bust=!1,this.score=u.default.getScore(this.scoreTarget),this.tempScore=this.score,this.omoteHexagon=new i.default(this.game,.25*this.world.width,.85*this.world.height,u.default.omoteColor),this.omoteHexagon.scale=new PIXI.Point(2*c.default.ZOOM,2*c.default.ZOOM),this.omoteHexagon.setText(u.default.scoreOmote),this.uraHexagon=new i.default(this.game,.75*this.world.width,.85*this.world.height,u.default.uraColor),this.uraHexagon.setText(u.default.scoreUra),this.uraHexagon.scale=new PIXI.Point(2*c.default.ZOOM,2*c.default.ZOOM),this.centerNumberPanel=new a.default(this.game,.46*this.world.width,.5*this.world.height),this.centerNumberPanel.scale=new PIXI.Point(2*c.default.ZOOM,2*c.default.ZOOM),this.ribbons=new Array,this.ribbons[0]=new h.default(this.game,.28*this.world.width,.12*this.world.height,u.default.ribbonColor),this.ribbons[0].scale=new PIXI.Point(c.default.ZOOM,c.default.ZOOM),this.ribbons[1]=new h.default(this.game,.48*this.world.width,.12*this.world.height,u.default.ribbonColor),this.ribbons[1].scale=new PIXI.Point(c.default.ZOOM,c.default.ZOOM),this.ribbons[2]=new h.default(this.game,.68*this.world.width,.12*this.world.height,u.default.ribbonColor),this.ribbons[2].scale=new PIXI.Point(c.default.ZOOM,c.default.ZOOM),this.visualInit()},e.prototype.numberPressed=function(t){if(this.add.audio("sfx01").play(),!(this.count>=3||this.bust))if(this.count++,console.log(t),this.exec(t),this.bust);else if(this.count<3)return},e.prototype.exec=function(t){var e=0;e=0==t[0]?50:t[0]*t[1],console.log("point="+e),this.tempScore=this.tempScore-e,this.showScore(this.tempScore),this.tempScore<0?this.bust=!0:(0==this.tempScore&&(this.score=this.tempScore,this.winFadeOut()),this.score=this.tempScore,console.log("score="+this.score))},e.prototype.visualInit=function(){},e.prototype.showScore=function(t){this.centerNumberPanel.setText(t)},e.prototype.redPressed=function(){this.fadeOut()},e.prototype.fadeOut=function(){u.default.setScore(this.scoreTarget,this.score),u.default.nextGameStateIndex++;var t=u.default.gameStates[u.default.nextGameStateIndex];void 0!=t?this.game.state.start(t,!0,!1):this.game.state.start("Result",!0,!1)},e.prototype.winFadeOut=function(){u.default.setScore(this.scoreTarget,this.score),this.game.state.start("Result",!0,!1)},e}(n.default);e.default=l},function(t,e,o){"use strict";var r,s=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])},function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});e.__esModule=!0;var n=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return s(e,t),e.prototype.create=function(){console.log("Result created"),t.prototype.create.call(this)},e}(o(2).default);e.default=n},function(t,e,o){"use strict";var r,s=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])},function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});e.__esModule=!0;var n=o(3),i=o(1),a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.scoreTarget="scoreUra",e}return s(e,t),e.prototype.create=function(){console.log("Ura created"),t.prototype.create.call(this)},e.prototype.visualInit=function(){this.omoteHexagon.stopAppeal(),this.centerNumberPanel.setText(i.default.scoreUra)},e.prototype.showScore=function(e){t.prototype.showScore.call(this,e),this.uraHexagon.setText(e)},e}(n.default);e.default=a},function(t,e,o){"use strict";var r,s=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])},function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});e.__esModule=!0;var n=function(t){function e(e,o,r,s){var n=t.call(this,e,o,r)||this;n.xBase=10,n.yBase=13,n.color=s;var i=s;return n.drawLayerdShape(i,16777215),e.add.existing(n),n}return s(e,t),e.prototype.drawRibbon=function(t,e){this.beginFill(e),this.moveTo(4*this.xBase*t,1*this.yBase*t),this.lineTo(3*this.xBase*t,0),this.lineTo(4*this.xBase*t,-1*this.yBase*t),this.lineTo(-2.6*this.xBase*t,-1*this.yBase*t),this.lineTo(-3.6*this.xBase*t,0),this.lineTo(-2.6*this.xBase*t,1*this.yBase*t),this.lineTo(4*this.xBase*t,1*this.yBase*t),this.endFill()},e.prototype.drawLayerdShape=function(t,e){this.drawRibbon(6,t),this.drawRibbon(5.8,e),this.drawRibbon(5.5,t)},e.prototype.startAppeal=function(){var t=this.color;this.drawLayerdShape(t,16777215)},e.prototype.stopAppeal=function(){this.drawLayerdShape(13421772,16777215)},e}(Phaser.Graphics);e.default=n},function(t,e,o){"use strict";var r,s=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])},function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});e.__esModule=!0;var n=o(0),i=o(6),a=function(t){function e(e,o,r,s){var a=t.call(this,e,o,r)||this;return a.Ribbon=new i.default(e,0,0,s),a.text=e.make.text(0,3.9,"testes 00",{fontSize:100*n.default.ZOOM,fill:"#FFF",font:"ProstOne"}),a.text.anchor.setTo(.5,.5),a.addChild(a.Ribbon),a.addChild(a.text),e.add.existing(a),a}return s(e,t),e.prototype.setText=function(t){"number"==typeof t?this.text.setText(t.toString()):this.text.setText(t)},e.prototype.startAppeal=function(){this.Ribbon.startAppeal()},e.prototype.stopAppeal=function(){this.Ribbon.stopAppeal()},e}(Phaser.Graphics);e.default=a},function(t,e,o){"use strict";var r,s=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])},function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});e.__esModule=!0;var n=o(0),i=function(t){function e(e,o,r){var s=t.call(this,e,o,r)||this;return s.text=e.make.text(0,0,"",{fontSize:400*n.default.ZOOM,fill:"#1d043f",font:"ProstOne"}),s.text.anchor.setTo(.5,.5),s.addChild(s.text),e.add.existing(s),s}return s(e,t),e.prototype.setText=function(t){"number"==typeof t?this.text.setText(t.toString()):this.text.setText(t)},e}(Phaser.Graphics);e.default=i},function(t,e,o){"use strict";var r,s=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])},function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});e.__esModule=!0;var n=function(t){function e(e,o,r,s){var n=t.call(this,e,o,r)||this;n.xBase=10,n.yBase=13,n.color=s;var i=s;return n.drawHexagon(6,i),n.drawHexagon(5.8,16777215),n.drawHexagon(5.6,i),e.add.existing(n),n}return s(e,t),e.prototype.drawHexagon=function(t,e){this.beginFill(e),this.moveTo(.85*this.xBase*t,-1*this.yBase*t),this.lineTo(1.85*this.xBase*t,0),this.lineTo(.85*this.xBase*t,this.yBase*t),this.lineTo(-.85*this.xBase*t,this.yBase*t),this.lineTo(-1.85*this.xBase*t,0),this.lineTo(-.85*this.xBase*t,-1*this.yBase*t),this.lineTo(.85*this.xBase*t,-1*this.yBase*t),this.endFill()},e.prototype.startAppeal=function(){var t=this.color;this.drawHexagon(6,t),this.drawHexagon(5.8,16777215),this.drawHexagon(5.6,t)},e.prototype.stopAppeal=function(){this.drawHexagon(6,13421772),this.drawHexagon(5.8,16777215),this.drawHexagon(5.6,13421772)},e}(Phaser.Graphics);e.default=n},function(t,e,o){"use strict";var r,s=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])},function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});e.__esModule=!0;var n=o(0),i=o(9),a=function(t){function e(e,o,r,s){var a=t.call(this,e,o,r)||this;return a.hexagon=new i.default(e,0,0,s),a.text=e.make.text(0,3.9,"tes",{fontSize:140*n.default.ZOOM,fill:"#FFF",font:"ProstOne"}),a.text.anchor.setTo(.5,.5),a.addChild(a.hexagon),a.addChild(a.text),e.add.existing(a),a}return s(e,t),e.prototype.setText=function(t){"number"==typeof t?this.text.setText(t.toString()):this.text.setText(t)},e.prototype.startAppeal=function(){this.hexagon.startAppeal()},e.prototype.stopAppeal=function(){this.hexagon.stopAppeal()},e}(Phaser.Graphics);e.default=a},function(t,e,o){"use strict";var r,s=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])},function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});e.__esModule=!0;var n=o(3),i=o(1),a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.scoreTarget="scoreOmote",e}return s(e,t),e.prototype.create=function(){console.log("Omote created"),t.prototype.create.call(this)},e.prototype.visualInit=function(){this.uraHexagon.stopAppeal(),this.centerNumberPanel.setText(i.default.scoreOmote)},e.prototype.showScore=function(e){t.prototype.showScore.call(this,e),this.omoteHexagon.setText(e)},e}(n.default);e.default=a},function(t,e,o){"use strict";var r,s=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])},function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});e.__esModule=!0;var n=o(2),i=o(0),a=o(1),u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return s(e,t),e.prototype.create=function(){this.music=this.add.audio("titleMusic"),this.music.play(),this.background=this.add.tileSprite(0,0,this.world.width,this.world.height,"titlepage"),this.background.alpha=0,this.add.tween(this.background).to({alpha:1},2e3,Phaser.Easing.Bounce.InOut,!0);var e={fill:"#1d043f",align:"center",boundsAlignH:"center",font:140*i.default.ZOOM+"px ProstOne"};this.logo=this.add.text(this.world.width/2,-100*i.default.ZOOM,"titletext",e),this.logo.anchor.setTo(.5,.5),this.add.tween(this.logo).to({y:.45*this.world.height},2e3,Phaser.Easing.Elastic.Out,!0,2e3);var o={align:"center",boundsAlignH:"center",boundsAlignV:"middle",font:60*i.default.ZOOM+"px ProstOne"};this.infoText=this.add.text(0,0,"push button",o),this.infoText.setTextBounds(0,.55*this.world.height,this.world.width,.2*this.world.height),this.infoText.alpha=0,this.add.tween(this.infoText).to({alpha:1},2e3,"Linear",!0,4e3),t.prototype.create.call(this)},e.prototype.redPressed=function(){this.add.audio("sfx01").play(),this.fadeOut()},e.prototype.fadeOut=function(){this.add.tween(this.infoText).to({alpha:0},500,Phaser.Easing.Linear.None,!0),this.add.tween(this.background).to({alpha:0},2e3,Phaser.Easing.Linear.None,!0),this.add.tween(this.logo).to({y:1.5*this.world.height},1e3,Phaser.Easing.Linear.None,!0).onComplete.add(this.startGame,this)},e.prototype.startGame=function(){this.music.stop();var t=a.default.gameStates[0];this.game.state.start(t,!0,!1)},e}(n.default);e.default=u},function(t,e,o){"use strict";var r,s=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])},function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});e.__esModule=!0;var n=o(0),i=o(1),a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.ready=!1,e}return s(e,t),e.prototype.preload=function(){this.preloadBar=this.add.sprite(0,0,"preloadBar"),this.load.setPreloadSprite(this.preloadBar),this.load.image("titlepage","assets/titlepage.png"),this.load.audio("titleMusic","assets/jingle01.wav",!0),this.load.audio("sfx01","assets/sfx01.wav",!0),this.load.image("minWhite","assets/min_white.png"),this.load.image("level1","assets/level1.png"),this.game.add.text(0,0,"hack",{font:"1px ProstOne",fill:"#FFFFFF"});var t=n.default.getColors();i.default.omoteColor=t[0],i.default.uraColor=t[1],i.default.ribbonColor=t[2],this.game.stage.backgroundColor="#fff"},e.prototype.create=function(){this.game.state.start("MainMenu")},e}(Phaser.State);e.default=a},function(t,e,o){"use strict";var r,s=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])},function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});e.__esModule=!0;var n=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return s(e,t),e.prototype.init=function(){this.input.maxPointers=1,this.stage.disableVisibilityChange=!1,this.game.physics.startSystem(Phaser.Physics.ARCADE),this.game.device.desktop?this.scale.pageAlignHorizontally=!0:(this.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL,this.scale.setMinMax(480,260,1024,768),this.scale.forceLandscape=!0,this.scale.pageAlignHorizontally=!0)},e.prototype.preload=function(){this.load.image("preloadBar","assets/loader.png")},e.prototype.create=function(){this.game.state.start("Preloader")},e}(Phaser.State);e.default=n},function(t,e,o){"use strict";var r,s=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])},function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});e.__esModule=!0;var n=o(14),i=o(13),a=o(12),u=o(11),c=o(5),h=o(4),l=o(0),p=function(t){function e(){var e=t.call(this,1920*l.default.ZOOM,1080*l.default.ZOOM,Phaser.AUTO,"content",null)||this;return e.state.add("Boot",n.default,!1),e.state.add("Preloader",i.default,!1),e.state.add("MainMenu",a.default,!1),e.state.add("Omote",u.default,!1),e.state.add("Ura",c.default,!1),e.state.add("Result",h.default,!1),e.state.start("Boot"),e}return s(e,t),e}(Phaser.Game);e.default=p},function(t,e,o){"use strict";e.__esModule=!0;var r=o(15);window.onload=function(){new r.default}}]);
//# sourceMappingURL=bundle.js.map