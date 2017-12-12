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

export interface PanoramaImage {

}

export interface PanoramaAuthor {
  type: PanoramaAuthorType;
  id: string;
  self: string;
  data: PanoramaAuthorData;
}

export interface PanoramaData {
  readonly image_id: string;
  images: PanoramaImage;
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
}
