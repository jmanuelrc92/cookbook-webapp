import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipeComponent } from './recipes.component';
import { ListComponent, ViewComponent } from './pages/index';

const routes: Routes = [
  {
    path: '',
    component: RecipeComponent,
    children: [
      { path: 'recipes', component: ListComponent },
      { path: 'view/:recipe', component: ViewComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }
