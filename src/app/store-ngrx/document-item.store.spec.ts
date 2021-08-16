// import { TestBed } from '@angular/core/testing';
// import { Store } from '@ngrx/store';
// import { of } from 'rxjs';
// import { InventoryItem } from '../../inventory/inventory.model';
// import { State } from '../index';
// import { addInventoryItems, deleteInventoryItems, updateInventoryItems } from './document-item.actions';
// import { selectAll } from './document-item.selectors';

// import { InventoryItemStore } from './document-item.store';

// describe('InventoryItemStore', () => {
//   let itemStore: InventoryItemStore;
//   let ngrxStore: jasmine.SpyObj<Store<State>>;

//   let date: Date;
//   let item: InventoryItem;
//   let state: State;

//   beforeAll(() => {
//     jasmine.clock().install();
//   });

//   beforeEach(() => {
//     ngrxStore = jasmine.createSpyObj<Store<State>>('Store', ['select', 'dispatch']);
//     TestBed.configureTestingModule({
//       providers: [
//         {provide: Store, useValue: ngrxStore}
//       ]
//     });
//     itemStore = TestBed.inject(InventoryItemStore);
//   });

//   beforeEach(() => {
//     date = new Date();
//     item = {id: 1, name: 'Galaxy Guide', amount: 42, createdAt: date, lastUpdatedAt: date};
//     state = {inventoryItems: {ids: [item.id], entities: {[item.id]: item}}};
//     jasmine.clock().mockDate(date);
//   });

//   afterAll(() => {
//     jasmine.clock().uninstall();
//   });

//   it('should be created', () => {
//     expect(itemStore).toBeTruthy();
//   });

//   it('should select items', () => {
//     expect(ngrxStore.select).toHaveBeenCalledTimes(1);
//   });

//   it('should add item', () => {
//     itemStore.add({name: item.name, amount: item.amount});
//     expect(ngrxStore.dispatch).toHaveBeenCalledOnceWith(addInventoryItems({inventoryItems: [item]}));
//   });

//   it('should remove item', () => {
//     itemStore.remove(item.id);
//     expect(ngrxStore.dispatch).toHaveBeenCalledOnceWith(deleteInventoryItems({ids: [item.id]}));
//   });

//   it('should update items', () => {
//     const updatedDate = new Date(date);
//     updatedDate.setHours(updatedDate.getHours() + 2);
//     jasmine.clock().mockDate(updatedDate);
//     const updateItem = {id: item.id, changes: {name: item.name, amount: 41}};
//     itemStore.update(updateItem);
//     const expectedUpdateItems = {...updateItem, changes: {...updateItem.changes, lastUpdatedAt: updatedDate}};
//     expect(ngrxStore.dispatch).toHaveBeenCalledOnceWith(updateInventoryItems({inventoryItems: [expectedUpdateItems]}));
//   });

// });
