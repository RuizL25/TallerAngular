export class Serie{
    id :number;
    name : string;
    channel:string
    seasons:number ;
    description:string;
    platform:string;
    image:string;
    constructor(id:number, name:string, channel:string, seasons:number, description:string, platform:string, image:string){
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.platform = platform;
        this.image = image;
    }

    //crea los getters y setters
    getId():number{
        return this.id;
    }
    setId(id:number){
        this.id = id;
    }
    getName():string{
        return this.name;
    }
    setName(name:string){
        this.name = name;
    }
    getChannel():string{
        return this.channel;
    }
    setChannel(channel:string){
        this.channel = channel;
    }
    getSeasons():number{
        return this.seasons;
    }
    setSeasons(seasons:number){
        this.seasons = seasons;
    }
    getDescription():string{
        return this.description;
    }
    setDescription(description:string){
        this.description = description;
    }
    getPlatform():string{
        return this.platform;
    }
    setPlatform(platform:string){
        this.platform = platform;
    }
    getImage():string{
        return this.image;
    }
    setImage(image:string){
        this.image = image;
    }

}