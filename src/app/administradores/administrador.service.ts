import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Administrador } from './administrador';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {
  
  private url: string = 'http://localhost:8090/api/administradores';
  private httpHeaders = new HttpHeaders({'Content-Type' : 'application/json'});

  constructor(private http: HttpClient) { }

  getAll(): Observable<Administrador[]> {
    return this.http.get<Administrador[]>(this.url);
  }
}
