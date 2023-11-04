export class Ingredient {
    quantity: number
    unit: string
    product: string
    preparationNotes: string

    constructor(quantity: number = 0, unit: string = "", product: string = "", preparationNotes: string = "") {
        this.unit = unit
        this.quantity = quantity
        this.product = product
        this.preparationNotes = preparationNotes
    }

}