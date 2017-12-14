export enum PanoramaAuthorType {
  user = 'user'
  // TODO: can add another types of authors
}

export enum PanoramaType {
  panorama = 'panorama'
  // TODO: can add another types of panoramas
}

export interface PanoramaAuthorData {
  username: string;
  display_name: string;
}

export interface PanoramaWatermark {
  show: boolean;
}

export interface PanoramaImagesThumbnails {
  height: number;
  width: number;
  url: string;
  content_type: string;
}

export interface PanoramaImagesCubemaps {
  size: number;
  lod: number;
  content_type: string;
  format: string;
  base_url: string;
}

export interface PanoramaImagesPreview {
  width: number;
  content_type: string;
  url: string;
}

export interface PanoramaImages {
  thumbnails: Array<PanoramaImagesThumbnails>;
  cubemaps: Array<PanoramaImagesCubemaps>;
  previews: Array<PanoramaImagesPreview>;
  equirectangulars: Array<number>;
  orientation: Array<number>;
}

export interface PanoramaAuthor {
  type: PanoramaAuthorType;
  readonly id: string;
  self: string;
  data: PanoramaAuthorData;
}

export interface PanoramaData {
  readonly image_id: string;
  images: PanoramaImages;
  title: string;
  description: string;
  created_at: string;
  privacy: string;
  watermark: PanoramaWatermark;
  featured_at: string;
  published_at: string;
  author: PanoramaAuthor;
  allow_share: boolean;
}

export interface Panorama {
  readonly type: PanoramaType;
  readonly id: string;
  readonly self: string;
  data: PanoramaData;
  isFavorite?: boolean;
}
