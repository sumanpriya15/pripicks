import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./food-blog/food-blog.component').then(m => m.FoodBlogComponent)
  },
  {
    path: 'article/:id',
    loadComponent: () => import('./food-blog/article-detail/article-detail.component').then(m => m.ArticleDetailComponent)
  }
];
