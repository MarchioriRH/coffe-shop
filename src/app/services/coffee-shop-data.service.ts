/**
 * @description Service to get all products from the API.
 * @class CoffeeDataService
 */

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
  
  /**
   * Method to get all products from the API.
   * @return Observable<Coffee[]>
   * @description Method to get all products from the API.
   * @observable 
   **/ 
  public getAll(): Observable<Coffee[]> { 
    return this.http.get<Coffee[]>(URL);
  }

}
