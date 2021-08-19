
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BehaviorSubject, of } from 'rxjs';
import { DocumentDialogComponent } from './document-dialog/document-dialog.component';
import { DocumentComponent } from './document.component';
import { DocumentItem, DocumentItemCreate } from './document.model';

describe('DocumentComponent', () => {
  let component: DocumentComponent;
  let fixture: ComponentFixture<DocumentComponent>;
  let items$: BehaviorSubject<DocumentItem[]>;
  let matDialogSpy: jasmine.SpyObj<MatDialog>;

  beforeEach(waitForAsync(() => {
    items$ = new BehaviorSubject<DocumentItem[]>([]);
    matDialogSpy = jasmine.createSpyObj<MatDialog>('MatDialog', ['open']);
    TestBed.configureTestingModule({
      declarations: [DocumentComponent],
      imports: [
        NoopAnimationsModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule
      ],
      providers: [
        {provide: MatDialog, useValue: matDialogSpy},
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should compile', () => {
    expect(component).toBeTruthy();
  });
  it('should not add item if dialog is cancelled', () => {
    const matDialogRefSpy = jasmine.createSpyObj<MatDialogRef<DocumentDialogComponent>>(
      'MatDialogRef',
      ['afterClosed']
    );
    matDialogRefSpy.afterClosed.and.returnValue(of(undefined));
    matDialogSpy.open.and.returnValue(matDialogRefSpy);
    component.openDialog();
    expect(matDialogSpy.open).toHaveBeenCalledOnceWith(DocumentDialogComponent);
    expect(matDialogRefSpy.afterClosed).toHaveBeenCalledTimes(1);
  });
});
