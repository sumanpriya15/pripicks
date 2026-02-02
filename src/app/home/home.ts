import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BLOG_POSTS } from '../Data/blog-posts.data';
import moviesData from '../Data/movies.json';
import travelData from '../Data/travel.json';
import fashionData from '../Data/fashion.json';
import skincareData from '../Data/skincare.json';

interface Category {
  name: string;
  description: string;
  icon: string;
  route: string;
  color: string;
}

interface Post {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
}

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  categories = signal<Category[]>([
    {
      name: 'Food',
      description: 'Culinary adventures and recipes',
      icon: '🍳',
      route: '/food',
      color: '#f59e0b'
    },
    {
      name: 'Movies',
      description: 'Film reviews and recommendations',
      icon: '🎬',
      route: '/movies',
      color: '#8b5cf6'
    },
    {
      name: 'Travel',
      description: 'Explore destinations worldwide',
      icon: '✈️',
      route: '/travel',
      color: '#06b6d4'
    },
    {
      name: 'Fashion',
      description: 'Style guides and outfit inspiration',
      icon: '👗',
      route: '/fashion',
      color: '#ec4899'
    },
    {
      name: 'Skincare',
      description: 'Beauty routines and wellness tips',
      icon: '🌿',
      route: '/skincare',
      color: '#a78bfa'
    }
  ]);

  foodPosts = signal<Post[]>([]);
  moviePosts = signal<Post[]>([]);
  travelPosts = signal<Post[]>([]);
  fashionPosts = signal<Post[]>([]);
  skincarePosts = signal<Post[]>([]);

  ngOnInit() {
    // Load food posts from blog-posts.data.ts
    this.foodPosts.set(BLOG_POSTS.slice(0, 3).map(post => ({
      id: post.id,
      title: post.title,
      excerpt: post.excerpt,
      image: post.image,
      category: 'Food'
    })));

    // Load movie posts from JSON
    this.moviePosts.set(moviesData.slice(0, 3).map(post => ({
      id: post.id,
      title: post.title,
      excerpt: post.excerpt,
      image: post.image,
      category: 'Movies'
    })));

    // Load travel posts from JSON
    this.travelPosts.set(travelData.slice(0, 3).map(post => ({
      id: post.id,
      title: post.title,
      excerpt: post.excerpt,
      image: post.image,
      category: 'Travel'
    })));

    // Load fashion posts from JSON
    this.fashionPosts.set(fashionData.slice(0, 3).map(post => ({
      id: post.id,
      title: post.title,
      excerpt: post.excerpt,
      image: post.image,
      category: 'Fashion'
    })));

    // Load skincare posts from JSON
    this.skincarePosts.set(skincareData.slice(0, 3).map(post => ({
      id: post.id,
      title: post.title,
      excerpt: post.excerpt,
      image: post.image,
      category: 'Skincare'
    })));
  }
}
