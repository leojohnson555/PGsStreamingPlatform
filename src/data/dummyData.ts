import type { Category, Series, Video } from './types';

// Note: These are illustrative demo entries using Wikimedia Commons images.
// They do not represent official verified KAU content.

export const categories: Category[] = [
  { id: 'c1', title: 'Rituals & Traditions', slug: 'rituals-traditions', description: 'Explore ancient rituals.', imageUrl: '/images/categories/Padayani_Daarika.JPG' },
  { id: 'c2', title: 'Classical Arts', slug: 'classical-arts', description: 'Kerala classical performing arts.', imageUrl: '/images/categories/Kathakali_-Play_with_Kaurava.jpg' },
  { id: 'c3', title: 'Folk Arts', slug: 'folk-arts', description: 'Vibrant folk arts and dances.', imageUrl: '/images/categories/Pulikkali_during_Onam.jpg' },
  { id: 'c4', title: 'Festivals', slug: 'festivals', description: 'Grand temple festivals and celebrations.', imageUrl: '/images/categories/Kudamatom_at_thrissur_pooram_2013_7618.JPG' },
  { id: 'c5', title: 'Agricultural Heritage', slug: 'agricultural-heritage', description: 'Farming traditions and landscapes.', imageUrl: '/images/categories/Kerala_Kuttanad1.jpg' },
  { id: 'c6', title: 'Music & Percussion', slug: 'music-percussion', description: 'Traditional music and rhythms.', imageUrl: '/images/categories/Thavil-DSC_3864.jpg' }
];

export const seriesList: Series[] = [
  {
    id: 's1',
    title: 'Gods of Malabar',
    description: 'An exploration of Theyyam, Muthappan, and the vibrant ritual costumes and music of Northern Kerala.',
    coverUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/30/Bappiriyan_Theyyam_at_Muchiriyan_Kavu_Kannur.jpg/960px-Bappiriyan_Theyyam_at_Muchiriyan_Kavu_Kannur.jpg',
    backdropUrl: '/images/hero/the_divine_makeup_wide.jpg',
    categoryId: 'c1',
    episodeCount: 3
  },
  {
    id: 's2',
    title: 'Masterpieces of Kathakali',
    description: 'Dive deep into the makeup, mudras, stories, and performances of Kerala’s iconic classical dance drama.',
    coverUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2c/Kathakali_-Play_with_Kaurava.jpg/960px-Kathakali_-Play_with_Kaurava.jpg',
    backdropUrl: '/images/hero/kathakali_performance_wide.jpg',
    categoryId: 'c2',
    episodeCount: 3
  },
  {
    id: 's3',
    title: 'Living Ritual Traditions',
    description: 'Discover the ancient performing arts of Padayani, Mudiyettu, and Kanyarkali practiced in village temples.',
    coverUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1a/Padayani_Daarika.JPG/960px-Padayani_Daarika.JPG',
    categoryId: 'c1',
    episodeCount: 3
  },
  {
    id: 's4',
    title: 'Festivals of Kerala',
    description: 'Experience the grandeur of Thrissur Pooram, rhythmic Chenda Melam, and spectacular temple festivals.',
    coverUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9b/Kudamatom_at_thrissur_pooram_2013_7618.JPG/960px-Kudamatom_at_thrissur_pooram_2013_7618.JPG',
    backdropUrl: '/images/hero/thrissur_pooram_wide.jpg',
    categoryId: 'c4',
    episodeCount: 3
  },
  {
    id: 's5',
    title: 'Kerala\'s Agricultural Heritage',
    description: 'Journey through Kuttanad paddy cultivation, traditional rice farming, and Wayanad spice gardens.',
    coverUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/81/Kerala_Kuttanad1.jpg/960px-Kerala_Kuttanad1.jpg',
    backdropUrl: '/images/hero/kuttanad_farming_wide.jpg',
    categoryId: 'c5',
    episodeCount: 3
  },
  {
    id: 's6',
    title: 'Songs and Rhythms of Kerala',
    description: 'A celebration of folk music, traditional percussion ensembles, and oral traditions passed down through generations.',
    coverUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f5/Peruvanam_KuttanMarar.JPG/960px-Peruvanam_KuttanMarar.JPG',
    categoryId: 'c6',
    episodeCount: 3
  }
];

export const videos: Video[] = [
  // Series 1: Gods of Malabar
  {
    id: 'v101',
    title: 'The Divine Makeup',
    description: 'Witness the intricate and sacred facial painting rituals of Theyyam artists before they transform.',
    thumbnailUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/44/Make_up_of_Vishnumoorthi_Theyyam.jpg/960px-Make_up_of_Vishnumoorthi_Theyyam.jpg',
    backdropUrl: '/images/hero/the_divine_makeup_wide.jpg',
    backdropPosition: 'center 40%',
    categoryIds: ['c1', 'c3'],
    seriesId: 's1',
    episodeNumber: 1,
    year: 2023,
    duration: '45m'
  },
  {
    id: 'v102',
    title: 'Pottan Theyyam',
    description: 'Explore the myth of Pottan Theyyam, a powerful narrative of social equality and divine justice.',
    thumbnailUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/34/Pottan_theyyam.ogv/500px--Pottan_theyyam.ogv.jpg',
    categoryIds: ['c1'],
    seriesId: 's1',
    episodeNumber: 2,
    year: 2023,
    duration: '52m'
  },
  {
    id: 'v103',
    title: 'Kuttichathan in Wayanad',
    description: 'A rare documentation of the energetic Kuttichathan Theyyam performed in the highlands of Wayanad.',
    thumbnailUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/52/Kuttichathan_theyyam_Wayanad1.jpg/960px-Kuttichathan_theyyam_Wayanad1.jpg',
    categoryIds: ['c1'],
    seriesId: 's1',
    episodeNumber: 3,
    year: 2024,
    duration: '38m'
  },

  // Series 2: Masterpieces of Kathakali
  {
    id: 'v201',
    title: 'The Art of Mudras',
    description: 'Learn the complex hand gestures and facial expressions that form the language of Kathakali.',
    thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Paris_Laxmi.jpeg',
    categoryIds: ['c2'],
    seriesId: 's2',
    episodeNumber: 1,
    year: 2022,
    duration: '40m'
  },
  {
    id: 'v202',
    title: 'Play with Kaurava',
    description: 'A captivating performance of a classic Mahabharata episode, showcasing dynamic character portrayals.',
    thumbnailUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2c/Kathakali_-Play_with_Kaurava.jpg/960px-Kathakali_-Play_with_Kaurava.jpg',
    backdropUrl: '/images/hero/kathakali_performance_wide.jpg',
    backdropPosition: 'center center',
    categoryIds: ['c2'],
    seriesId: 's2',
    episodeNumber: 2,
    year: 2022,
    duration: '58m'
  },
  {
    id: 'v203',
    title: 'Training the Next Generation',
    description: 'Inside the rigorous training schools where young students dedicate their lives to mastering Kathakali.',
    thumbnailUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3c/Keralanadanam_hs_boys_5.jpg/960px-Keralanadanam_hs_boys_5.jpg',
    categoryIds: ['c2'],
    seriesId: 's2',
    episodeNumber: 3,
    year: 2023,
    duration: '42m'
  },

  // Series 3: Living Ritual Traditions
  {
    id: 'v301',
    title: 'Mudiyettu at Kezhoor',
    description: 'The ancient ritual dance drama of Mudiyettu, depicting the battle between Goddess Kali and Darika.',
    thumbnailUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e7/Mudiyettu_at_Kezhoor_kavu_02-02-2013_2-04-33.JPG/960px-Mudiyettu_at_Kezhoor_kavu_02-02-2013_2-04-33.JPG',
    categoryIds: ['c1'],
    seriesId: 's3',
    episodeNumber: 1,
    year: 2021,
    duration: '45m'
  },
  {
    id: 'v302',
    title: 'The Masks of Padayani',
    description: 'Witness the creation and performance of magnificent Kolam masks used in the rhythmic Padayani festival.',
    thumbnailUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/62/Kottayam_manimala_alapra_tacharikkal_padayani.png/960px-Kottayam_manimala_alapra_tacharikkal_padayani.png',
    categoryIds: ['c1', 'c3'],
    seriesId: 's3',
    episodeNumber: 2,
    year: 2022,
    duration: '50m'
  },
  {
    id: 'v303',
    title: 'Kanyarkali Performances',
    description: 'A vibrant folk dance from Palakkad, blending martial arts and rhythmic steps.',
    thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Kanyarkali.jpg',
    categoryIds: ['c1', 'c3'],
    seriesId: 's3',
    episodeNumber: 3,
    year: 2023,
    duration: '35m'
  },

  // Series 4: Festivals of Kerala
  {
    id: 'v401',
    title: 'The Grand Thrissur Pooram',
    description: 'A front-row seat to the mother of all festivals, featuring magnificent elephant processions.',
    thumbnailUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5e/Kuzhur_-_Elephants.jpg/960px-Kuzhur_-_Elephants.jpg',
    backdropUrl: '/images/hero/thrissur_pooram_wide.jpg',
    backdropPosition: 'center center',
    categoryIds: ['c4'],
    seriesId: 's4',
    episodeNumber: 1,
    year: 2024,
    duration: '55m'
  },
  {
    id: 'v402',
    title: 'Kudamatom Spectacle',
    description: 'The highly competitive and colorful exchange of parasols atop caparisoned elephants.',
    thumbnailUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9b/Kudamatom_at_thrissur_pooram_2013_7618.JPG/960px-Kudamatom_at_thrissur_pooram_2013_7618.JPG',
    categoryIds: ['c4'],
    seriesId: 's4',
    episodeNumber: 2,
    year: 2024,
    duration: '40m'
  },
  {
    id: 'v403',
    title: 'Pulikkali: The Tiger Dance',
    description: 'Artists paint their bodies as tigers and hunters in this spectacular street festival during Onam.',
    thumbnailUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/28/Pulikkali_during_Onam.jpg/960px-Pulikkali_during_Onam.jpg',
    categoryIds: ['c4', 'c3'],
    seriesId: 's4',
    episodeNumber: 3,
    year: 2023,
    duration: '30m'
  },

  // Series 5: Agricultural Heritage
  {
    id: 'v501',
    title: 'Kuttanad: Farming Below Sea Level',
    description: 'Explore the unique agricultural ecosystem of Kuttanad, the rice bowl of Kerala.',
    thumbnailUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/81/Kerala_Kuttanad1.jpg/960px-Kerala_Kuttanad1.jpg',
    backdropUrl: '/images/hero/kuttanad_farming_wide.jpg',
    backdropPosition: 'center center',
    categoryIds: ['c5'],
    seriesId: 's5',
    episodeNumber: 1,
    year: 2022,
    duration: '48m'
  },
  {
    id: 'v502',
    title: 'Life on the Backwaters',
    description: 'How the intricate network of canals shapes the daily life and farming practices of local communities.',
    thumbnailUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ee/House_Boat_DSW.jpg/960px-House_Boat_DSW.jpg',
    categoryIds: ['c5'],
    seriesId: 's5',
    episodeNumber: 2,
    year: 2023,
    duration: '42m'
  },
  {
    id: 'v503',
    title: 'The Kole Wetlands',
    description: 'A study of the Thrissur Kole wetlands, vital for both rice cultivation and migratory birds.',
    thumbnailUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/62/Koal_fileds_of_Thrissur.jpg/960px-Koal_fileds_of_Thrissur.jpg',
    categoryIds: ['c5'],
    seriesId: 's5',
    episodeNumber: 3,
    year: 2024,
    duration: '39m'
  },

  // Series 6: Songs and Rhythms
  {
    id: 'v601',
    title: 'The Power of Chenda',
    description: 'Master percussionists demonstrate the complex rhythms of the traditional Chenda drum.',
    thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Kizhakkootu_Aniyan_Marar.jpg',
    categoryIds: ['c6'],
    seriesId: 's6',
    episodeNumber: 1,
    year: 2021,
    duration: '45m'
  },
  {
    id: 'v602',
    title: 'Beats of the Udukku',
    description: 'Tracing the history and spiritual significance of the hourglass-shaped Udukku drum.',
    thumbnailUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e1/Udukku.jpg/960px-Udukku.jpg',
    categoryIds: ['c6', 'c1'],
    seriesId: 's6',
    episodeNumber: 2,
    year: 2022,
    duration: '32m'
  },
  {
    id: 'v603',
    title: 'Mavilan Dancers',
    description: 'Folk songs and tribal dances of the Mavilan community, echoing ancient traditions.',
    thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Mavilan_Dancers.jpg',
    categoryIds: ['c6', 'c3'],
    seriesId: 's6',
    episodeNumber: 3,
    year: 2023,
    duration: '38m'
  },

  // Standalone Videos (No seriesId)
  {
    id: 'v1',
    title: 'Snake Boat Race of Alappuzha',
    description: 'The adrenaline and teamwork of the spectacular Vallam Kali traditional boat races.',
    thumbnailUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c6/Boatracing.jpg/960px-Boatracing.jpg',
    backdropUrl: '/images/hero/boat_race_wide.jpg',
    backdropPosition: 'center center',
    categoryIds: ['c4', 'c5'],
    year: 2024,
    duration: '1h 10m'
  },
  {
    id: 'v2',
    title: 'Shinkari Melam Unleashed',
    description: 'An electrifying performance of Shinkari Melam during a temple festival.',
    thumbnailUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b0/%E0%B4%B6%E0%B4%BF%E0%B4%99%E0%B5%8D%E0%B4%95%E0%B4%BE%E0%B4%B0%E0%B4%BF_%E0%B4%AE%E0%B5%87%E0%B4%B3%E0%B4%82_1.jpg/960px-%E0%B4%B6%E0%B4%BF%E0%B4%99%E0%B5%8D%E0%B4%95%E0%B4%BE%E0%B4%B0%E0%B4%BF_%E0%B4%AE%E0%B5%87%E0%B4%B3%E0%B4%82_1.jpg',
    categoryIds: ['c6', 'c4'],
    year: 2023,
    duration: '25m'
  },
  {
    id: 'v3',
    title: 'Kambala Dance',
    description: 'A beautiful folk dance performance captured in stunning detail.',
    thumbnailUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b5/Kambala_Dance_%28%E0%B4%95%E0%B4%82%E0%B4%AC%E0%B4%B3_%E0%B4%A8%E0%B5%83%E0%B4%A4%E0%B5%8D%E0%B4%A4%E0%B4%82%29_08.jpg/960px-Kambala_Dance_%28%E0%B4%95%E0%B4%82%E0%B4%AC%E0%B4%B3_%E0%B4%A8%E0%B5%83%E0%B4%A4%E0%B5%8D%E0%B4%A4%E0%B4%82%29_08.jpg',
    categoryIds: ['c3'],
    year: 2022,
    duration: '18m'
  },
  {
    id: 'v4',
    title: 'Making of the Thavil',
    description: 'Inside the artisan workshops crafting traditional percussion instruments.',
    thumbnailUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/26/Thavil-DSC_3864.jpg/960px-Thavil-DSC_3864.jpg',
    categoryIds: ['c6'],
    year: 2021,
    duration: '35m'
  },
  {
    id: 'v5',
    title: 'Monsoon in the Backwaters',
    description: 'A serene visual journey through the rainy season in Kerala\'s lush waterways.',
    thumbnailUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6c/Goan_Backwaters.jpeg/960px-Goan_Backwaters.jpeg',
    categoryIds: ['c5'],
    year: 2024,
    duration: '45m'
  },
  {
    id: 'v6',
    title: 'The Majestic Temple Elephants',
    description: 'Understanding the role and care of caparisoned elephants in Kerala culture.',
    thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Uthralikavu_Pooram1.JPG',
    categoryIds: ['c4'],
    year: 2023,
    duration: '52m'
  }
];
