import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) {

   }
   url='https://api.openweathermap.org/data/2.5/weather'
   apikey='becd12b2179492d295abac772ac3c01f';


   getWeatherDataByCoords(lat:any,lon:any){
     let params=new HttpParams()
     .set('lat',lat)
     .set('lon',lon)
     .set('units','imperial ')
     .set('appid',this.apikey)


     return this.http.get(this.url,{params});
}
  getWeatherDataByCityName(city:string){
    let params=new HttpParams()
     .set('q',city)
     .set('units','imperial ')
     .set('appid',this.apikey)
     return this.http.get(this.url,{params});
  }
}
