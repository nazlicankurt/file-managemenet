
import { DocumentItem } from '../document/document.model';
import { addDocumentItems, deleteDocumentItems, updateDocumentItems } from './document-item.actions';
import { initialState, reducer, State } from './document-item.reducer';

describe('InventoryItem Reducer', () => {

  let date: Date;
  let item: DocumentItem;
  let state: State;

  beforeEach(() => {
    date = new Date();
    item = {id: 1, name: 'Galaxy Guide', lastUpdatedAt: date};
    state = {ids: [item.id], entities: {[item.id]: item}};
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;
      const result = reducer(initialState, action);
      expect(result).toBe(initialState);
    });
  });

  describe('addDocumentItems action', () => {
    it('should add items', () => {
      const action = addDocumentItems({documentItems: [item]});
      const result = reducer(initialState, action);
      expect(result).toEqual(state);
    });
  });

  describe('deleteDocumentItems action', () => {
    it('should delete items', () => {
      const action = deleteDocumentItems({ids: [item.id]});
      const result = reducer(state, action);
      expect(result).toEqual(initialState);
    });
  });

});
