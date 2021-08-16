import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import { environment } from '../../environments/environment';

 import * as fromDocumentItem from './document-item.reducer';

export interface State {
  [fromDocumentItem.documentItemsFeatureKey]: fromDocumentItem.State;
}

export const reducers: ActionReducerMap<State> = {
  [fromDocumentItem.documentItemsFeatureKey]: fromDocumentItem.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
