export default class Config {
    static ZOOM = 0.5;
    static keyMap:{[index: number]: any} = {
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
	static playerColors:any = [
		0xf39700,0xe60012,0x00a7db,0x009944,0xd7c447,
		0x9b7cb6,0x00ada9,0xbb641d,0xe85298,0x0079c2,
		0x6cbb5a,0xb6007a,0xe5171f,0x522886,0x0078ba,0x019a66,
		0xe44d93,0x814721,0xa9cc51,0xee7b1a,0x00a0de
	];
	static getColors():number[]{
		var index1 = Math.floor(Math.random()* this.playerColors.length);
		var index2 = Math.floor(Math.random()* this.playerColors.length);
		while(index1 == index2){
			var index2 = Math.floor(Math.random()* this.playerColors.length);
		}
		var index3 = Math.floor(Math.random()* this.playerColors.length);
		while(index3== index2 || index3 == index1){
			var index3 = Math.floor(Math.random()* this.playerColors.length);			
		}
		return [this.playerColors[index1],this.playerColors[index2],this.playerColors[index3]];
	}
}