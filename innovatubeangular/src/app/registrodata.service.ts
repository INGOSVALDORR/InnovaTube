import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrodataService {
  private apiUrl = 'http://localhost/inovatube/registrousuario.php';


  constructor(private http: HttpClient) { }
  getDatos(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  postDatos(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
}
