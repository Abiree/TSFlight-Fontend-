import { Injectable } from '@angular/core';
import {Flight} from '../model/flight.model';
import {data} from '../data/flight';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {


  constructor(private http:HttpClient) { }

  getFlight():Observable<any>{
    return this.http.get('http://localhost:3000/flights/')
  }

  postFlight(flight:Flight){
    
  }

  deleteFlight(id:number){

  }

}
