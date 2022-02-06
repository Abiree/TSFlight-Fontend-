import { Injectable } from '@angular/core';
import {Flight} from '../model/flight.model';
import {data} from '../data/flight';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {
  flights:Flight[]=data;

  constructor() { }

  getFlight(){
    return this.flights;
  }

  postFlight(flight:Flight){
    
  }

  deleteFlight(id:number){

  }

}
