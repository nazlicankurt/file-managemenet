import { Injectable } from '@angular/core';
import { UpdateNum } from '@ngrx/entity/src/models';
import { Store } from '@ngrx/store';
import { State } from '.';
import { DocumentItem, DocumentItemCreate } from '../document/document.model';
import { addDocumentItems, deleteDocumentItems, updateDocumentItems } from './document-item.actions';

import { selectAll } from './document-item.selectors';

@Injectable({providedIn: 'root'})
export class DocumentItemStore {

  entities$ = this.store.select(selectAll);
  private lastId = 0;

  constructor(private store: Store<State>) { }

  add(...items: DocumentItemCreate[]): void {
    const now = new Date();
    const documentItems: DocumentItem[] = items.map(item => ({
      ...item,
      id: ++this.lastId,
      lastUpdatedAt: now
    }));
    this.store.dispatch(addDocumentItems({documentItems}));
  }

  remove(...ids: number[]): void {
    this.store.dispatch(deleteDocumentItems({ids}));
  }

  update(...items: UpdateNum<DocumentItem>[]): void {
    const now = new Date();
    const documentItems = items.map(item => ({...item, changes: {...item.changes, lastUpdatedAt: now}}));
    this.store.dispatch(updateDocumentItems({documentItems}));
  }

}
