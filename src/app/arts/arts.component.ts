import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import fashionData from '../Data/fashion.json';

interface FashionPost {
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
  selector: 'app-arts',
  imports: [CommonModule, RouterLink],
  templateUrl: './arts.component.html',
  styleUrl: './arts.component.css'
})
export class ArtsComponent {
  fashionPosts = signal<FashionPost[]>(fashionData);
}
