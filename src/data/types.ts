export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  backdropUrl?: string;
  backdropPosition?: string;
  categoryIds: string[];
  seriesId?: string;
  episodeNumber?: number;
  duration?: string;
  year?: number;
}

export interface Series {
  id: string;
  title: string;
  description: string;
  coverUrl: string;
  backdropUrl?: string;
  categoryId: string;
  episodeCount: number;
}

export interface Category {
  id: string;
  title: string;
  slug: string;
  description: string;
  imageUrl?: string;
}

export interface Collection {
  id: string;
  title: string;
  videoIds: string[];
}
