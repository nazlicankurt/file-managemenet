export interface DocumentItem {
    id: number;
    name: string;
    lastUpdatedAt: Date;
  }

  export type DocumentItemCreate = Pick<DocumentItem, 'name'>;

