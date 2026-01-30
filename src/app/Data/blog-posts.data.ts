export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  images: string[];
  author: string;
  date: string;
  category: string;
  readTime: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: 'The Art of French Pastry: Mastering the Perfect Croissant',
    excerpt: 'Discover the secrets behind creating buttery, flaky croissants that rival those from Parisian bakeries. Learn the traditional techniques passed down through generations.',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=800&h=600&fit=crop'
    ],
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
    images: [
      'https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1495534846840-f51f7f6d09c3?w=800&h=600&fit=crop'
    ],
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
    images: [
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=800&h=600&fit=crop'
    ],
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
    images: [
      'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&h=600&fit=crop'
    ],
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
    images: [
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1549931319-a545dcf3bc29?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1590397824017-5b0e9cd08e38?w=800&h=600&fit=crop'
    ],
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
    images: [
      'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=800&h=600&fit=crop'
    ],
    author: 'Priya Sharma',
    date: 'January 18, 2026',
    category: 'World Cuisine',
    readTime: '15 min read'
  }
];

export const BLOG_CATEGORIES: string[] = [
  'All',
  'Baking',
  'Recipes',
  'Techniques',
  'World Cuisine',
  'Sustainable'
];
