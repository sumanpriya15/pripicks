import { Component, signal, inject, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogPost, BLOG_POSTS } from '../../Data/blog-posts.data';

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

  article = signal<BlogPost | null>(null);
  currentImageIndex = signal<number>(0);

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const foundArticle = BLOG_POSTS.find(post => post.id === parseInt(id));
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
