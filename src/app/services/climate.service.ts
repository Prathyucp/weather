import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from '../models/weather';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClimateService {

  constructor(private http:HttpClient) { }
  url:string = "https://api.weather.gov/gridpoints/DTX/65,33/forecast";

  getWeatherDetails():Observable<Weather>{
    return this.http.get<Weather>(this.url);
  }
}
