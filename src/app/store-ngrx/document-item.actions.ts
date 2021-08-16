import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { DocumentItem } from '../document/document.model';


export const addDocumentItems = createAction(
  '[DocumentItem/API] Add DocumentItems',
  props<{ documentItems: DocumentItem[] }>()
);

export const updateDocumentItems = createAction(
  '[DocumentItem/API] Update DocumentItems',
  props<{ documentItems: Update<DocumentItem>[] }>()
);

export const deleteDocumentItems = createAction(
  '[DocumentItem/API] Delete DocumentItems',
  props<{ ids: number[] }>()
);
