import IEvents from "./IEvents";

interface Attributes {
  tabDay: string;
  organizer: string;
  theme: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  contentImg: ContentImg;

  // RELAÇÕES
  events: IEvents;
}

interface Datum {
  id: number;
  attributes: Attributes;
}

interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

interface Meta {
  pagination: Pagination;
}

export default interface ISchedules {
  data: Datum[];
  meta: Meta;
}

interface Data {
  id: number;
  attributes: Attributes;
}

interface ContentImg {
  data: Data;
}
