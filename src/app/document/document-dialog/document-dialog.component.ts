import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'inv-document-dialog',
  templateUrl: './document-dialog.component.html',
  styleUrls: ['./document-dialog.component.scss'],
})
export class DocumentDialogComponent {
  form = this.formBuilder.group({
    name: [null, Validators.required],
  });
  fileToUpload: any;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    public dialogRef: MatDialogRef<DocumentDialogComponent>,


  ) {}

  handleFileInput(e: any) {
    this.fileToUpload = e?.target?.files[0];
  }
  submit() {

    const formData: FormData = new FormData();

    formData.append('file', this.fileToUpload);
    formData.append('name', this.form.value.name);
    return this.http
      .post('http://localhost:18000/api/v1/Document/AddNewDocument', formData, {
        headers: new HttpHeaders(),
      })

      .subscribe(() => this.dialogRef.close(this.form.valid)

     );

  }
}
