import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private baseUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) {
  }



  uploadImage(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    const req = new HttpRequest('POST', `/server/api/auth/uploadPhoto`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/files`);
  }

  getFile(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/files/${id}`);
  }

  getImage(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/images/${id}`);
  }
}
