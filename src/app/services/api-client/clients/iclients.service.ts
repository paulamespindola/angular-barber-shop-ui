import { Observable } from "rxjs";
import { DetailClientResponse, ListClientResponse, SaveClientRequest, SaveClientResponse, UpdateClientRequest, UpdateClientResponse } from "./client.models";


export interface IClientService{

  save(request: SaveClientRequest): Observable<SaveClientResponse>

  update(request: UpdateClientRequest): Observable<UpdateClientResponse>

  delete(id: number): Observable<void>

  list(): Observable<ListClientResponse[]>

  findyByID(id: number): Observable<DetailClientResponse>



}
