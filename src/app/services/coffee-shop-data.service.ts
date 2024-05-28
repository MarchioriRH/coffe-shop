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
  
  // Method to get all products from the API.
  public getAll(): Observable<Coffee[]> { 
    console.log('GET', URL);
    return this.http.get<Coffee[]>(URL);
  }

}
