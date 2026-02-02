import { Component, signal, inject, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogPost, BLOG_POSTS } from '../../Data/blog-posts.data';
import moviesData from '../../Data/movies.json';
import travelData from '../../Data/travel.json';
import fashionData from '../../Data/fashion.json';
import skincareData from '../../Data/skincare.json';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  images: string[];
  author: string;
  date: string;
  category: string;
  readTime: string;
  servings?: string;
  prepTime?: string;
  ingredients?: string[];
  steps?: string[];
  tips?: string[];
}

@Component({
  selector: 'app-article-detail',
  imports: [CommonModule],
  templateUrl: './article-detail.component.html',
  styleUrl: './article-detail.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  article = signal<Article | null>(null);
  currentImageIndex = signal<number>(0);

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const articleId = parseInt(id);
      
      // Search in all data sources
      let foundArticle: Article | undefined;
      
      // Search in food posts
      foundArticle = BLOG_POSTS.find(post => post.id === articleId) as Article | undefined;
      
      // Search in movies
      if (!foundArticle) {
        foundArticle = moviesData.find(post => post.id === articleId) as Article | undefined;
      }
      
      // Search in travel
      if (!foundArticle) {
        foundArticle = travelData.find(post => post.id === articleId) as Article | undefined;
      }
      
      // Search in fashion
      if (!foundArticle) {
        foundArticle = fashionData.find(post => post.id === articleId) as Article | undefined;
      }
      
      // Search in skincare
      if (!foundArticle) {
        foundArticle = skincareData.find(post => post.id === articleId) as Article | undefined;
      }
      
      if (foundArticle) {
        this.article.set(foundArticle);
      } else {
        this.router.navigate(['/']);
      }
    } else {
      this.router.navigate(['/']);
    }
  }

  goBack() {
    this.router.navigate(['/']);
  }

  getAuthorInitials(author: string): string {
    return author.split(' ').map(n => n[0]).join('');
  }

  nextImage() {
    const images = this.article()?.images || [];
    if (images.length > 0) {
      this.currentImageIndex.update(index => (index + 1) % images.length);
    }
  }

  previousImage() {
    const images = this.article()?.images || [];
    if (images.length > 0) {
      this.currentImageIndex.update(index => (index - 1 + images.length) % images.length);
    }
  }

  goToImage(index: number) {
    this.currentImageIndex.set(index);
  }
}
