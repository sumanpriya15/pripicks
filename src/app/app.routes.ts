import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./food-blog/food-blog.component').then(m => m.FoodBlogComponent)
  }
];
