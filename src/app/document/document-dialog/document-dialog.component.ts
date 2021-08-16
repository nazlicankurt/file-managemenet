import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DocumentItemCreate } from '../document.model';


@Component({
  selector: 'inv-document-dialog',
  templateUrl: './document-dialog.component.html',
  styleUrls: ['./document-dialog.component.scss']
})
export class DocumentDialogComponent implements OnInit {

  form = this.formBuilder.group({
    name: [null, Validators.required],
    invoiceNumber: [null, [Validators.required, Validators.min(0)]]
  });

  constructor(private dialogRef: MatDialogRef<DocumentDialogComponent, DocumentItemCreate>,
              private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    var a;
   return a;
  }

  submit(): void {
    if (this.form.invalid) { return; }
    const result = this.form.getRawValue();
    this.dialogRef.close(result);
  }
  result: string = '';


  save(event: any): void {
    var selectedFile = event.target.files[0];
    this.result = 'File Name: ' + selectedFile.name;
    console.log("File : ", selectedFile)
    this.result += '<br>File Size: ' + selectedFile.size;
    this.result += '<br>File Type: ' + selectedFile.type;
  }



}
