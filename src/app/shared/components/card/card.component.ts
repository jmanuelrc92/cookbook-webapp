import { Component, OnInit, Input } from '@angular/core'
import { Router } from '@angular/router'
import { RecipeLightWeightModel } from 'src/app/recipes/models/recipe.lightweight.model'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true
})

export class CardComponent implements OnInit {

  private router: Router

  @Input() recipeLW: RecipeLightWeightModel

  constructor(router: Router, recipeLW: RecipeLightWeightModel) {
    this.router = router

    this.recipeLW = recipeLW
  }

  ngOnInit(): void { }

  goToRecipeView(): void {
    this.router.navigate(['recipes/view', this.recipeLW.uuid])
  }

}
