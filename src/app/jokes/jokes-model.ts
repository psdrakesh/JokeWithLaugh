export class Jokes{
    public _id: string;
    public setup: string;
    public punchline: string;
    public shareableLink: string;
    public type: string;

    constructor(id:string, setup:string,punchline:string,shareableLink:string,type:string){
        this._id =id;
        this.punchline=punchline;
        this.shareableLink=shareableLink;
        this.type=type;
        this.setup = setup; 
    }
}