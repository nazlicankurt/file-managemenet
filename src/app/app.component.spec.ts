import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { AppComponent } from './app.component';
import { DocumentModule } from './document/document.module';
import { documentItemsFeatureKey } from './store-ngrx/document-item.reducer';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        DocumentModule
      ],
      providers: [
        provideMockStore({initialState: {[documentItemsFeatureKey]: {}}})
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
