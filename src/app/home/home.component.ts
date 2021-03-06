import { Component, OnInit } from '@angular/core';
import { Flight } from '../model/flight.model';
import { FlightsService } from '../service/flights.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  flights:Flight[]=[];
  selectedOrigin: string="";
  selectedDestination: string="";
  origins:any[]=[];
  dests:any[]=[];


  constructor(private flightsService:FlightsService) { }

  ngOnInit(): void {
    
    this.flightsService.getFlight().subscribe(data=>{
      this.flights=data;

      
    });

    this.flightsService.getOrigin().subscribe(data=>{
      this.origins=data;
    })
    this.flightsService.getDest().subscribe(data=>{
      this.dests=data;
    })


  }
  query():void{
    const dest=this.selectedDestination;
    const org=this.selectedOrigin;
   
    this.flightsService.queryFlight(org,dest).subscribe(data=>{
     this.flights=data;
      console.log(data);
    });
    
    
  }

 

}
