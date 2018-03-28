export default class MuStatus{
    static gameStates = ['Omote','Ura','Omote','Ura','Omote','Ura','Omote','Ura','Omote','Ura',
    'Omote','Ura','Omote','Ura','Omote','Ura','Omote','Ura','Omote','Ura'];
    static omoteColor: number;
    static uraColor: number;
    static nextGameStateIndex = 0;
    static scoreOmote = 301;
    static scoreUra = 301;
    
    static getScore(targetName: string): number{
        if (targetName == 'scoreOmote'){
            return this.scoreOmote;
        }else if (targetName == 'scoreUra'){
            return this.scoreUra;
        }
        return -1;
    }
    static setScore(targetName: string, score:number){
        if (targetName == 'scoreOmote'){
            this.scoreOmote = score;
        }else if (targetName == 'scoreUra'){
            this.scoreUra = score;
        }
    }
}