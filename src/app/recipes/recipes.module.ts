import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipeComponent } from './recipes.component';
import { CardComponent, NavigationbarComponent } from '../shared/components';


@NgModule({
  declarations: [
    RecipeComponent
  ],
  imports: [
    CommonModule,
    RecipesRoutingModule,
    CardComponent,
    NavigationbarComponent
  ]
})
export class RecipesModule { }
