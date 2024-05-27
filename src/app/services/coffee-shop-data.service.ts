import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coffee } from '../models/Coffee';

const URL = 'https://664dce54ede9a2b55654f7de.mockapi.io/api/v1/coffees/Coffees';

@Injectable({
  providedIn: 'root'
})
export class CoffeeDataService {

  constructor(private http : HttpClient) { }

   /** Consume la API de cervezas y devuelve un observable a la respuesta. */
   public getAll(): Observable<Coffee[]> {
    // fetch('url', {method: 'GET'})
    console.log('GET', URL);
    return this.http.get<Coffee[]>(URL);
  }

}
