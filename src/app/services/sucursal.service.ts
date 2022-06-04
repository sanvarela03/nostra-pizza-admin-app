import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sucursal } from '../models/sucursal';
import { Ubicacion } from '../models/ubicacion';

@Injectable({
  providedIn: 'root',
})
export class SucursalService {
  private url: string = 'http://localhost:8090/api/sucursales';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  getAll(): Observable<Sucursal[]> {
    return this.http.get<Sucursal[]>(this.url);
  }

  create(sucursal: Sucursal): Observable<Sucursal> {
    return this.http.post<Sucursal>(this.url, sucursal, {
      headers: this.httpHeaders,
    });
  }

  get(id: any): Observable<Sucursal> {
    return this.http.get<Sucursal>(`${this.url}/${id}`);
  }

  update(sucursal: Sucursal): Observable<Sucursal> {
    return this.http.put<Sucursal>(`${this.url}/${sucursal.id}`,sucursal, {headers: this.httpHeaders});
  }
}
