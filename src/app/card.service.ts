import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Card } from './card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private baseURL = "http://localhost:9080";

  constructor(private httpClient: HttpClient) { }
  
  getCardsList(): Observable<Card[]>{
    return this.httpClient.get<Card[]>(`${this.baseURL}/card/all`);
  }

  createCard(card: Card): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/card/add`, card);
  }

  getCardById(id: number): Observable<Card>{
    return this.httpClient.get<Card>(`${this.baseURL}card/find/${id}`);
  }

  
  updateCard(id: number, card: Card): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/card/update`, card);
  }

  deleteCard(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/card/delete/${id}`);
  }
}