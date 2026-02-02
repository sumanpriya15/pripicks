import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import skincareData from '../Data/skincare.json';

interface SkincarePost {
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
  selector: 'app-skincare',
  imports: [CommonModule, RouterLink],
  templateUrl: './skincare.component.html',
  styleUrl: './skincare.component.css'
})
export class SkincareComponent {
  posts = signal<SkincarePost[]>(skincareData);
}
