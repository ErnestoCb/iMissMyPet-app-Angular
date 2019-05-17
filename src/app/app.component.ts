import { Component, OnInit } from '@angular/core';
declare var device;
import 'hammerjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'iMissMyPet';

  ngOnInit(){
    document.addEventListener('deviceready', function() { 
      alert(device.platform); 
      }, false); 
  }
}
