import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromReducer from './document-item.reducer';

const featureState = createFeatureSelector<fromReducer.State>(fromReducer.documentItemsFeatureKey);

export const selectAll = createSelector(featureState, fromReducer.selectAll);
