import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { DocumentModule } from './document/document.module';
import { DocumentService } from './document/document.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    DocumentModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,


  ],
  providers: [DocumentService],
  bootstrap: [AppComponent],
})
export class AppModule {}
