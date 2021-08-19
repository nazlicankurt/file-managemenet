import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DocumentItem } from './document.model';

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  url = 'http://localhost:18000/api/v1/Document/';
  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}
  getAllDoc(): Observable<DocumentItem[]> {
    return this.http.get<DocumentItem[]>(this.url + 'GetFiles', {
      headers: this.httpHeaders,
    });
  }

  addDoc(product: DocumentItem): Observable<DocumentItem> {
    return this.http.post<DocumentItem>(this.url + 'AddNewDocument', product);
  }
  delete(id: any): Observable<DocumentItem> {
    return this.http.delete<DocumentItem>(this.url + 'Delete/' + id);
  }
}
