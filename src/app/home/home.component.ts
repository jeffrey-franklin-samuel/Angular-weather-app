import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lat: any;
  lon: any;
  weather: any;
  constructor(private weatherService :WeatherService){


  }
  ngOnInit(): void {
    this.getlocation();
    }
  getlocation(){
    if("geolocation" in navigator){
      navigator.geolocation.watchPosition((success)=>{
        this.lat=success.coords.latitude;
        this.lon=success.coords.longitude;


        this.weatherService.getWeatherDataByCoords(this.lat,this.lon).subscribe((data: any)=>{
          this.weather=data;
        })

      })

    }
  }
  getCity(city: string){
    this.weatherService.getWeatherDataByCityName(city).subscribe(data=>{
      this.weather=data;
    })
  }

}
