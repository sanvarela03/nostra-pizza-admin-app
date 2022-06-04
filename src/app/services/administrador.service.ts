import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Administrador } from '../models/administrador';
import { LoginAdministrador } from '../models/dto/login-administrador';

@Injectable({
  providedIn: 'root',
})
export class AdministradorService {
  private url: string = 'http://localhost:8090/api/administradores';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  getAll(): Observable<Administrador[]> {
    return this.http.get<Administrador[]>(this.url);
  }

  create(administrador: Administrador): Observable<Administrador> {
    return this.http.post<Administrador>(this.url, administrador, {
      headers: this.httpHeaders,
    });
  }

  get(loginAdministrador: LoginAdministrador): Observable<Administrador> {
    return this.http.post<Administrador>(
      `${this.url}/login`,
      loginAdministrador,
      { headers: this.httpHeaders }
    );
  }

  getById(id: any): Observable<Administrador> {
    return this.http.get<Administrador>(`${this.url}/${id}`)
  }
}
