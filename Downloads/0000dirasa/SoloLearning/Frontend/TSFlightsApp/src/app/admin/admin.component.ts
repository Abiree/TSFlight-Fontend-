import { Component, OnInit } from '@angular/core';
import { Flight } from '../model/flight.model';

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

  constructor() { }

  ngOnInit(): void {
  }
  toggleNonStop(){}
  sendFlight(){}

}
