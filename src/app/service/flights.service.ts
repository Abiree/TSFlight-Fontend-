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

  queryFlight(orig:string,dest:string):Observable<any>{
    return this.http.get(`http://localhost:3000/flights/query/${orig}/${dest}`)
  }

  postFlight(flight:Flight){
    return this.http.post('http://localhost:3000/flights',flight).subscribe(data =>{
      console.log("data posted to server")
    });
  }

  updateFlight(flight:Flight):Observable<any>{
   
    return this.http.patch(`http://localhost:3000/flights/${flight.id}`,flight)
    
  }

  getDest():Observable<any>{
    return this.http.get('http://localhost:3000/flights/cities/dest')
  }
  getOrigin():Observable<any>{
    return this.http.get('http://localhost:3000/flights/cities/origin')
  }


  deleteFlight(id:any):Observable<any>{
    return this.http.delete(`http://localhost:3000/flights/${id}`)
  }

}
