export class PreparationTime {
    time: number
    unit: string
    timeInSeconds: number

    constructor(time: number = 0, unit: string = "", timeInSeconds: number = 0) {
        this.time = time
        this.unit = unit
        this.timeInSeconds = timeInSeconds
    }
    
}