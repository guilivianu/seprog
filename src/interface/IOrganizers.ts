export default interface IOrganizers {
  data: Datum[];
  meta: Meta;
}

export interface IOrganizer {
  data: Datum;
  meta: Meta;
}

interface Meta {
  pagination: Pagination;
}

interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

interface Datum {
  id: number;
  attributes: Attributes2;
}

interface Attributes2 {
  organizer: string;
  shortContent: string;
  longContent: string;
  socialUrl: string;
  socialName: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  logo: Logo;
}

interface Logo {
  data: Data;
}

interface Data {
  id: number;
  attributes: Attributes;
}

interface Attributes {
  name: string;
  alternativeText?: any;
  caption?: any;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: any;
  provider: string;
  provider_metadata?: any;
  createdAt: Date;
  updatedAt: Date;
}

interface Formats {
  thumbnail: Thumbnail;
}

interface Thumbnail {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path?: any;
  width: number;
  height: number;
  size: number;
  url: string;
}
