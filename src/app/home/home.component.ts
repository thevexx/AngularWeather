import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data;

  city;
  country;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  getWeatherBtn() {
    this.apiService.getWeather(this.city, this.country).subscribe(res => {
      console.log(res.status);
      console.log(res.json().weather[0].description);
      this.data = res.json().weather[0].description;
    });

    console.log('weather btn presed');


  }
}
