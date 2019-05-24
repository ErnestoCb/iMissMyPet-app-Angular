import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/auth.service";

@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.component.html',
  styleUrls: ['./recuperar-password.component.css']
})
export class RecuperarPasswordComponent implements OnInit {

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {
  }

}
