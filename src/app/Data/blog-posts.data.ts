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
  servings?: string;
  prepTime?: string;
  ingredients?: string[];
  steps?: string[];
  tips?: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: 'My Go-To Restaurant-Style Butter Chicken at Home',
    excerpt: 'That creamy, rich butter chicken you crave? This is my foolproof recipe that tastes EXACTLY like your favorite restaurant — perfect for cozy weeknight dinners!',
    image: 'https://placehold.co/800x600/FF6B35/FFFFFF?text=Butter+Chicken',
    images: [
      'https://placehold.co/800x600/FF6B35/FFFFFF?text=Butter+Chicken'
    ],
    author: 'PriPicks Kitchen',
    date: 'January 28, 2026',
    category: 'Non-Veg Favourites',
    readTime: '45 min',
    servings: '4-6 people',
    prepTime: '15 min',
    ingredients: [
      '500g boneless chicken, cubed',
      '1 cup yogurt',
      '2 tbsp ginger-garlic paste',
      '1 tsp red chili powder',
      '1/2 tsp turmeric powder',
      '1 cup tomato puree',
      '2 tbsp butter',
      '1 tbsp oil',
      '1 tsp garam masala',
      '1 tsp kasuri methi (dried fenugreek)',
      '1/2 cup heavy cream',
      'Salt to taste',
      'Fresh cilantro for garnish'
    ],
    steps: [
      'Marinate chicken with yogurt, 1 tbsp ginger-garlic paste, chili powder, turmeric, and salt for 30 minutes (or overnight for best results).',
      'Heat butter and oil in a pan. Add remaining ginger-garlic paste and sauté until fragrant (about 1 minute).',
      'Add marinated chicken and cook on high heat for 5-7 minutes until lightly browned on all sides.',
      'Pour in tomato puree and cook for 10-12 minutes until oil separates, stirring occasionally.',
      'Add garam masala and kasuri methi. Mix well and cook for 2 minutes.',
      'Lower heat and stir in heavy cream. Simmer for 5 minutes until sauce thickens.',
      'Taste and adjust salt. Garnish with fresh cilantro and a drizzle of cream.',
      'Serve hot with naan, roti, or basmati rice.'
    ],
    tips: [
      'Kasuri methi adds that authentic restaurant flavor — don\'t skip it! Crush it between your palms before adding.',
      'For extra richness, add 1 tbsp of honey or a pinch of sugar to balance the tanginess.',
      'Leftovers taste even better the next day as flavors meld together. Store in airtight container for up to 3 days.'
    ]
  },
  {
    id: 2,
    title: 'Easy 20-Min Paneer Tikka (No Tandoor Needed!)',
    excerpt: 'Crispy on the outside, soft inside — this paneer tikka comes together in just 20 minutes with pantry spices. Your new go-to party starter!',
    image: 'https://placehold.co/800x600/F7931E/FFFFFF?text=Paneer+Tikka',
    images: [
      'https://placehold.co/800x600/F7931E/FFFFFF?text=Paneer+Tikka'
    ],
    author: 'PriPicks Kitchen',
    date: 'January 26, 2026',
    category: 'Quick Meals',
    readTime: '20 min',
    servings: '4 people',
    prepTime: '10 min',
    ingredients: [
      '400g paneer, cubed',
      '1 bell pepper, cubed',
      '1 onion, cubed',
      '1/2 cup thick yogurt',
      '1 tbsp ginger-garlic paste',
      '1 tsp red chili powder',
      '1/2 tsp turmeric powder',
      '1 tsp garam masala',
      '1 tbsp lemon juice',
      '2 tbsp oil',
      'Salt to taste',
      'Chaat masala for sprinkling'
    ],
    steps: [
      'Mix yogurt, ginger-garlic paste, chili powder, turmeric, garam masala, lemon juice, and salt in a bowl.',
      'Add paneer cubes, bell pepper, and onion. Coat everything well with the marinade. Let sit for 10 minutes.',
      'Heat oil in a non-stick pan or grill pan over medium-high heat.',
      'Thread marinated paneer and vegetables onto skewers (or just add directly to pan).',
      'Cook for 3-4 minutes per side until paneer develops golden-brown spots and vegetables soften.',
      'Remove from heat and sprinkle with chaat masala and fresh lemon juice.',
      'Serve immediately with mint chutney and onion rings.'
    ],
    tips: [
      'Pat paneer dry before marinating to help it absorb flavors better and get crispier.',
      'Don\'t skip the chaat masala sprinkle at the end — it adds that tangy street-food punch!',
      'For smoky flavor, hold a piece of charcoal with tongs over a flame until red-hot, place in a small bowl on top of the tikka, drizzle with ghee, and cover for 2 minutes.'
    ]
  },
  {
    id: 3,
    title: 'One-Pot Dal Tadka — Comfort in a Bowl',
    excerpt: 'This is the dal I grew up eating — warm, cozy, and packed with protein. Made in one pot with simple ingredients you already have!',
    image: 'https://placehold.co/800x600/FDB827/FFFFFF?text=Dal+Tadka',
    images: [
      'https://placehold.co/800x600/FDB827/FFFFFF?text=Dal+Tadka'
    ],
    author: 'PriPicks Kitchen',
    date: 'January 24, 2026',
    category: 'One-Pot Magic',
    readTime: '30 min',
    servings: '4-5 people',
    prepTime: '5 min',
    ingredients: [
      '1 cup toor dal (split pigeon peas)',
      '3 cups water',
      '1/2 tsp turmeric powder',
      '1 tomato, chopped',
      '2 green chilies, slit',
      '1 tbsp ghee or oil',
      '1 tsp cumin seeds',
      '1/2 tsp mustard seeds',
      '2-3 garlic cloves, crushed',
      '1 dried red chili',
      'Pinch of asafoetida (hing)',
      'Salt to taste',
      'Fresh cilantro for garnish'
    ],
    steps: [
      'Rinse dal thoroughly and pressure cook with water, turmeric, and salt for 3-4 whistles (or about 15 minutes). Dal should be soft and mushy.',
      'Mash dal lightly with the back of a spoon. Add chopped tomatoes and green chilies. Mix well.',
      'For the tadka (tempering): Heat ghee in a small pan on medium heat.',
      'Add cumin seeds, mustard seeds, and let them splutter. Add crushed garlic and dried red chili. Sauté until garlic turns golden.',
      'Add a pinch of asafoetida and immediately pour this tempering over the cooked dal.',
      'Mix everything together and let it simmer for 2-3 minutes.',
      'Garnish with fresh cilantro and serve hot with rice or roti.'
    ],
    tips: [
      'The tadka (tempering) is KEY! Don\'t rush it — let those spices really bloom in the hot ghee for maximum flavor.',
      'Consistency should be like a thick soup. Add hot water if it\'s too thick, or simmer longer if too thin.',
      'A squeeze of lemon juice just before serving adds a lovely tangy kick!'
    ]
  },
  {
    id: 4,
    title: 'Street-Style Pav Bhaji (Better Than Mumbai!)',
    excerpt: 'Buttery, spicy, and SO addictive — this pav bhaji recipe brings Mumbai street food vibes straight to your kitchen. Trust me, you\'ll make this on repeat!',
    image: 'https://placehold.co/800x600/C1272D/FFFFFF?text=Pav+Bhaji',
    images: [
      'https://placehold.co/800x600/C1272D/FFFFFF?text=Pav+Bhaji'
    ],
    author: 'PriPicks Kitchen',
    date: 'January 22, 2026',
    category: 'Veg Specials',
    readTime: '40 min',
    servings: '4 people',
    prepTime: '15 min',
    ingredients: [
      '2 large potatoes, boiled and mashed',
      '1 cup cauliflower, finely chopped',
      '1 cup peas',
      '1 bell pepper, chopped',
      '2 large tomatoes, pureed',
      '1 onion, finely chopped',
      '2 tbsp pav bhaji masala',
      '1 tsp red chili powder',
      '4 tbsp butter',
      '1 tbsp oil',
      '8 pav buns',
      'Lemon wedges and chopped onions for serving',
      'Salt to taste',
      'Fresh cilantro for garnish'
    ],
    steps: [
      'Heat 2 tbsp butter and oil in a large pan. Sauté chopped onions until translucent.',
      'Add cauliflower, peas, and bell pepper. Cook for 5-7 minutes until vegetables soften.',
      'Add tomato puree, pav bhaji masala, chili powder, and salt. Cook for 5 minutes until oil separates.',
      'Add mashed potatoes and mix well. Use a masher to blend everything into a thick, chunky mixture.',
      'Add 1 cup water (or more) to reach desired consistency. Simmer for 10 minutes, mashing occasionally.',
      'Add remaining butter and mix until it melts into the bhaji. Taste and adjust seasoning.',
      'Slice pav buns horizontally. Toast them on a griddle with butter until golden and crispy.',
      'Serve hot bhaji topped with a cube of butter, garnished with cilantro, onions, and lemon wedges alongside toasted pav.'
    ],
    tips: [
      'Don\'t be shy with the butter — it\'s what makes street-style pav bhaji so irresistible!',
      'The mashing technique matters: keep some chunks for texture but mash well enough that it\'s cohesive.',
      'Toast the pav with LOTS of butter on both sides until crispy — this is non-negotiable for authentic flavor!'
    ]
  },
  {
    id: 5,
    title: 'Quick Veg Biryani in Under 30 Minutes (Yes, Really!)',
    excerpt: 'Who says biryani takes hours? This shortcut version delivers all those aromatic, layered flavors in half the time — perfect for busy weeknights!',
    image: 'https://placehold.co/800x600/FF9933/FFFFFF?text=Veg+Biryani',
    images: [
      'https://placehold.co/800x600/FF9933/FFFFFF?text=Veg+Biryani'
    ],
    author: 'PriPicks Kitchen',
    date: 'January 20, 2026',
    category: 'Biryani Love',
    readTime: '30 min',
    servings: '4 people',
    prepTime: '10 min',
    ingredients: [
      '2 cups basmati rice, soaked for 15 min',
      '400g chicken or vegetables, cut into pieces',
      '1 cup yogurt',
      '2 onions, thinly sliced',
      '2 tomatoes, chopped',
      '2 tbsp ginger-garlic paste',
      '2 tsp biryani masala',
      '1 tsp red chili powder',
      '1/2 tsp turmeric',
      '4 tbsp ghee or oil',
      '1/4 cup milk with pinch of saffron',
      '1/4 cup fried onions (store-bought)',
      'Whole spices: 2 bay leaves, 4 cloves, 2 cardamom, 1-inch cinnamon',
      'Salt to taste',
      'Fresh mint and cilantro'
    ],
    steps: [
      'Heat 2 tbsp ghee in a pot. Add whole spices and sliced onions. Fry until golden brown.',
      'Add ginger-garlic paste, tomatoes, and cook for 3-4 minutes.',
      'Add chicken/vegetables, yogurt, biryani masala, chili powder, turmeric, and salt. Cook covered for 10 minutes until 80% done.',
      'Meanwhile, boil rice in salted water until 70% cooked (rice should still have a bite). Drain immediately.',
      'Layer the partially cooked rice over the curry. Sprinkle saffron milk, fried onions, mint, and cilantro on top.',
      'Drizzle remaining ghee. Cover with a tight lid and cook on lowest heat for 10 minutes (dum cooking).',
      'Let it rest for 5 minutes before opening. Gently fluff and mix with a fork.',
      'Serve hot with raita and sliced onions.'
    ],
    tips: [
      'Soaking rice is crucial — it helps achieve long, separate grains. Don\'t skip this step!',
      'The key to quick biryani: cook rice and curry simultaneously, then layer and steam together.',
      'For authentic flavor, place a tawa (griddle) under the pot during dum to prevent burning while allowing even heat distribution.'
    ]
  },
  {
    id: 6,
    title: 'Crispy Masala Dosa — My Nani\'s Secret Recipe',
    excerpt: 'Paper-thin, golden, and oh-so-crispy! This is the dosa recipe passed down from my grandmother — complete with the perfect potato filling and coconut chutney.',
    image: 'https://placehold.co/800x600/E8A87C/FFFFFF?text=Masala+Dosa',
    images: [
      'https://placehold.co/800x600/E8A87C/FFFFFF?text=Masala+Dosa'
    ],
    author: 'PriPicks Kitchen',
    date: 'January 18, 2026',
    category: 'Comfort Food',
    readTime: '1 hr 20 min',
    servings: '6-8 dosas',
    prepTime: '8 hours (fermentation)',
    ingredients: [
      'For Batter: 1 cup rice, 1/4 cup urad dal, 1/4 tsp fenugreek seeds, salt',
      'For Filling: 4 potatoes boiled and mashed, 1 onion chopped, 2 green chilies, 1 tsp mustard seeds, curry leaves, 1/2 tsp turmeric, salt',
      'For Chutney: 1 cup fresh coconut, 2 green chilies, 1-inch ginger, 1 tbsp roasted chana dal, salt',
      'For Sambar: 1/2 cup toor dal, mixed vegetables, tamarind, sambar powder, mustard seeds, curry leaves',
      'Oil for cooking dosas'
    ],
    steps: [
      'Soak rice and fenugreek together for 4-5 hours. Soak urad dal separately for 4-5 hours.',
      'Grind urad dal with minimal water until fluffy and light. Grind rice to a slightly coarse batter. Mix both, add salt, and ferment overnight (8-12 hours).',
      'For filling: Temper mustard seeds and curry leaves in oil. Add onions, green chilies, turmeric. Add mashed potatoes, salt, and mix well.',
      'Heat a non-stick or cast-iron tawa. Spread a ladleful of batter in a circular motion from center outward to make a thin crepe.',
      'Drizzle oil around edges. Cook until bottom turns golden and crispy (2-3 minutes).',
      'Place potato filling in center, fold dosa in half or roll it up.',
      'Serve immediately with coconut chutney (grind all chutney ingredients with water) and hot sambar.'
    ],
    tips: [
      'Fermentation is CRUCIAL — it gives dosa that signature tangy flavor and makes it crispy. Don\'t rush it!',
      'The tawa should be hot but not smoking. Sprinkle water droplets — if they sizzle and evaporate immediately, it\'s ready.',
      'For extra crispy dosas, use more oil and spread the batter as thin as possible. Practice makes perfect!'
    ]
  },
  {
    id: 7,
    title: 'Classic Chicken Curry — Mom\'s Special Recipe',
    excerpt: 'This is the chicken curry that reminds me of home — tender pieces in a rich, aromatic gravy that\'s perfect with rice or roti!',
    image: 'https://placehold.co/800x600/B8860B/FFFFFF?text=Chicken+Curry',
    images: [
      'https://placehold.co/800x600/B8860B/FFFFFF?text=Chicken+Curry'
    ],
    author: 'PriPicks Kitchen',
    date: 'January 16, 2026',
    category: 'Non-Veg Favourites',
    readTime: '40 min',
    servings: '4 people',
    prepTime: '10 min',
    ingredients: [
      '500g chicken, cut into pieces',
      '2 onions, finely chopped',
      '2 tomatoes, pureed',
      '2 tbsp ginger-garlic paste',
      '1 tsp red chili powder',
      '1/2 tsp turmeric powder',
      '1 tsp coriander powder',
      '1/2 tsp garam masala',
      '3 tbsp oil',
      'Salt to taste',
      'Fresh cilantro for garnish'
    ],
    steps: [
      'Heat oil in a pan. Add chopped onions and sauté until golden brown.',
      'Add ginger-garlic paste and sauté for 1-2 minutes until raw smell disappears.',
      'Add tomato puree, chili powder, turmeric, coriander powder, and salt. Cook until oil separates.',
      'Add chicken pieces and mix well. Cook on high heat for 5 minutes.',
      'Add 1 cup water, cover, and simmer for 20-25 minutes until chicken is tender.',
      'Sprinkle garam masala and garnish with fresh cilantro.',
      'Serve hot with rice, roti, or naan.'
    ],
    tips: [
      'Browning the onions well adds depth and sweetness to the gravy.',
      'Add a splash of cream or coconut milk for a richer curry.',
      'This curry tastes even better the next day!'
    ]
  },
  {
    id: 8,
    title: 'Punjabi Chole — Spicy Chickpea Curry',
    excerpt: 'Bold, tangy, and oh-so-flavorful! This Punjabi chole is my weekend favorite — pairs perfectly with bhature or kulcha.',
    image: 'https://placehold.co/800x600/8B4513/FFFFFF?text=Punjabi+Chole',
    images: [
      'https://placehold.co/800x600/8B4513/FFFFFF?text=Punjabi+Chole'
    ],
    author: 'PriPicks Kitchen',
    date: 'January 15, 2026',
    category: 'Veg Specials',
    readTime: '35 min',
    servings: '4 people',
    prepTime: '10 min',
    ingredients: [
      '2 cups boiled chickpeas',
      '2 onions, chopped',
      '2 tomatoes, pureed',
      '1 tbsp ginger-garlic paste',
      '2 tsp chole masala',
      '1 tsp red chili powder',
      '1/2 tsp turmeric',
      '1 tsp amchur (dry mango powder)',
      '2 tea bags for color',
      '3 tbsp oil',
      'Salt to taste',
      'Fresh cilantro and sliced onions for garnish'
    ],
    steps: [
      'Boil chickpeas with tea bags for dark color. Drain and set aside.',
      'Heat oil and sauté onions until golden. Add ginger-garlic paste.',
      'Add tomato puree and all spices. Cook until oil separates.',
      'Add boiled chickpeas and mix well. Add 1 cup water.',
      'Simmer for 15-20 minutes, mashing some chickpeas for thick gravy.',
      'Add amchur and adjust salt.',
      'Garnish with cilantro and sliced onions. Serve hot!'
    ],
    tips: [
      'Tea bags give authentic dhaba-style dark color naturally.',
      'Mash some chickpeas to thicken the gravy perfectly.',
      'A squeeze of lemon at the end adds brightness!'
    ]
  },
  {
    id: 9,
    title: 'Quick Poha — Light & Fluffy Breakfast',
    excerpt: 'Ready in 15 minutes! This poha is my go-to breakfast — light, healthy, and packed with flavors. Perfect for busy mornings!',
    image: 'https://placehold.co/800x600/F0E68C/333333?text=Quick+Poha',
    images: [
      'https://placehold.co/800x600/F0E68C/333333?text=Quick+Poha'
    ],
    author: 'PriPicks Kitchen',
    date: 'January 14, 2026',
    category: 'Quick Meals',
    readTime: '15 min',
    servings: '2 people',
    prepTime: '5 min',
    ingredients: [
      '2 cups thick poha (flattened rice)',
      '1 onion, sliced',
      '1 potato, diced small',
      '2 green chilies, slit',
      '1/2 tsp mustard seeds',
      '1/2 tsp turmeric powder',
      '8-10 curry leaves',
      '2 tbsp oil',
      '2 tbsp peanuts',
      'Salt to taste',
      'Lemon juice and fresh cilantro for garnish'
    ],
    steps: [
      'Rinse poha in a colander under running water. Drain and set aside.',
      'Heat oil, add mustard seeds and peanuts. Let them splutter.',
      'Add curry leaves, green chilies, and diced potato. Cook for 5-7 minutes.',
      'Add sliced onions and sauté until translucent.',
      'Add turmeric and salt. Mix in the poha gently.',
      'Cover and cook on low heat for 2-3 minutes.',
      'Squeeze lemon juice, garnish with cilantro, and serve hot!'
    ],
    tips: [
      'Don\'t over-soak the poha — just a quick rinse keeps it fluffy!',
      'Add boiled peas or carrots for extra nutrition.',
      'Roasted peanuts add amazing crunch!'
    ]
  },
  {
    id: 10,
    title: 'Moong Dal Khichdi — Ultimate Comfort Food',
    excerpt: 'Light, nutritious, and so comforting! This one-pot khichdi is perfect when you want something wholesome and easy on the tummy.',
    image: 'https://placehold.co/800x600/DAA520/FFFFFF?text=Moong+Dal+Khichdi',
    images: [
      'https://placehold.co/800x600/DAA520/FFFFFF?text=Moong+Dal+Khichdi'
    ],
    author: 'PriPicks Kitchen',
    date: 'January 13, 2026',
    category: 'Diet Friendly',
    readTime: '25 min',
    servings: '3 people',
    prepTime: '5 min',
    ingredients: [
      '1/2 cup rice',
      '1/2 cup moong dal',
      '1 tsp cumin seeds',
      '1/2 tsp turmeric',
      'Pinch of asafoetida',
      '1 tbsp ghee',
      '3 cups water',
      'Salt to taste',
      'Fresh ginger, grated'
    ],
    steps: [
      'Wash rice and moong dal together thoroughly.',
      'Heat ghee in a pressure cooker. Add cumin seeds and asafoetida.',
      'Add turmeric, rice, dal, water, and salt.',
      'Pressure cook for 3-4 whistles until soft and mushy.',
      'Mash lightly with a spoon for creamy consistency.',
      'Serve hot with ghee, pickle, or papad.'
    ],
    tips: [
      'Add vegetables like carrots or peas for extra nutrition.',
      'A tadka of ghee and cumin on top elevates this dish!',
      'Perfect comfort food when you\'re under the weather.'
    ]
  },
  {
    id: 11,
    title: 'Aloo Gobi — Classic Dry Vegetable',
    excerpt: 'Simple yet delicious! This aloo gobi is a staple in my kitchen — tender potatoes and cauliflower with aromatic spices.',
    image: 'https://placehold.co/800x600/FFD700/333333?text=Aloo+Gobi',
    images: [
      'https://placehold.co/800x600/FFD700/333333?text=Aloo+Gobi'
    ],
    author: 'PriPicks Kitchen',
    date: 'January 12, 2026',
    category: 'Veg Specials',
    readTime: '25 min',
    servings: '4 people',
    prepTime: '10 min',
    ingredients: [
      '2 potatoes, cubed',
      '1 small cauliflower, cut into florets',
      '1 onion, sliced',
      '1 tomato, chopped',
      '1 tsp cumin seeds',
      '1/2 tsp turmeric',
      '1 tsp coriander powder',
      '1/2 tsp red chili powder',
      '2 tbsp oil',
      'Salt to taste',
      'Fresh cilantro for garnish'
    ],
    steps: [
      'Heat oil, add cumin seeds and let them splutter.',
      'Add onions and sauté until translucent.',
      'Add tomatoes and cook until soft.',
      'Add all spices and mix well.',
      'Add potatoes and cauliflower. Mix thoroughly.',
      'Cover and cook on low heat for 15-20 minutes, stirring occasionally.',
      'Garnish with cilantro and serve hot with roti or paratha.'
    ],
    tips: [
      'Cover the pan to cook vegetables faster and retain moisture.',
      'Add kasuri methi for extra aroma.',
      'Don\'t overcook — vegetables should have a slight bite!'
    ]
  },
  {
    id: 12,
    title: 'Rajma Chawal — Complete Comfort Meal',
    excerpt: 'Nothing beats rajma chawal on a lazy Sunday! Creamy kidney bean curry with perfectly cooked rice — pure comfort in a bowl.',
    image: 'https://placehold.co/800x600/8B0000/FFFFFF?text=Rajma+Chawal',
    images: [
      'https://placehold.co/800x600/8B0000/FFFFFF?text=Rajma+Chawal'
    ],
    author: 'PriPicks Kitchen',
    date: 'January 11, 2026',
    category: 'One-Pot Magic',
    readTime: '40 min',
    servings: '4 people',
    prepTime: '10 min',
    ingredients: [
      '1 cup rajma (kidney beans), soaked overnight',
      '2 onions, chopped',
      '2 tomatoes, pureed',
      '1 tbsp ginger-garlic paste',
      '1 tsp red chili powder',
      '1/2 tsp turmeric',
      '1 tsp garam masala',
      '3 tbsp oil',
      'Salt to taste',
      'Fresh cilantro for garnish'
    ],
    steps: [
      'Pressure cook soaked rajma with water and salt for 5-6 whistles until soft.',
      'Heat oil in a pan. Sauté onions until golden.',
      'Add ginger-garlic paste and sauté for 1 minute.',
      'Add tomato puree and all spices. Cook until oil separates.',
      'Add cooked rajma with its water. Mix well.',
      'Simmer for 10-15 minutes, mashing some beans for thick gravy.',
      'Garnish with cilantro. Serve hot with rice.'
    ],
    tips: [
      'Soaking rajma overnight is essential for proper cooking.',
      'Mash some beans to get that creamy dhaba-style texture.',
      'A dollop of butter on top makes it extra special!'
    ]
  },
  {
    id: 13,
    title: 'Chicken Biryani — Weekend Special',
    excerpt: 'The ultimate crowd-pleaser! This chicken biryani is layered with aromatic rice and tender chicken — perfect for special occasions.',
    image: 'https://placehold.co/800x600/FF6347/FFFFFF?text=Chicken+Biryani',
    images: [
      'https://placehold.co/800x600/FF6347/FFFFFF?text=Chicken+Biryani'
    ],
    author: 'PriPicks Kitchen',
    date: 'January 10, 2026',
    category: 'Biryani Love',
    readTime: '1 hr',
    servings: '5 people',
    prepTime: '20 min',
    ingredients: [
      '500g chicken',
      '2 cups basmati rice',
      '1 cup yogurt',
      '2 onions, sliced and fried',
      '2 tbsp ginger-garlic paste',
      '2 tsp biryani masala',
      'Whole spices (bay leaf, cinnamon, cardamom, cloves)',
      '1/4 cup milk with saffron',
      '4 tbsp ghee',
      'Mint and cilantro leaves',
      'Salt to taste'
    ],
    steps: [
      'Marinate chicken with yogurt, ginger-garlic paste, biryani masala, and salt for 30 minutes.',
      'Boil rice until 70% cooked. Drain.',
      'In a heavy-bottomed pot, heat ghee and add whole spices.',
      'Add marinated chicken and half the fried onions. Cook for 10 minutes.',
      'Layer partially cooked rice on top of chicken.',
      'Sprinkle remaining fried onions, mint, cilantro, and saffron milk.',
      'Cover tightly and cook on lowest heat for 20 minutes (dum).',
      'Let rest for 5 minutes. Mix gently and serve with raita.'
    ],
    tips: [
      'Fried onions are crucial — they add sweetness and color!',
      'Don\'t skip the dum step — it\'s what makes biryani special.',
      'Use a tawa under the pot to prevent burning.'
    ]
  },
  {
    id: 14,
    title: 'Aloo Paratha — Stuffed Flatbread Love',
    excerpt: 'My childhood favorite! These crispy-on-the-outside, fluffy-on-the-inside parathas are perfect with butter and pickle.',
    image: 'https://placehold.co/800x600/DEB887/333333?text=Aloo+Paratha',
    images: [
      'https://placehold.co/800x600/DEB887/333333?text=Aloo+Paratha'
    ],
    author: 'PriPicks Kitchen',
    date: 'January 9, 2026',
    category: 'Quick Meals',
    readTime: '30 min',
    servings: '4 parathas',
    prepTime: '15 min',
    ingredients: [
      '2 cups wheat flour',
      '3 potatoes, boiled and mashed',
      '1 onion, finely chopped',
      '2 green chilies, chopped',
      '1 tsp cumin seeds',
      '1/2 tsp red chili powder',
      '1/2 tsp garam masala',
      'Fresh cilantro, chopped',
      'Salt to taste',
      'Ghee for cooking'
    ],
    steps: [
      'Mix flour with water and knead into soft dough. Rest for 15 minutes.',
      'For filling: Mix mashed potatoes, onions, chilies, spices, and cilantro.',
      'Take a dough ball, roll slightly, place filling in center.',
      'Seal edges and roll gently into a thick flatbread.',
      'Heat tawa and cook paratha with ghee until golden spots appear on both sides.',
      'Serve hot with butter, yogurt, and pickle.'
    ],
    tips: [
      'Don\'t stuff too much filling — it makes rolling difficult.',
      'Cook on medium heat for evenly cooked parathas.',
      'Leftover parathas freeze beautifully!'
    ]
  },
  {
    id: 15,
    title: 'Palak Paneer — Healthy Spinach Curry',
    excerpt: 'Vibrant green and packed with goodness! This palak paneer is creamy, flavorful, and my go-to for a nutritious meal.',
    image: 'https://placehold.co/800x600/228B22/FFFFFF?text=Palak+Paneer',
    images: [
      'https://placehold.co/800x600/228B22/FFFFFF?text=Palak+Paneer'
    ],
    author: 'PriPicks Kitchen',
    date: 'January 8, 2026',
    category: 'Veg Specials',
    readTime: '30 min',
    servings: '4 people',
    prepTime: '10 min',
    ingredients: [
      '500g spinach',
      '200g paneer, cubed',
      '1 onion, chopped',
      '2 tomatoes, chopped',
      '1 tbsp ginger-garlic paste',
      '1 tsp cumin seeds',
      '1/2 tsp garam masala',
      '2 tbsp cream',
      '2 tbsp oil',
      'Salt to taste'
    ],
    steps: [
      'Blanch spinach in boiling water for 2 minutes. Blend into smooth puree.',
      'Heat oil, add cumin seeds and onions. Sauté until golden.',
      'Add ginger-garlic paste and tomatoes. Cook until soft.',
      'Add spinach puree, salt, and garam masala. Simmer for 5 minutes.',
      'Add paneer cubes and cream. Cook for 3-4 minutes.',
      'Serve hot with roti or naan.'
    ],
    tips: [
      'Blanching spinach keeps the vibrant green color.',
      'Don\'t overcook paneer — just warm it through.',
      'A pinch of sugar balances the spinach bitterness.'
    ]
  },
  {
    id: 16,
    title: 'Vegetable Pulao — One-Pot Wonder',
    excerpt: 'Fragrant, colorful, and so easy! This veggie pulao is my weeknight savior — complete meal in one pot.',
    image: 'https://placehold.co/800x600/32CD32/FFFFFF?text=Vegetable+Pulao',
    images: [
      'https://placehold.co/800x600/32CD32/FFFFFF?text=Vegetable+Pulao'
    ],
    author: 'PriPicks Kitchen',
    date: 'January 7, 2026',
    category: 'One-Pot Magic',
    readTime: '30 min',
    servings: '4 people',
    prepTime: '10 min',
    ingredients: [
      '2 cups basmati rice',
      'Mixed vegetables (peas, carrots, beans)',
      '1 onion, sliced',
      '2 bay leaves',
      '4 cloves',
      '2 cardamom',
      '1-inch cinnamon',
      '1 tsp cumin seeds',
      '3 tbsp ghee',
      'Salt to taste'
    ],
    steps: [
      'Wash and soak rice for 15 minutes. Drain.',
      'Heat ghee, add whole spices and let them splutter.',
      'Add onions and sauté until golden.',
      'Add vegetables and sauté for 3-4 minutes.',
      'Add rice and gently mix. Add 4 cups water and salt.',
      'Cook covered on low heat for 15-20 minutes until rice is done.',
      'Fluff with a fork and serve hot with raita.'
    ],
    tips: [
      'Don\'t stir too much — keeps rice grains separate.',
      'Add mint and cilantro for extra flavor.',
      'Perfect ratio: 1 cup rice to 2 cups water.'
    ]
  },
  {
    id: 17,
    title: 'Egg Biryani — Quick Protein-Packed Meal',
    excerpt: 'All the biryani flavors in half the time! This egg biryani is perfect for when you\'re craving biryani but short on time.',
    image: 'https://placehold.co/800x600/FFA500/FFFFFF?text=Egg+Biryani',
    images: [
      'https://placehold.co/800x600/FFA500/FFFFFF?text=Egg+Biryani'
    ],
    author: 'PriPicks Kitchen',
    date: 'January 6, 2026',
    category: 'Biryani Love',
    readTime: '35 min',
    servings: '3 people',
    prepTime: '10 min',
    ingredients: [
      '6 eggs, boiled and halved',
      '2 cups basmati rice',
      '1 cup yogurt',
      '2 onions, sliced',
      '2 tomatoes, chopped',
      '1 tbsp ginger-garlic paste',
      '2 tsp biryani masala',
      'Whole spices',
      '3 tbsp ghee',
      'Saffron milk',
      'Mint and cilantro',
      'Salt to taste'
    ],
    steps: [
      'Fry boiled eggs until golden. Set aside.',
      'Heat ghee, add whole spices and half the onions. Fry until golden.',
      'Add ginger-garlic paste, tomatoes, and all spices. Cook well.',
      'Add yogurt and fried eggs. Simmer for 5 minutes.',
      'Boil rice until 70% cooked. Layer over egg curry.',
      'Top with remaining fried onions, herbs, and saffron milk.',
      'Cover and cook on low heat for 15 minutes (dum).',
      'Serve hot with raita.'
    ],
    tips: [
      'Frying eggs adds texture and prevents them from getting mushy.',
      'Use less water when boiling rice — should be al dente.',
      'Budget-friendly and filling!'
    ]
  },
  {
    id: 18,
    title: 'Sambar Rice — South Indian Comfort',
    excerpt: 'Warm, tangy, and utterly comforting! This sambar rice is my go-to when I want something hearty and wholesome.',
    image: 'https://placehold.co/800x600/CD853F/FFFFFF?text=Sambar+Rice',
    images: [
      'https://placehold.co/800x600/CD853F/FFFFFF?text=Sambar+Rice'
    ],
    author: 'PriPicks Kitchen',
    date: 'January 5, 2026',
    category: 'Comfort Food',
    readTime: '35 min',
    servings: '4 people',
    prepTime: '10 min',
    ingredients: [
      '1/2 cup toor dal',
      '2 cups rice, cooked',
      'Mixed vegetables (drumstick, carrot, pumpkin)',
      '2 tomatoes, chopped',
      '2 tbsp sambar powder',
      'Tamarind pulp',
      '1 tsp mustard seeds',
      'Curry leaves',
      'Pinch of asafoetida',
      '2 tbsp oil',
      'Salt to taste'
    ],
    steps: [
      'Pressure cook dal and vegetables together until soft.',
      'Add sambar powder, tamarind, tomatoes, and salt. Boil for 10 minutes.',
      'For tempering: Heat oil, add mustard seeds, curry leaves, and asafoetida.',
      'Pour tempering over sambar and mix well.',
      'Serve hot sambar over rice with ghee.',
      'Pairs perfectly with papad and pickle.'
    ],
    tips: [
      'Adjust tamarind based on your taste preference.',
      'Adding jaggery balances the tanginess beautifully.',
      'One-pot comfort meal that\'s nutritious and filling!'
    ]
  },
  {
    id: 19,
    title: 'Masala Omelette — Protein-Packed Breakfast',
    excerpt: 'Fluffy, flavorful, and ready in 5 minutes! This masala omelette is my favorite quick breakfast or snack.',
    image: 'https://placehold.co/800x600/FFD700/333333?text=Masala+Omelette',
    images: [
      'https://placehold.co/800x600/FFD700/333333?text=Masala+Omelette'
    ],
    author: 'PriPicks Kitchen',
    date: 'January 4, 2026',
    category: 'Quick Meals',
    readTime: '10 min',
    servings: '2 people',
    prepTime: '5 min',
    ingredients: [
      '4 eggs',
      '1 onion, finely chopped',
      '1 tomato, finely chopped',
      '2 green chilies, chopped',
      '1/2 tsp red chili powder',
      'Fresh cilantro, chopped',
      'Salt to taste',
      '2 tbsp oil'
    ],
    steps: [
      'Beat eggs in a bowl with salt and chili powder.',
      'Add onions, tomatoes, chilies, and cilantro. Mix well.',
      'Heat oil in a non-stick pan.',
      'Pour egg mixture and spread evenly.',
      'Cook on medium heat until bottom is golden, then flip.',
      'Cook the other side for 1-2 minutes.',
      'Serve hot with bread or paratha.'
    ],
    tips: [
      'Don\'t overcook — omelette should be slightly soft inside.',
      'Add grated cheese for extra indulgence!',
      'Perfect for breakfast, lunch, or dinner!'
    ]
  },
  {
    id: 20,
    title: 'Vegetable Khichdi — Balanced One-Pot Meal',
    excerpt: 'Nourishing and gentle on the stomach! This veggie khichdi is my go-to for a light yet satisfying meal.',
    image: 'https://placehold.co/800x600/BDB76B/FFFFFF?text=Vegetable+Khichdi',
    images: [
      'https://placehold.co/800x600/BDB76B/FFFFFF?text=Vegetable+Khichdi'
    ],
    author: 'PriPicks Kitchen',
    date: 'January 3, 2026',
    category: 'Diet Friendly',
    readTime: '30 min',
    servings: '4 people',
    prepTime: '5 min',
    ingredients: [
      '1 cup rice',
      '1/2 cup moong dal',
      'Mixed vegetables (carrots, peas, beans)',
      '1 tsp cumin seeds',
      '1/2 tsp turmeric',
      'Pinch of asafoetida',
      '2 tbsp ghee',
      'Salt to taste',
      '4 cups water'
    ],
    steps: [
      'Wash rice and dal together.',
      'Heat ghee in pressure cooker. Add cumin and asafoetida.',
      'Add vegetables, rice, dal, turmeric, salt, and water.',
      'Pressure cook for 3-4 whistles.',
      'Mash slightly for creamy texture.',
      'Serve hot with ghee, papad, and pickle.'
    ],
    tips: [
      'Add more vegetables for extra nutrition.',
      'Perfect comfort food when you\'re not feeling well.',
      'Adjust consistency with water as per your preference.'
    ]
  },
  {
    id: 21,
    title: 'Light & Healthy Dahi Rice — Cool Comfort Bowl',
    excerpt: 'Soothing and probiotic-rich! This curd rice is perfect for hot days or when you need something gentle and nutritious.',
    image: 'https://placehold.co/800x600/E8F5E9/333333?text=Dahi+Rice',
    images: [
      'https://placehold.co/800x600/E8F5E9/333333?text=Dahi+Rice'
    ],
    author: 'PriPicks Kitchen',
    date: 'January 2, 2026',
    category: 'Diet Friendly',
    readTime: '15 min',
    servings: '2 people',
    prepTime: '5 min',
    ingredients: [
      '2 cups cooked rice (cooled)',
      '1 cup fresh yogurt',
      '1/4 cup milk',
      '1 tsp mustard seeds',
      '1/2 tsp urad dal',
      '2 green chilies, slit',
      'Few curry leaves',
      '1 tbsp oil',
      'Salt to taste',
      'Fresh coriander and grated carrot for garnish'
    ],
    steps: [
      'Mash cooked rice slightly with a fork until soft.',
      'Mix yogurt and milk together, add to rice with salt.',
      'Heat oil in a small pan. Add mustard seeds and urad dal.',
      'When they splutter, add curry leaves and green chilies.',
      'Pour tempering over the rice mixture and mix gently.',
      'Garnish with fresh coriander and grated carrot.',
      'Serve chilled or at room temperature.'
    ],
    tips: [
      'Use day-old rice for best texture — freshly cooked rice can become mushy.',
      'Add diced cucumber or pomegranate for extra freshness and crunch.',
      'Perfect light meal for summers or when recovering from illness.'
    ]
  },
  {
    id: 22,
    title: 'Oats Upma — Healthy Savory Breakfast',
    excerpt: 'Protein-packed and fiber-rich! This oats upma is my go-to healthy breakfast that keeps me full for hours.',
    image: 'https://placehold.co/800x600/FFF9C4/333333?text=Oats+Upma',
    images: [
      'https://placehold.co/800x600/FFF9C4/333333?text=Oats+Upma'
    ],
    author: 'PriPicks Kitchen',
    date: 'January 1, 2026',
    category: 'Diet Friendly',
    readTime: '20 min',
    servings: '2 people',
    prepTime: '5 min',
    ingredients: [
      '1 cup rolled oats',
      '1 onion, finely chopped',
      '1 carrot, diced',
      '1/2 cup peas',
      '1 tsp mustard seeds',
      '1 tsp urad dal',
      '8-10 curry leaves',
      '2 green chilies, chopped',
      '1/2 tsp turmeric',
      '2 cups water',
      '2 tbsp oil',
      'Salt to taste',
      'Lemon juice and coriander for garnish'
    ],
    steps: [
      'Dry roast oats in a pan for 2-3 minutes until fragrant. Set aside.',
      'Heat oil in the same pan. Add mustard seeds and urad dal.',
      'Add curry leaves, green chilies, and onions. Sauté until onions turn translucent.',
      'Add carrots and peas. Cook for 2-3 minutes.',
      'Add turmeric, salt, and 2 cups water. Bring to boil.',
      'Add roasted oats, mix well, and cook for 3-4 minutes until water is absorbed.',
      'Squeeze lemon juice, garnish with coriander, and serve hot.'
    ],
    tips: [
      'Use steel-cut or rolled oats — avoid instant oats as they turn mushy.',
      'Add any vegetables you like — beans, capsicum, or corn work great!',
      'High in fiber and protein — perfect for weight management.'
    ]
  },
  {
    id: 23,
    title: 'Quinoa Vegetable Bowl — Superfood Delight',
    excerpt: 'Nutrient-dense and delicious! This quinoa bowl is packed with protein, fiber, and colorful veggies — healthy eating made easy!',
    image: 'https://placehold.co/800x600/C8E6C9/333333?text=Quinoa+Bowl',
    images: [
      'https://placehold.co/800x600/C8E6C9/333333?text=Quinoa+Bowl'
    ],
    author: 'PriPicks Kitchen',
    date: 'December 31, 2025',
    category: 'Diet Friendly',
    readTime: '25 min',
    servings: '2 people',
    prepTime: '10 min',
    ingredients: [
      '1 cup quinoa',
      '2 cups water',
      '1 bell pepper, diced',
      '1 zucchini, diced',
      '1 cup broccoli florets',
      '1 cup chickpeas, boiled',
      '2 tbsp olive oil',
      '1 tsp cumin powder',
      '1/2 tsp paprika',
      'Salt and pepper to taste',
      'Lemon juice and fresh herbs for garnish'
    ],
    steps: [
      'Rinse quinoa thoroughly. Cook in 2 cups water for 15 minutes until fluffy.',
      'Heat olive oil in a pan. Add bell pepper and zucchini. Sauté for 3 minutes.',
      'Add broccoli and cook for 2 more minutes.',
      'Add boiled chickpeas, cumin, paprika, salt, and pepper. Mix well.',
      'Fluff cooked quinoa with a fork.',
      'Serve quinoa topped with sautéed vegetables and chickpeas.',
      'Drizzle with lemon juice and garnish with fresh herbs.'
    ],
    tips: [
      'Quinoa is a complete protein — great for vegetarian diets!',
      'Meal prep friendly — make a batch for the whole week.',
      'Customize with your favorite vegetables and seasonings.'
    ]
  },
  {
    id: 24,
    title: 'Fish Curry — Kerala-Style Seafood Delight',
    excerpt: 'Tangy, spicy, and bursting with coastal flavors! This Kerala fish curry is my go-to when craving authentic South Indian seafood.',
    image: 'https://placehold.co/800x600/FF7043/FFFFFF?text=Fish+Curry',
    images: [
      'https://placehold.co/800x600/FF7043/FFFFFF?text=Fish+Curry'
    ],
    author: 'PriPicks Kitchen',
    date: 'December 30, 2025',
    category: 'Non-Veg Favourites',
    readTime: '30 min',
    servings: '4 people',
    prepTime: '10 min',
    ingredients: [
      '500g fish (pomfret or kingfish)',
      '2 tomatoes, chopped',
      '1 onion, sliced',
      '1 tbsp tamarind paste',
      '2 tsp red chili powder',
      '1 tsp turmeric',
      '1 tsp coriander powder',
      '10-12 curry leaves',
      '2 tbsp coconut oil',
      '1 cup coconut milk',
      'Salt to taste',
      'Fresh coriander for garnish'
    ],
    steps: [
      'Marinate fish pieces with turmeric and salt for 10 minutes.',
      'Heat coconut oil in a pan. Add curry leaves and onions. Sauté until golden.',
      'Add tomatoes, chili powder, coriander powder, and cook until soft.',
      'Add tamarind paste and 1 cup water. Bring to boil.',
      'Gently add fish pieces. Cook covered for 5-7 minutes.',
      'Pour coconut milk and simmer for 3-4 minutes.',
      'Garnish with coriander. Serve hot with rice.'
    ],
    tips: [
      'Use fresh fish for best flavor — frozen works too if fresh isn\'t available.',
      'Don\'t overcook fish — it should be tender and flaky.',
      'Add more tamarind for extra tanginess if you prefer!'
    ]
  },
  {
    id: 25,
    title: 'Mutton Rogan Josh — Rich Kashmiri Curry',
    excerpt: 'Aromatic and deeply flavorful! This restaurant-style rogan josh is perfect for special occasions and weekend feasts.',
    image: 'https://placehold.co/800x600/D32F2F/FFFFFF?text=Mutton+Rogan+Josh',
    images: [
      'https://placehold.co/800x600/D32F2F/FFFFFF?text=Mutton+Rogan+Josh'
    ],
    author: 'PriPicks Kitchen',
    date: 'December 29, 2025',
    category: 'Non-Veg Favourites',
    readTime: '1 hr 15 min',
    servings: '5 people',
    prepTime: '15 min',
    ingredients: [
      '750g mutton pieces',
      '1 cup yogurt',
      '2 onions, sliced',
      '2 tbsp ginger-garlic paste',
      '2 tsp Kashmiri red chili powder',
      '1 tsp fennel powder',
      '1 tsp garam masala',
      '4 tbsp ghee',
      '2 bay leaves',
      '4 green cardamom',
      '1-inch cinnamon stick',
      'Salt to taste',
      'Fresh coriander'
    ],
    steps: [
      'Heat ghee, add whole spices, and fry until fragrant.',
      'Add sliced onions and cook until deep golden brown.',
      'Add ginger-garlic paste and cook for 2 minutes.',
      'Add mutton, yogurt, chili powder, fennel, and salt. Mix well.',
      'Cook on high heat for 5 minutes, then add 1 cup water.',
      'Cover and simmer for 45-60 minutes until mutton is tender.',
      'Sprinkle garam masala and garnish with coriander.',
      'Serve hot with naan or rice.'
    ],
    tips: [
      'Slow cooking is key — mutton should be fall-off-the-bone tender.',
      'Use Kashmiri chili powder for color without too much heat.',
      'Tastes even better the next day!'
    ]
  },
  {
    id: 26,
    title: 'Chicken Tikka Masala — Creamy Tandoori Delight',
    excerpt: 'The ultimate comfort curry! Smoky grilled chicken in a rich tomato-cream sauce — better than takeout!',
    image: 'https://placehold.co/800x600/FF5722/FFFFFF?text=Chicken+Tikka+Masala',
    images: [
      'https://placehold.co/800x600/FF5722/FFFFFF?text=Chicken+Tikka+Masala'
    ],
    author: 'PriPicks Kitchen',
    date: 'December 28, 2025',
    category: 'Non-Veg Favourites',
    readTime: '50 min',
    servings: '4 people',
    prepTime: '20 min',
    ingredients: [
      '500g chicken breast, cubed',
      '1 cup yogurt',
      '2 tbsp tandoori masala',
      '2 tbsp ginger-garlic paste',
      '2 cups tomato puree',
      '1 cup heavy cream',
      '2 onions, chopped',
      '1 tsp garam masala',
      '1 tsp kasuri methi',
      '3 tbsp butter',
      '2 tbsp oil',
      'Salt to taste',
      'Fresh cilantro'
    ],
    steps: [
      'Marinate chicken with yogurt, 1 tbsp ginger-garlic paste, and tandoori masala for 30 minutes.',
      'Grill or pan-fry marinated chicken until slightly charred. Set aside.',
      'Heat butter and oil. Sauté onions until golden.',
      'Add remaining ginger-garlic paste, tomato puree, and spices. Cook for 10 minutes.',
      'Add grilled chicken and cook for 5 minutes.',
      'Stir in cream and kasuri methi. Simmer for 5 minutes.',
      'Garnish with cilantro. Serve with naan or rice.'
    ],
    tips: [
      'Grilling chicken first adds smoky flavor — don\'t skip this step!',
      'Kasuri methi is the secret ingredient for authentic taste.',
      'Add a pinch of sugar to balance the acidity.'
    ]
  },
  {
    id: 27,
    title: 'Instant Rava Idli — Soft & Fluffy Breakfast',
    excerpt: 'No fermentation needed! These rava idlis are ready in 20 minutes — perfect for lazy mornings when you want something healthy.',
    image: 'https://placehold.co/800x600/FFEB3B/333333?text=Rava+Idli',
    images: [
      'https://placehold.co/800x600/FFEB3B/333333?text=Rava+Idli'
    ],
    author: 'PriPicks Kitchen',
    date: 'December 27, 2025',
    category: 'Quick Meals',
    readTime: '20 min',
    servings: '4 people',
    prepTime: '5 min',
    ingredients: [
      '1 cup rava (semolina)',
      '1 cup yogurt',
      '1/2 cup water',
      '1 tsp mustard seeds',
      '1 tsp urad dal',
      '10-12 curry leaves',
      '2 green chilies, chopped',
      '1 tsp ENO fruit salt',
      '2 tbsp oil',
      'Salt to taste',
      'Grated carrot for garnish'
    ],
    steps: [
      'Mix rava, yogurt, water, and salt. Let it rest for 10 minutes.',
      'Heat oil, add mustard seeds, urad dal, curry leaves, and chilies. Pour over batter.',
      'Add ENO fruit salt just before steaming and mix gently.',
      'Grease idli plates and pour batter.',
      'Steam for 10-12 minutes until idlis are cooked.',
      'Let cool for 2 minutes before removing.',
      'Serve hot with coconut chutney and sambar.'
    ],
    tips: [
      'Add ENO at the last moment for fluffy idlis.',
      'Don\'t overmix after adding ENO — be gentle!',
      'Perfect quick breakfast when you forgot to ferment idli batter!'
    ]
  },
  {
    id: 28,
    title: 'Mixed Vegetable Curry — One-Pot Goodness',
    excerpt: 'Colorful, nutritious, and packed with veggies! This easy curry is my weeknight hero — complete meal in one pot.',
    image: 'https://placehold.co/800x600/66BB6A/FFFFFF?text=Vegetable+Curry',
    images: [
      'https://placehold.co/800x600/66BB6A/FFFFFF?text=Vegetable+Curry'
    ],
    author: 'PriPicks Kitchen',
    date: 'December 26, 2025',
    category: 'One-Pot Magic',
    readTime: '35 min',
    servings: '4 people',
    prepTime: '10 min',
    ingredients: [
      '2 potatoes, cubed',
      '1 cup cauliflower florets',
      '1 cup green beans',
      '1 carrot, diced',
      '1 cup peas',
      '2 tomatoes, pureed',
      '1 onion, chopped',
      '1 tbsp ginger-garlic paste',
      '2 tsp curry powder',
      '1 tsp garam masala',
      '3 tbsp oil',
      'Salt to taste',
      'Fresh coriander'
    ],
    steps: [
      'Heat oil in a pot. Sauté onions until golden.',
      'Add ginger-garlic paste and cook for 1 minute.',
      'Add tomato puree, curry powder, and salt. Cook for 5 minutes.',
      'Add all vegetables and mix well.',
      'Add 1 cup water, cover, and cook for 20 minutes until vegetables are tender.',
      'Sprinkle garam masala and garnish with coriander.',
      'Serve hot with roti or rice.'
    ],
    tips: [
      'Use any vegetables you have — this recipe is very flexible!',
      'Add coconut milk for a creamy version.',
      'Leftovers make great filling for sandwiches or wraps!'
    ]
  },
  {
    id: 29,
    title: 'Kadhi Chawal — Tangy Yogurt Curry & Rice',
    excerpt: 'Comforting and soul-satisfying! This tangy kadhi with crispy pakoras is perfect comfort food for any day.',
    image: 'https://placehold.co/800x600/FFF59D/333333?text=Kadhi+Chawal',
    images: [
      'https://placehold.co/800x600/FFF59D/333333?text=Kadhi+Chawal'
    ],
    author: 'PriPicks Kitchen',
    date: 'December 25, 2025',
    category: 'One-Pot Magic',
    readTime: '40 min',
    servings: '4 people',
    prepTime: '10 min',
    ingredients: [
      '1 cup yogurt',
      '2 tbsp gram flour (besan)',
      '3 cups water',
      '1 tsp mustard seeds',
      '1 tsp cumin seeds',
      '10-12 curry leaves',
      '2 dried red chilies',
      '1/2 tsp turmeric',
      '1 tsp red chili powder',
      '2 tbsp oil',
      'Salt to taste',
      'For pakoras: 1/2 cup besan, onions, spinach'
    ],
    steps: [
      'Whisk yogurt, besan, water, turmeric, and salt until smooth.',
      'For pakoras: Mix besan with water, onions, spinach. Deep fry small fritters.',
      'Heat oil, add mustard seeds, cumin, curry leaves, and red chilies.',
      'Pour yogurt mixture and bring to gentle boil, stirring continuously.',
      'Simmer for 15-20 minutes until kadhi thickens.',
      'Add pakoras 5 minutes before serving.',
      'Serve hot kadhi over steamed rice.'
    ],
    tips: [
      'Keep stirring while boiling to prevent curdling.',
      'Add pakoras just before serving to keep them crispy.',
      'Adjust tanginess with more yogurt or a pinch of sugar.'
    ]
  },
  {
    id: 30,
    title: 'Paneer Butter Masala — Restaurant-Style at Home',
    excerpt: 'Creamy, buttery, and absolutely divine! This paneer curry rivals any restaurant version — guaranteed crowd-pleaser!',
    image: 'https://placehold.co/800x600/FF8A65/FFFFFF?text=Paneer+Butter+Masala',
    images: [
      'https://placehold.co/800x600/FF8A65/FFFFFF?text=Paneer+Butter+Masala'
    ],
    author: 'PriPicks Kitchen',
    date: 'December 24, 2025',
    category: 'Veg Specials',
    readTime: '35 min',
    servings: '4 people',
    prepTime: '10 min',
    ingredients: [
      '400g paneer, cubed',
      '2 cups tomato puree',
      '1 onion, chopped',
      '1 tbsp ginger-garlic paste',
      '1 tsp red chili powder',
      '1 tsp garam masala',
      '1 tsp kasuri methi',
      '1/2 cup heavy cream',
      '3 tbsp butter',
      '2 tbsp cashew paste',
      '1 tbsp sugar',
      'Salt to taste',
      'Fresh cream for garnish'
    ],
    steps: [
      'Heat butter, add onions and ginger-garlic paste. Cook until golden.',
      'Add tomato puree, chili powder, and salt. Cook for 10 minutes.',
      'Add cashew paste and cook for 5 more minutes.',
      'Add cream, sugar, and kasuri methi. Mix well.',
      'Gently add paneer cubes and simmer for 5 minutes.',
      'Sprinkle garam masala.',
      'Garnish with cream swirl and serve with naan.'
    ],
    tips: [
      'Soak cashews in warm water before grinding for smooth paste.',
      'Don\'t overcook paneer — it should remain soft.',
      'The sugar balances acidity perfectly!'
    ]
  },
  {
    id: 31,
    title: 'Prawn Biryani — Coastal Seafood Special',
    excerpt: 'Fragrant and full of coastal flavors! This prawn biryani is lighter than chicken but just as delicious.',
    image: 'https://placehold.co/800x600/FF6F00/FFFFFF?text=Prawn+Biryani',
    images: [
      'https://placehold.co/800x600/FF6F00/FFFFFF?text=Prawn+Biryani'
    ],
    author: 'PriPicks Kitchen',
    date: 'December 23, 2025',
    category: 'Biryani Love',
    readTime: '45 min',
    servings: '4 people',
    prepTime: '15 min',
    ingredients: [
      '500g prawns, cleaned',
      '2 cups basmati rice',
      '1 cup yogurt',
      '2 onions, sliced and fried',
      '2 tbsp ginger-garlic paste',
      '2 tsp biryani masala',
      'Whole spices',
      '3 tbsp ghee',
      'Saffron milk',
      'Mint and coriander leaves',
      '2 tomatoes, chopped',
      'Salt to taste'
    ],
    steps: [
      'Marinate prawns with yogurt, ginger-garlic paste, biryani masala for 20 minutes.',
      'Boil rice until 70% cooked. Drain.',
      'Heat ghee, add whole spices and half the fried onions.',
      'Add marinated prawns and tomatoes. Cook for 5-7 minutes.',
      'Layer rice over prawns.',
      'Top with remaining onions, herbs, and saffron milk.',
      'Cover tightly and cook on low heat for 15 minutes.',
      'Serve hot with raita.'
    ],
    tips: [
      'Don\'t overcook prawns — they cook quickly!',
      'Use fresh prawns for best flavor.',
      'Lighter and quicker than chicken biryani!'
    ]
  },
  {
    id: 32,
    title: 'Hyderabadi Dum Biryani — Authentic Layered Rice',
    excerpt: 'The king of biryanis! This traditional Hyderabadi biryani takes time but the result is absolutely worth it.',
    image: 'https://placehold.co/800x600/C62828/FFFFFF?text=Hyderabadi+Biryani',
    images: [
      'https://placehold.co/800x600/C62828/FFFFFF?text=Hyderabadi+Biryani'
    ],
    author: 'PriPicks Kitchen',
    date: 'December 22, 2025',
    category: 'Biryani Love',
    readTime: '1 hr 30 min',
    servings: '6 people',
    prepTime: '30 min',
    ingredients: [
      '750g mutton or chicken',
      '3 cups basmati rice',
      '1.5 cups yogurt',
      '3 onions, sliced and fried',
      '3 tbsp ginger-garlic paste',
      '3 tsp biryani masala',
      'Whole spices (bay leaves, cinnamon, cardamom, cloves)',
      '5 tbsp ghee',
      '1/2 cup milk with saffron',
      'Large bunch mint and coriander',
      '3 tomatoes, chopped',
      'Salt to taste'
    ],
    steps: [
      'Marinate meat with yogurt, ginger-garlic paste, biryani masala, and salt for 2 hours.',
      'Boil rice with whole spices until 70% cooked. Drain.',
      'In a heavy-bottomed pot, heat ghee and layer fried onions.',
      'Add marinated meat, tomatoes, and half the herbs.',
      'Layer partially cooked rice on top.',
      'Sprinkle remaining onions, herbs, saffron milk, and ghee.',
      'Seal pot tightly with dough or foil. Cook on low heat for 45 minutes.',
      'Let rest for 10 minutes. Mix gently and serve with raita and salan.'
    ],
    tips: [
      'Sealing the pot is crucial — no steam should escape!',
      'Use a tawa under the pot to prevent burning.',
      'This is celebration biryani — worth every minute!'
    ]
  },
  {
    id: 33,
    title: 'Khichdi Kadhi Combo — Ultimate Comfort Meal',
    excerpt: 'The perfect sick-day meal! Soft khichdi with tangy kadhi is pure comfort in a bowl — grandma\'s cure for everything!',
    image: 'https://placehold.co/800x600/FFE082/333333?text=Khichdi+Kadhi',
    images: [
      'https://placehold.co/800x600/FFE082/333333?text=Khichdi+Kadhi'
    ],
    author: 'PriPicks Kitchen',
    date: 'December 21, 2025',
    category: 'Comfort Food',
    readTime: '40 min',
    servings: '4 people',
    prepTime: '10 min',
    ingredients: [
      'For Khichdi: 1 cup rice, 1/2 cup moong dal, turmeric, ghee, cumin, vegetables',
      'For Kadhi: 1 cup yogurt, 2 tbsp besan, spices, curry leaves, pakoras',
      'Salt to taste'
    ],
    steps: [
      'Prepare khichdi: Wash rice and dal. Pressure cook with vegetables, turmeric, and water for 3 whistles.',
      'Temper with ghee and cumin seeds.',
      'For kadhi: Whisk yogurt and besan. Add water and spices.',
      'Temper with mustard seeds and curry leaves. Pour yogurt mixture.',
      'Simmer kadhi for 15 minutes.',
      'Add pakoras before serving.',
      'Serve khichdi topped with kadhi and ghee.'
    ],
    tips: [
      'The ultimate comfort food combo!',
      'Perfect when you\'re not feeling well.',
      'Add papad for extra crunch!'
    ]
  },
  {
    id: 34,
    title: 'Gajar Halwa — Sweet Carrot Dessert',
    excerpt: 'Warm, sweet, and absolutely divine! This traditional carrot halwa is perfect for cold evenings and celebrations.',
    image: 'https://placehold.co/800x600/FF9800/FFFFFF?text=Gajar+Halwa',
    images: [
      'https://placehold.co/800x600/FF9800/FFFFFF?text=Gajar+Halwa'
    ],
    author: 'PriPicks Kitchen',
    date: 'December 20, 2025',
    category: 'Comfort Food',
    readTime: '1 hr',
    servings: '6 people',
    prepTime: '15 min',
    ingredients: [
      '1 kg carrots, grated',
      '4 cups full-fat milk',
      '3/4 cup sugar',
      '4 tbsp ghee',
      '1/2 cup khoya (mawa)',
      '1/4 cup cashews and almonds',
      '1/2 tsp cardamom powder',
      'Few saffron strands',
      '2 tbsp raisins'
    ],
    steps: [
      'Heat ghee in a heavy-bottomed pan. Add grated carrots.',
      'Cook carrots for 10 minutes until they soften.',
      'Add milk and cook on medium heat, stirring occasionally for 30-40 minutes.',
      'When milk is absorbed, add sugar and cook for 10 minutes.',
      'Add khoya, cardamom, and half the nuts. Mix well.',
      'Cook for 5 more minutes until halwa leaves the sides of pan.',
      'Garnish with remaining nuts and saffron.',
      'Serve warm or at room temperature.'
    ],
    tips: [
      'Use red carrots for best color and sweetness.',
      'Full-fat milk is essential for rich flavor.',
      'Can be made ahead and reheated — tastes even better next day!'
    ]
  },
  {
    id: 35,
    title: 'Ven Pongal — Creamy South Indian Comfort',
    excerpt: 'Warm, savory, and oh-so-comforting! This creamy pongal with ghee and pepper is perfect for cozy mornings.',
    image: 'https://placehold.co/800x600/FFCC80/333333?text=Ven+Pongal',
    images: [
      'https://placehold.co/800x600/FFCC80/333333?text=Ven+Pongal'
    ],
    author: 'PriPicks Kitchen',
    date: 'December 19, 2025',
    category: 'Comfort Food',
    readTime: '35 min',
    servings: '4 people',
    prepTime: '5 min',
    ingredients: [
      '1 cup rice',
      '1/2 cup moong dal',
      '1 tsp cumin seeds',
      '1 tsp black peppercorns, crushed',
      '1-inch ginger, chopped',
      '10-12 curry leaves',
      '1/4 tsp asafoetida',
      '4 cups water',
      '4 tbsp ghee',
      'Salt to taste',
      'Cashews for garnish'
    ],
    steps: [
      'Dry roast moong dal until fragrant. Wash rice and dal together.',
      'Pressure cook rice, dal, and water for 4-5 whistles until very soft and mushy.',
      'Mash slightly with a ladle. Add more hot water if too thick.',
      'Heat ghee in a pan. Add cumin seeds, peppercorns, and cashews.',
      'Add ginger, curry leaves, and asafoetida. Let them splutter.',
      'Pour this tempering over the pongal and mix well.',
      'Serve hot with coconut chutney and sambar.'
    ],
    tips: [
      'The consistency should be like thick porridge — creamy and flowing.',
      'Generous amount of ghee and pepper is key to authentic flavor!',
      'Perfect comfort food for rainy days or when you need something warm and soothing.'
    ]
  }
];

export const BLOG_CATEGORIES: string[] = [
  'All',
  'Quick Meals',
  'Diet Friendly',
  'Veg Specials',
  'Non-Veg Favourites',
  'One-Pot Magic',
  'Biryani Love',
  'Comfort Food'
];
