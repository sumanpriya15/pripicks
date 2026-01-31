import { Component, signal, computed, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';

export interface Movie {
  id: number;
  title: string;
  description: string;
  image: string;
  rating: number;
  year: number;
  duration: string;
  genre: string[];
  maturityRating: string;
}

export interface MovieCategory {
  name: string;
  movies: Movie[];
}

@Component({
  selector: 'app-movies',
  imports: [],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviesComponent implements OnInit, OnDestroy {
  private autoPlayInterval: ReturnType<typeof setInterval> | null = null;

  // Hero carousel movies
  heroMovies = signal<Movie[]>([
    {
      id: 1,
      title: 'The Last Horizon',
      description: 'In a world where the sun is dying, a team of scientists embarks on a perilous journey through space to reignite humanity\'s last hope. A visually stunning epic that explores sacrifice, love, and the indomitable human spirit.',
      image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1920&q=80',
      rating: 9.2,
      year: 2025,
      duration: '2h 28m',
      genre: ['Sci-Fi', 'Drama', 'Adventure'],
      maturityRating: 'PG-13'
    },
    {
      id: 2,
      title: 'Midnight in Tokyo',
      description: 'A gripping thriller that follows a detective navigating the neon-lit underworld of Tokyo\'s criminal empire. When a series of mysterious disappearances leads to an ancient conspiracy, nothing is as it seems.',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1920&q=80',
      rating: 8.8,
      year: 2025,
      duration: '2h 15m',
      genre: ['Thriller', 'Mystery', 'Crime'],
      maturityRating: 'R'
    },
    {
      id: 3,
      title: 'Echoes of Tomorrow',
      description: 'A mind-bending journey through parallel universes where a physicist discovers that every choice creates a new reality. But when her alternate selves start dying, she must find the killer across infinite dimensions.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80',
      rating: 9.0,
      year: 2025,
      duration: '2h 35m',
      genre: ['Sci-Fi', 'Thriller'],
      maturityRating: 'PG-13'
    },
    {
      id: 4,
      title: 'The Wild Heart',
      description: 'An emotional journey of a wildlife photographer who ventures into the untamed wilderness to document endangered species. What begins as a documentary becomes a transformative odyssey of self-discovery.',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1920&q=80',
      rating: 8.5,
      year: 2025,
      duration: '1h 58m',
      genre: ['Documentary', 'Adventure', 'Drama'],
      maturityRating: 'PG'
    }
  ]);

  currentHeroIndex = signal(0);

  currentHeroMovie = computed(() => this.heroMovies()[this.currentHeroIndex()]);

  // Movie categories
  movieCategories = signal<MovieCategory[]>([
    {
      name: 'Trending Now',
      movies: [
        { id: 5, title: 'Shadow Protocol', description: 'Elite spy thriller', image: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=500&q=80', rating: 8.7, year: 2025, duration: '2h 10m', genre: ['Action', 'Thriller'], maturityRating: 'R' },
        { id: 6, title: 'Neon Dreams', description: 'Cyberpunk adventure', image: 'https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=500&q=80', rating: 8.4, year: 2025, duration: '2h 05m', genre: ['Sci-Fi', 'Action'], maturityRating: 'PG-13' },
        { id: 7, title: 'The Silent House', description: 'Psychological horror', image: 'https://images.unsplash.com/photo-1520034475321-cbe63696469a?w=500&q=80', rating: 7.9, year: 2024, duration: '1h 45m', genre: ['Horror', 'Thriller'], maturityRating: 'R' },
        { id: 8, title: 'Ocean\'s Depth', description: 'Deep sea mystery', image: 'https://images.unsplash.com/photo-1559825481-12a05cc00344?w=500&q=80', rating: 8.1, year: 2025, duration: '2h 00m', genre: ['Adventure', 'Mystery'], maturityRating: 'PG-13' },
        { id: 9, title: 'Code Red', description: 'Cyber warfare action', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&q=80', rating: 8.3, year: 2025, duration: '2h 12m', genre: ['Action', 'Thriller'], maturityRating: 'R' },
        { id: 10, title: 'Aurora Rising', description: 'Space opera epic', image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=500&q=80', rating: 8.9, year: 2025, duration: '2h 45m', genre: ['Sci-Fi', 'Adventure'], maturityRating: 'PG-13' },
      ]
    },
    {
      name: 'Top Rated',
      movies: [
        { id: 11, title: 'The Grand Illusion', description: 'Period drama masterpiece', image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500&q=80', rating: 9.4, year: 2024, duration: '2h 50m', genre: ['Drama', 'History'], maturityRating: 'PG-13' },
        { id: 12, title: 'Whispers in the Wind', description: 'Romantic drama', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=80', rating: 9.1, year: 2025, duration: '2h 08m', genre: ['Romance', 'Drama'], maturityRating: 'PG' },
        { id: 13, title: 'City of Angels', description: 'Urban fantasy', image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=500&q=80', rating: 9.0, year: 2024, duration: '2h 22m', genre: ['Fantasy', 'Drama'], maturityRating: 'PG-13' },
        { id: 14, title: 'The Last Stand', description: 'War epic', image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=500&q=80', rating: 9.2, year: 2025, duration: '2h 55m', genre: ['War', 'Drama'], maturityRating: 'R' },
        { id: 15, title: 'Eternal Flame', description: 'Love story', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80', rating: 8.8, year: 2024, duration: '1h 55m', genre: ['Romance'], maturityRating: 'PG' },
        { id: 16, title: 'Beyond the Stars', description: 'Space exploration', image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=500&q=80', rating: 9.3, year: 2025, duration: '2h 40m', genre: ['Sci-Fi', 'Adventure'], maturityRating: 'PG' },
      ]
    },
    {
      name: 'Action & Adventure',
      movies: [
        { id: 17, title: 'Thunder Strike', description: 'Military action', image: 'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?w=500&q=80', rating: 8.2, year: 2025, duration: '2h 15m', genre: ['Action'], maturityRating: 'R' },
        { id: 18, title: 'Desert Storm', description: 'Desert adventure', image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=500&q=80', rating: 7.8, year: 2024, duration: '2h 00m', genre: ['Action', 'Adventure'], maturityRating: 'PG-13' },
        { id: 19, title: 'Ice Breaker', description: 'Arctic thriller', image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=500&q=80', rating: 8.0, year: 2025, duration: '1h 58m', genre: ['Action', 'Thriller'], maturityRating: 'PG-13' },
        { id: 20, title: 'Jungle Hunt', description: 'Survival adventure', image: 'https://images.unsplash.com/photo-1440342359743-84fcb8c21f21?w=500&q=80', rating: 7.9, year: 2024, duration: '2h 05m', genre: ['Adventure'], maturityRating: 'PG-13' },
        { id: 21, title: 'Sky Warriors', description: 'Aerial combat', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&q=80', rating: 8.4, year: 2025, duration: '2h 20m', genre: ['Action', 'War'], maturityRating: 'PG-13' },
        { id: 22, title: 'Mountain Peak', description: 'Climbing thriller', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500&q=80', rating: 8.1, year: 2025, duration: '2h 10m', genre: ['Adventure', 'Drama'], maturityRating: 'PG' },
      ]
    },
    {
      name: 'Sci-Fi & Fantasy',
      movies: [
        { id: 23, title: 'Quantum Leap', description: 'Time travel epic', image: 'https://images.unsplash.com/photo-1534996858221-380b92700493?w=500&q=80', rating: 8.6, year: 2025, duration: '2h 30m', genre: ['Sci-Fi'], maturityRating: 'PG-13' },
        { id: 24, title: 'Dragon\'s Realm', description: 'Fantasy adventure', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&q=80', rating: 8.3, year: 2024, duration: '2h 45m', genre: ['Fantasy'], maturityRating: 'PG-13' },
        { id: 25, title: 'Android Dreams', description: 'AI thriller', image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&q=80', rating: 8.7, year: 2025, duration: '2h 18m', genre: ['Sci-Fi', 'Thriller'], maturityRating: 'R' },
        { id: 26, title: 'Mystic Portal', description: 'Magical adventure', image: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=500&q=80', rating: 7.8, year: 2024, duration: '2h 02m', genre: ['Fantasy', 'Adventure'], maturityRating: 'PG' },
        { id: 27, title: 'Alien Contact', description: 'First contact story', image: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=500&q=80', rating: 8.9, year: 2025, duration: '2h 35m', genre: ['Sci-Fi'], maturityRating: 'PG-13' },
        { id: 28, title: 'Virtual Reality', description: 'VR thriller', image: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=500&q=80', rating: 8.2, year: 2025, duration: '2h 08m', genre: ['Sci-Fi', 'Action'], maturityRating: 'PG-13' },
      ]
    },
    {
      name: 'Drama',
      movies: [
        { id: 29, title: 'Broken Chains', description: 'Historical drama', image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&q=80', rating: 9.1, year: 2024, duration: '2h 40m', genre: ['Drama', 'History'], maturityRating: 'R' },
        { id: 30, title: 'Silent Voices', description: 'Family drama', image: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=500&q=80', rating: 8.8, year: 2025, duration: '2h 15m', genre: ['Drama'], maturityRating: 'PG-13' },
        { id: 31, title: 'The Artist', description: 'Biographical drama', image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=500&q=80', rating: 8.5, year: 2024, duration: '2h 20m', genre: ['Drama', 'Biography'], maturityRating: 'PG-13' },
        { id: 32, title: 'Lost Generation', description: 'Coming of age', image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&q=80', rating: 8.3, year: 2025, duration: '2h 05m', genre: ['Drama'], maturityRating: 'R' },
        { id: 33, title: 'Harbor Lights', description: 'Romantic drama', image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=500&q=80', rating: 8.0, year: 2024, duration: '1h 55m', genre: ['Drama', 'Romance'], maturityRating: 'PG' },
        { id: 34, title: 'The Verdict', description: 'Courtroom drama', image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=500&q=80', rating: 8.7, year: 2025, duration: '2h 25m', genre: ['Drama', 'Thriller'], maturityRating: 'R' },
      ]
    }
  ]);

  // Scroll positions for each category
  scrollPositions = signal<{ [key: string]: number }>({});

  ngOnInit() {
    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.nextHeroSlide();
    }, 6000);
  }

  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    }
  }

  resetAutoPlay() {
    this.stopAutoPlay();
    this.startAutoPlay();
  }

  nextHeroSlide() {
    const nextIndex = (this.currentHeroIndex() + 1) % this.heroMovies().length;
    this.currentHeroIndex.set(nextIndex);
  }

  prevHeroSlide() {
    const prevIndex = (this.currentHeroIndex() - 1 + this.heroMovies().length) % this.heroMovies().length;
    this.currentHeroIndex.set(prevIndex);
    this.resetAutoPlay();
  }

  goToSlide(index: number) {
    this.currentHeroIndex.set(index);
    this.resetAutoPlay();
  }

  scrollRow(categoryName: string, direction: 'left' | 'right') {
    const container = document.getElementById(`row-${categoryName.replace(/\s+/g, '-')}`);
    if (container) {
      const scrollAmount = container.clientWidth * 0.8;
      const newPosition = direction === 'left' 
        ? container.scrollLeft - scrollAmount 
        : container.scrollLeft + scrollAmount;
      
      container.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
    }
  }

  getStarRating(rating: number): string[] {
    const stars: string[] = [];
    const fullStars = Math.floor(rating / 2);
    const hasHalfStar = (rating / 2) % 1 >= 0.5;
    
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

  trackByMovieId(index: number, movie: Movie): number {
    return movie.id;
  }

  trackByCategoryName(index: number, category: MovieCategory): string {
    return category.name;
  }
}
