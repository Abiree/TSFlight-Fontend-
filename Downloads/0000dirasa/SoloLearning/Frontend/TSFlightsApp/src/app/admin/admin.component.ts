import { Component, OnInit } from '@angular/core';
import { Flight } from '../model/flight.model';
import { FlightsService } from '../service/flights.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  origin:string="";
  destination:string="";
  flightNumber:number=0;
  depart:Date=new Date();
  arrive:Date=new Date();
  nonstop:boolean=false;

  constructor(private flightsservice: FlightsService) { }

  ngOnInit(): void {
  }
  toggleNonStop(){
    this.nonstop = !this.nonstop;
  }

  sendFlight(){
    const flight:Flight={
      origin: this.origin,
      destination: this.destination,
      flightnumber:this.flightNumber,
      depart:this.depart,
      arrive:this.arrive, 
      nonstop:this.nonstop
    }
    this.flightsservice.postFlight(flight);
    
  }

}
