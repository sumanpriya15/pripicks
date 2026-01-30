import { Component, signal, computed, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
}

@Component({
  selector: 'app-food-blog',
  imports: [CommonModule],
  templateUrl: './food-blog.component.html',
  styleUrl: './food-blog.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FoodBlogComponent {
  posts = signal<BlogPost[]>([
    {
      id: 1,
      title: 'The Art of French Pastry: Mastering the Perfect Croissant',
      excerpt: 'Discover the secrets behind creating buttery, flaky croissants that rival those from Parisian bakeries. Learn the traditional techniques passed down through generations.',
      image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&h=600&fit=crop',
      author: 'Marie Laurent',
      date: 'January 28, 2026',
      category: 'Baking',
      readTime: '8 min read'
    },
    {
      id: 2,
      title: 'Farm-to-Table: Building Relationships with Local Farmers',
      excerpt: 'Explore how connecting with local farmers can transform your cooking and support sustainable agriculture in your community.',
      image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=800&h=600&fit=crop',
      author: 'James Cooper',
      date: 'January 26, 2026',
      category: 'Sustainable',
      readTime: '6 min read'
    },
    {
      id: 3,
      title: 'Umami Unveiled: The Fifth Taste That Changes Everything',
      excerpt: 'Dive deep into the savory world of umami and learn how to harness this flavor enhancer in your everyday cooking.',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=600&fit=crop',
      author: 'Kenji Tanaka',
      date: 'January 24, 2026',
      category: 'Techniques',
      readTime: '10 min read'
    },
    {
      id: 4,
      title: 'Mediterranean Magic: One-Pan Dinners for Busy Weeknights',
      excerpt: 'Quick, healthy, and bursting with flavor - these Mediterranean-inspired one-pan meals will revolutionize your weeknight dinner routine.',
      image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&h=600&fit=crop',
      author: 'Sofia Rossi',
      date: 'January 22, 2026',
      category: 'Recipes',
      readTime: '5 min read'
    },
    {
      id: 5,
      title: 'The Science of Sourdough: A Beginner\'s Journey',
      excerpt: 'Start your sourdough adventure with our comprehensive guide to creating and maintaining your starter, plus foolproof recipes.',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=600&fit=crop',
      author: 'Oliver Chen',
      date: 'January 20, 2026',
      category: 'Baking',
      readTime: '12 min read'
    },
    {
      id: 6,
      title: 'Spice Routes: A Journey Through Indian Regional Cuisines',
      excerpt: 'From Kerala to Kashmir, explore the diverse and vibrant flavors that make Indian cuisine one of the world\'s most beloved.',
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&h=600&fit=crop',
      author: 'Priya Sharma',
      date: 'January 18, 2026',
      category: 'World Cuisine',
      readTime: '15 min read'
    }
  ]);

  categories = signal<string[]>([
    'All',
    'Baking',
    'Recipes',
    'Techniques',
    'World Cuisine',
    'Sustainable'
  ]);

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
}
