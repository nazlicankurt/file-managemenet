import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { DocumentItem } from '../document/document.model';




import * as DocumentItemActions from './document-item.actions';
export const documentItemsFeatureKey = 'documentItems';

export interface State extends EntityState<DocumentItem> {
  // additional entities state properties
}

export const adapter: EntityAdapter<DocumentItem> = createEntityAdapter<DocumentItem>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export const reducer = createReducer(
  initialState,
  on(DocumentItemActions.addDocumentItems,
    (state, action) => adapter.addMany(action.documentItems, state)
  ),
  on(DocumentItemActions.updateDocumentItems,
    (state, action) => adapter.updateMany(action.documentItems, state)
  ),
  on(DocumentItemActions.deleteDocumentItems,
    (state, action) => adapter.removeMany(action.ids, state)
  )
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors();
