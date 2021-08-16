/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DocumentDialogComponent } from './document-dialog.component';
import { DocumentItemCreate } from '../document.model';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('DocumentDialogComponent', () => {
  let component: DocumentDialogComponent;
  let fixture: ComponentFixture<DocumentDialogComponent>;
  let matDialogRefSpy: jasmine.SpyObj<MatDialogRef<DocumentDialogComponent, DocumentItemCreate>>;

  beforeEach(waitForAsync(() => {
    matDialogRefSpy = jasmine.createSpyObj<MatDialogRef<DocumentDialogComponent, DocumentItemCreate>>(
      'MatDialogRef',
      ['close']
    );
    TestBed.configureTestingModule({
      declarations: [DocumentDialogComponent],
      imports: [
        NoopAnimationsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatDialogModule,
        MatInputModule
      ],
      providers: [
        {provide: MatDialogRef, useFactory: () => matDialogRefSpy}
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  it('should not submit form if it is invalid', () => {
    expect(component.form.invalid).toBeTruthy();
    component.submit();
    expect(matDialogRefSpy.close).toHaveBeenCalledTimes(0);
  });

});
