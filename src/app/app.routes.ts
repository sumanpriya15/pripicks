import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home').then(m => m.Home)
  },
  {
    path: 'food',
    loadComponent: () => import('./food-blog/food-blog.component').then(m => m.FoodBlogComponent)
  },
  {
    path: 'movies',
    loadComponent: () => import('./movies/movies.component').then(m => m.MoviesComponent)
  },
  {
    path: 'arts',
    loadComponent: () => import('./arts/arts.component').then(m => m.ArtsComponent)
  },
  {
    path: 'travel',
    loadComponent: () => import('./travel/travel.component').then(m => m.TravelComponent)
  },
  {
    path: 'article/:id',
    loadComponent: () => import('./food-blog/article-detail/article-detail.component').then(m => m.ArticleDetailComponent)
  }
];
