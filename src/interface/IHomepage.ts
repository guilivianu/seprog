import IOrganizers from "./IOrganizers";
import ISchedules from "./ISchedules";

export interface Attributes {
  heroTitle: string;
  heroDescription: string;
  aboutTitle: string;
  aboutDescription: string;
  createdAt: Date;
  updatedAt: Date;

  // RELAÇÕES
  organizers: IOrganizers[];
  schedules: ISchedules[];
}

interface Data {
  id: number;
  attributes: Attributes;
}

interface Meta {}

export interface IHomepage {
  data: Data;
  meta: Meta;
}
