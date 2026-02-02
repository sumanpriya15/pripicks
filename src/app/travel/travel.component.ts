import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import travelData from '../Data/travel.json';

interface TravelPlace {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  location: string;
}

interface CollagePlace {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  size?: 'small' | 'medium' | 'large';
}

interface TravelPost {
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
  selector: 'app-travel',
  imports: [CommonModule, RouterLink],
  templateUrl: './travel.component.html',
  styleUrl: './travel.component.css'
})
export class TravelComponent {
  // Travel blog posts from JSON
  travelPosts = signal<TravelPost[]>(travelData);
  
  // Hero Banner Content
  heroBanner = signal({
    title: 'Explore India',
    subtitle: 'Incredible Destinations Await',
    description: 'Discover the beauty, heritage, and diversity of India - from pristine beaches to royal palaces and serene mountain escapes'
  });

  // Top 10 Destinations
  topDestinations = signal<TravelPlace[]>([
    {
      id: 1,
      title: 'Goa',
      description: 'Sun-kissed beaches, vibrant nightlife, and Portuguese heritage make Goa India\'s favorite beach destination.',
      imageUrl: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&h=800&fit=crop',
      location: 'Goa, India'
    },
    {
      id: 2,
      title: 'Jaipur',
      description: 'The Pink City enchants with majestic forts, royal palaces, and colorful bazaars showcasing Rajasthan\'s rich heritage.',
      imageUrl: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600&h=800&fit=crop',
      location: 'Rajasthan, India'
    },
    {
      id: 3,
      title: 'Andaman Islands',
      description: 'Crystal clear waters, white sandy beaches, and vibrant coral reefs create a tropical paradise.',
      imageUrl: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=800&fit=crop',
      location: 'Andaman & Nicobar'
    },
    {
      id: 4,
      title: 'Udaipur',
      description: 'The City of Lakes captivates with stunning palaces, romantic lakeside views, and timeless elegance.',
      imageUrl: 'https://images.unsplash.com/photo-1604999333679-b86d54738315?w=600&h=800&fit=crop',
      location: 'Rajasthan, India'
    },
    {
      id: 5,
      title: 'Kerala',
      description: 'God\'s Own Country offers serene backwaters, lush greenery, and Ayurvedic wellness retreats.',
      imageUrl: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&h=800&fit=crop',
      location: 'Kerala, India'
    },
    {
      id: 6,
      title: 'Manali',
      description: 'Nestled in the Himalayas, Manali offers snow-capped peaks, adventure sports, and peaceful mountain vibes.',
      imageUrl: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&h=800&fit=crop',
      location: 'Himachal Pradesh'
    },
    {
      id: 7,
      title: 'Jodhpur',
      description: 'The Blue City mesmerizes with its azure houses, mighty Mehrangarh Fort, and desert landscape.',
      imageUrl: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&h=800&fit=crop',
      location: 'Rajasthan, India'
    },
    {
      id: 8,
      title: 'Varanasi',
      description: 'The spiritual heart of India, where ancient traditions meet the sacred Ganges River.',
      imageUrl: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=600&h=800&fit=crop',
      location: 'Uttar Pradesh'
    },
    {
      id: 9,
      title: 'Rishikesh',
      description: 'Yoga capital and adventure hub on the banks of the Ganges, perfect for spiritual seekers and thrill-seekers.',
      imageUrl: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&h=800&fit=crop',
      location: 'Uttarakhand, India'
    },
    {
      id: 10,
      title: 'Leh-Ladakh',
      description: 'A high-altitude desert with stunning monasteries, dramatic landscapes, and unmatched natural beauty.',
      imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=800&fit=crop',
      location: 'Ladakh, India'
    }
  ]);

  // Beach Places Collage
  beachPlaces = signal<CollagePlace[]>([
    {
      title: 'Goa Beaches',
      subtitle: 'Coastal Paradise',
      description: 'Golden sands, swaying palms, and endless Arabian Sea views. Experience the ultimate beach getaway.',
      imageUrl: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=700&h=1000&fit=crop',
      size: 'large'
    },
    {
      title: 'Andaman Islands',
      subtitle: 'Tropical Heaven',
      description: 'Pristine beaches, turquoise waters, and coral reefs. India\'s most exotic beach destination.',
      imageUrl: 'https://images.unsplash.com/photo-1589716223743-b01cdc8e5083?w=700&h=1000&fit=crop',
      size: 'large'
    },
    {
      title: 'Havelock Island',
      subtitle: 'Azure Waters',
      description: 'Crystal clear waters and white sandy beaches create a picture-perfect tropical escape.',
      imageUrl: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=700&h=1000&fit=crop',
      size: 'medium'
    },
    {
      title: 'Varkala Beach',
      subtitle: 'Cliff & Sea',
      description: 'Dramatic cliffs meet pristine beaches in Kerala\'s most scenic coastal destination.',
      imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700&h=1000&fit=crop',
      size: 'medium'
    }
  ]);

  // Royal Places Collage
  royalPlaces = signal<CollagePlace[]>([
    {
      title: 'Jaipur Palaces',
      subtitle: 'The Pink City',
      description: 'Majestic forts and opulent palaces showcase Rajasthan\'s royal heritage and architectural brilliance.',
      imageUrl: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=700&h=1000&fit=crop',
      size: 'large'
    },
    {
      title: 'Udaipur City Palace',
      subtitle: 'Lake Palace Marvel',
      description: 'Overlooking Lake Pichola, this palace complex epitomizes Rajputana grandeur and romance.',
      imageUrl: 'https://images.unsplash.com/photo-1604999333679-b86d54738315?w=700&h=1000&fit=crop',
      size: 'large'
    },
    {
      title: 'Jodhpur Fort',
      subtitle: 'Mehrangarh Magnificence',
      description: 'Rising above the Blue City, this massive fort stands as a testament to Rajput valor and artistry.',
      imageUrl: 'https://images.unsplash.com/photo-1609919860831-c8f29f5b0d42?w=700&h=1000&fit=crop',
      size: 'medium'
    },
    {
      title: 'Mysore Palace',
      subtitle: 'Southern Splendor',
      description: 'Indo-Saracenic architecture adorned with intricate carvings and royal opulence.',
      imageUrl: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=700&h=1000&fit=crop',
      size: 'medium'
    }
  ]);

  // Minimal Aesthetic Places Collage
  minimalPlaces = signal<CollagePlace[]>([
    {
      title: 'Manali Serenity',
      subtitle: 'Mountain Peace',
      description: 'Snow-capped peaks and peaceful valleys create the perfect minimal escape in the Himalayas.',
      imageUrl: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=700&h=1000&fit=crop',
      size: 'large'
    },
    {
      title: 'Kerala Backwaters',
      subtitle: 'Tranquil Waters',
      description: 'Gentle ripples, green palms, and peaceful houseboats offer pure tranquility.',
      imageUrl: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=700&h=1000&fit=crop',
      size: 'large'
    },
    {
      title: 'Rishikesh Calm',
      subtitle: 'Spiritual Retreat',
      description: 'Sacred Ganges, yoga vibes, and mountain air create a peaceful sanctuary.',
      imageUrl: 'https://images.unsplash.com/photo-1591300255581-e24b8c2af4de?w=700&h=1000&fit=crop',
      size: 'medium'
    },
    {
      title: 'Coorg Hills',
      subtitle: 'Coffee Country',
      description: 'Misty hills, coffee plantations, and serene landscapes define this peaceful escape.',
      imageUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=700&h=1000&fit=crop',
      size: 'medium'
    }
  ]);

  // Call to Action Content
  ctaContent = signal({
    title: 'Ready to Explore India?',
    description: 'Start planning your perfect Indian adventure today',
    buttonText: 'Discover More'
  });
}
