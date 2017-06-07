import { Component } from '@angular/core';
import { AuthService } from 'auth0-js'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor (public auth:AuthService) {
    auth.handleAuthentication();
  }
}
