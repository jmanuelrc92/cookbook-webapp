import { Ingredient } from "./ingredient.model"
import { PreparationStep } from "./preparation.steps.model"
import { PreparationTime } from "./preparation.time.model"

export class RecipeHeavyWeightModel {
    name: string
    ingredients: Array<Ingredient>
    preparationSteps: Array<PreparationStep>
    portions: number
    preparationTime: PreparationTime

    constructor(name: string = "", ingredients: Array<Ingredient>, preparationSteps: Array<PreparationStep>, portions: number = 0, preparationTime: PreparationTime) {
        this.name = name
        this.ingredients = ingredients
        this.preparationSteps = preparationSteps
        this.portions = portions
        this.preparationTime = preparationTime
    }
    
}