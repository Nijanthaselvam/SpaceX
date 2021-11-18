import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightServiceService {

  constructor(private http: HttpClient) {
  
  }

  myData(): Observable<any>{
    return this.http.get <any> ("https://api.spaceXdata.com/v3/launches?limit=100");
    
  }
  myYear(y:any): Observable<any>{
    return this.http.get <any> (" https://api.spaceXdata.com/v3/launches?limit=100&launch_year="+y);
    
  }

  success(s:any): Observable<any>{
    return this.http.get <any> ("https://api.spaceXdata.com/v3/launches?limit=100&launch_success="+s);
    
  }
  landSuccess(ls:any): Observable<any>{
    return this.http.get <any> ("https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success="+ls);
    
  }
}
