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

  newdepart:Date=new Date();
  newarrive:Date=new Date();

  constructor(private flightsservice: FlightsService) { }

  ngOnInit(): void {
    this.refresh();
   
  }
  refresh(){
    this.flightsservice.getFlight().subscribe(data=>{
      this.flightList=data;
    })
  }
  //change check in checkbox when click it
  toggleNonStop(){
    this.nonstop = !this.nonstop;
  }
//post fight
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
//delete flight
delete(flight:Flight){
  if (window.confirm('Are you sure you want to delete this flight? ')){
  this.flightsservice.deleteFlight(flight.id).subscribe(data=>{
    if(data && data['affected']){
      this.refresh();
    }
  });
}
}

//update flight
  update(flight:Flight){
    const fli:Flight={
      id:flight.id,
      origin: flight.origin,
      destination: flight.destination,
      flightnumber:flight.flightnumber,
      depart:this.newdepart,
      arrive:this.newarrive, 
      nonstop:flight.nonstop
    }
    return this.flightsservice.updateFlight(fli).subscribe(data=>{
      if(data && data['affected']){
        this.refresh(); 
      }
    })
  };

  //change depart value to update it after
  onChangeDepart(value:string) {
    this.newdepart = new Date(value);
   
  }
//change arrive value to update it after
  onChangeArrive(value:string) {
    this.newarrive = new Date(value);
    
  }
//change nonstop value to update it after
  toggleNonStopp(nonstop:boolean){
    nonstop = !nonstop;
    
  }
//change date to short format
  getDate(date:Date){  
    return new Date(date).toISOString().split('T')[0];
  }

  

}
