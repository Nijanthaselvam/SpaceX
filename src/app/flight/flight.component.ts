import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FlightServiceService } from '../flight-service.service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {
  rocket_data: any;
  constructor(private http1: FlightServiceService) {
    this.rocket_data = []
  }

  ngOnInit(): void {
    this.http1.myData().subscribe(data => {
      this.rocket_data = data;
    })
    
  }
  year(y: any) {
    this.http1.myYear(y).subscribe(data => {
      this.rocket_data = data;
    
    })

  }
  sendSuccess(s: any) {
    this.http1.success(s).subscribe(data => {
      this.rocket_data = data;
    })
    
  }

  landSuccess(l:any) {
    this.http1.landSuccess(l).subscribe(data => {
      this.rocket_data = data;
    })
  }
}
