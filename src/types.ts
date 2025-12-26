export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface WorkshopTopic {
  week: number;
  topic: string;
}

export enum WeekDay {
  Sunday = 0,
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
}

