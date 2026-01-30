import { Component, signal, computed, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { BlogPost, BLOG_POSTS, BLOG_CATEGORIES } from '../Data/blog-posts.data';

@Component({
  selector: 'app-food-blog',
  imports: [CommonModule],
  templateUrl: './food-blog.component.html',
  styleUrl: './food-blog.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FoodBlogComponent {
  private router = inject(Router);
  
  posts = signal<BlogPost[]>(BLOG_POSTS);

  categories = signal<string[]>(BLOG_CATEGORIES);

  selectedCategory = signal<string>('All');

  filteredPosts = computed(() => {
    const category = this.selectedCategory();
    if (category === 'All') {
      return this.posts();
    }
    return this.posts().filter(post => post.category === category);
  });

  selectCategory(category: string) {
    this.selectedCategory.set(category);
  }

  getAuthorInitials(author: string): string {
    return author.split(' ').map(n => n[0]).join('');
  }

  openArticle(post: BlogPost) {
    this.router.navigate(['/article', post.id]);
  }
}
