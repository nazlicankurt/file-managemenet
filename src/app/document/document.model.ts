export class DocumentItem {


  id: number;
  name: string;
  length: number;
  fileName:string;
  contentType: string;


  }
  export type DocumentItemCreate = Pick<DocumentItem, 'name' >;
