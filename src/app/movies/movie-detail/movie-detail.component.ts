import { Component, signal, computed, OnInit, ChangeDetectionStrategy, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

export interface DetailedMovie {
  id: number;
  title: string;
  description: string;
  synopsis: string;
  image: string;
  posterBanner: string;
  rating: number;
  myRating: number;
  year: number;
  duration: string;
  genre: string[];
  maturityRating: string;
  cast: { name: string; role: string; }[];
  whyWatch: string[];
  availableOn: { platform: string; link: string; }[];
  similarMovies: number[];
}

@Component({
  selector: 'app-movie-detail',
  imports: [CommonModule],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  movie = signal<DetailedMovie | null>(null);

  // Mock detailed movie data - In production, this would come from a service
  private movieDatabase = signal<DetailedMovie[]>([
    {
      id: 1,
      title: 'The Last Horizon',
      description: 'In a world where the sun is dying, a team of scientists embarks on a perilous journey through space to reignite humanity\'s last hope.',
      synopsis: 'In a world where the sun is dying, a team of scientists embarks on a perilous journey through space to reignite humanity\'s last hope. A visually stunning epic that explores sacrifice, love, and the indomitable human spirit. As Earth\'s final days approach, the crew must confront their deepest fears and make impossible choices that will determine the fate of all mankind. Combining breathtaking visual effects with an emotionally powerful narrative, this film redefines what science fiction can achieve.',
      image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1920&q=80',
      posterBanner: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1920&q=80',
      rating: 9.2,
      myRating: 9.5,
      year: 2025,
      duration: '2h 28m',
      genre: ['Sci-Fi', 'Drama', 'Adventure'],
      maturityRating: 'PG-13',
      cast: [
        { name: 'Sarah Mitchell', role: 'Dr. Elena Roberts' },
        { name: 'James Chen', role: 'Captain Marcus Hayes' },
        { name: 'Emma Thompson', role: 'Professor Anna Volkov' },
        { name: 'Michael Jordan', role: 'Engineer David Park' }
      ],
      whyWatch: [
        'Stunning visual effects that push the boundaries of cinema',
        'Deeply emotional story about sacrifice and hope',
        'Outstanding performances from the entire cast',
        'Thought-provoking exploration of humanity\'s will to survive',
        'A soundtrack that perfectly complements the epic scope'
      ],
      availableOn: [
        { platform: 'Netflix', link: 'https://netflix.com' },
        { platform: 'Amazon Prime', link: 'https://primevideo.com' },
        { platform: 'Apple TV+', link: 'https://tv.apple.com' }
      ],
      similarMovies: [2, 3, 6]
    }
  ]);

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const foundMovie = this.movieDatabase().find(m => m.id === id);
    if (foundMovie) {
      this.movie.set(foundMovie);
    }
  }

  getStarRating(rating: number): ('full' | 'half' | 'empty')[] {
    const stars: ('full' | 'half' | 'empty')[] = [];
    const fullStars = Math.floor(rating / 2);
    const hasHalfStar = rating % 2 >= 1;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push('full');
    }
    if (hasHalfStar) {
      stars.push('half');
    }
    while (stars.length < 5) {
      stars.push('empty');
    }
    return stars;
  }

  goBack() {
    this.router.navigate(['/movies']);
  }
}
