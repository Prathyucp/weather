import { Component, Input, OnInit } from '@angular/core';
import { Period, Weather } from 'src/app/models/weather';
import { ClimateService } from 'src/app/services/climate.service';

@Component({
  selector: 'app-climate',
  templateUrl: './climate.component.html',
  styleUrls: ['./climate.component.css']
})
export class ClimateComponent implements OnInit {
  @Input() todaysClimate:Weather = {} as Weather;
  constructor(private weatherService:ClimateService) { }
  
  name:string = "george";
  temperature:number=0;
  image:string="";
  detailedForecast:string="";
  climate:Weather={} as Weather;
  allPeriods:Period[] =[];
  
  @Input() eachPeriod:Period = {} as Period;
  ngOnInit(): void {
    console.log("1");
    this.weatherService.getWeatherDetails().subscribe((
      (res:Weather)=>{
        console.log(res.properties.periods[0].temperature);
        this.climate = res;
        this.getWeatherInfo(res)
      }
      
    ));

    
  }
  getWeatherInfo(climates:Weather):void{
    this.allPeriods = climates.properties.periods;
    this.temperature = climates.properties.periods[0].temperature;
    this.image = climates.properties.periods[0].icon
    this.detailedForecast = climates.properties.periods[0].detailedForecast;
  }
}
