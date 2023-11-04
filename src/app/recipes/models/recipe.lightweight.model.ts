export class RecipeLightWeightModel {
    name: string
    photoUrl: string
    uuid: string

    constructor(name: string = "", photoUrl: string = "", uuid: string) {
        this.name = name
        this.photoUrl = photoUrl
        this.uuid = uuid
    }    
    
}