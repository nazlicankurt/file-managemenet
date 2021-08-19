import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TableWithActionDisplayColumns } from '../common/model/table.model';
import { DocumentItem, DocumentItemCreate } from './document.model';
import { BaseComponent } from '../common/util/component.util';
import { DocumentService } from './document.service';
import { DocumentDialogComponent } from './document-dialog/document-dialog.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'inv-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss'],
})
export class DocumentComponent  extends BaseComponent implements OnInit {
  doc : DocumentItem[];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource = new MatTableDataSource<DocumentItem>();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns: TableWithActionDisplayColumns<DocumentItem> = [
    'id',
    'name',
    'fileName',
    'length',
    'contentType',
    'actions',
  ];
  constructor(
    private dialog: MatDialog,
    private http: HttpClient,
    private service: DocumentService,
    private changeDetectorRefs: ChangeDetectorRef
  ) {
    super();
  }
  ngOnInit(): void {
this.fetchData();
  }

  openDialog() {
    this.dialog.open<DocumentDialogComponent, null, DocumentItemCreate>(DocumentDialogComponent)
    .afterClosed().subscribe(result => {
      this.fetchData();
    }); }
    fetchData() {
      this.service.getAllDoc().subscribe(
        (res) => {this.dataSource.data =res as DocumentItem[]
      })



    }
  removeItem(id: number): void {
    this.service.delete(id).subscribe(()=> {
      this.fetchData();
  });
}
}



