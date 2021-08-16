import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { first, takeUntil } from 'rxjs/operators';
import { TableWithActionDisplayColumns } from '../common/model/table.model';
import { DocumentItemStore } from '../store-ngrx/document-item.store';
import { DocumentDialogComponent } from './document-dialog/document-dialog.component';
import { DocumentItem, DocumentItemCreate } from './document.model';
import { BaseComponent } from '../common/util/component.util';

@Component({
  selector: 'inv-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss'],
})
export class DocumentComponent  extends BaseComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource = new MatTableDataSource<DocumentItem>();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns: TableWithActionDisplayColumns<DocumentItem> = [
    'id',
    'name',
    'lastUpdatedAt',
    'actions',
  ];
  constructor(
    private matDialog: MatDialog,
    private itemStore: DocumentItemStore
  ) {
    super();
  }

  ngOnInit(): void {
    this.itemStore.entities$
      .pipe(takeUntil(this.destroyed$))
      .subscribe((items) => (this.dataSource.data = items));
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  openItemDialog(): void {
    this.matDialog
      .open<DocumentDialogComponent, null, DocumentItemCreate>(
        DocumentDialogComponent
      )
      .afterClosed()
      .pipe(first())
      .subscribe((item) => {
        if (item !== undefined && item !== null) {
          this.itemStore.add(item);
        }
      });
  }

  removeItem(id: number): void {
    this.itemStore.remove(id);
  }
}
