import PlayBase from "./PlayBase";

export default class Ura extends PlayBase {
  scoreTarget = 'scoreUra';
  create(){
    console.log('Ura created');
    super.create();  
  }
}
