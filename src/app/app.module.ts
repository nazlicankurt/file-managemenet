import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { metaReducers, reducers } from './store-ngrx';

import { DocumentModule } from './document/document.module';
import { DocumentComponent } from './document/document.component';

@NgModule({
  declarations: [
    AppComponent,

   ],
  imports: [
    BrowserModule,
    DocumentModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
