import { Injectable } from '@angular/core';
import { IClientService } from './iclients.service';
import { Observable } from 'rxjs';
import { SaveClientRequest, SaveClientResponse, UpdateClientRequest, UpdateClientResponse, ListClientResponse, DetailClientResponse } from './client.models';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ClientsService implements IClientService{

  private readonly basePath = environment.apiURL
  constructor(private http: HttpClient) { }

  save(request: SaveClientRequest): Observable<SaveClientResponse> {
    return this.http.post<SaveClientResponse>(`${this.basePath}cliente`, request)
  }
  update(request: UpdateClientRequest): Observable<UpdateClientResponse> {
    return this.http.put<UpdateClientResponse>(`${this.basePath}clients`, request)
  }
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.basePath}clients${id}`)
  }
  list(): Observable<ListClientResponse[]> {
    return this.http.get<ListClientResponse[]>(`${this.basePath}clients`)
  }
  findyByID(id: number): Observable<DetailClientResponse> {
    return this.http.get<SaveClientResponse>(`${this.basePath}clients${id}`)
  }
}
