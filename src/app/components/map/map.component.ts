import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  lat: any;
  lng: any;
  zoom: number = 16;

  constructor() { 
    if(navigator){
      navigator.geolocation.getCurrentPosition ( pos => {
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;
      });
    }
   }

   placeMarker($event){
    console.log($event.coords.lat);
    console.log($event.coords.lng);
  }

  ngOnInit() {
    console.log("hola " + this.zoom);
  }

}
