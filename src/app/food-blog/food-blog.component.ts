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

  smoothScrollTo(elementId: string, event: Event) {
    event.preventDefault();
    const element = document.getElementById(elementId);
    const scrollContainer = document.querySelector('.overflow-y-auto') as HTMLElement;
    
    if (element && scrollContainer) {
      const targetPosition = element.offsetTop - 64; // Subtract navbar height (h-16 = 64px)
      const startPosition = scrollContainer.scrollTop;
      const distance = targetPosition - startPosition;
      const duration = 1500; // 1.5 seconds - adjust this for slower/faster scroll
      let start: number | null = null;

      const animation = (currentTime: number) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeInOutCubic = progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;
        
        scrollContainer.scrollTop = startPosition + distance * easeInOutCubic;
        
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    }
  }
}
