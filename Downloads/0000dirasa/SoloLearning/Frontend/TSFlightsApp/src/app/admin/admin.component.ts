import { Component, OnInit } from '@angular/core';
import { Flight } from '../model/flight.model';
import { FlightsService } from '../service/flights.service';
import {faEdit,faTrash} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  faEdit = faEdit;
  faTrash=faTrash;

  origin:string="";
  destination:string="";
  flightNumber:number=0;
  depart:Date=new Date();
  arrive:Date=new Date();
  nonstop:boolean=false;
  flightList:Flight[]=[];

  constructor(private flightsservice: FlightsService) { }

  ngOnInit(): void {
    this.flightsservice.getFlight().subscribe(data=>{
      this.flightList=data;
    })
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

  update(flight:Flight){
    console.log(`This is what our new flight will look like:`, flight);
  };

  getDate(date:Date){
    
    return new Date(date).toISOString().split('T')[0];
    

  }

}
