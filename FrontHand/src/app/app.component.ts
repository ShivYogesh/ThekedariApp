import { Component } from '@angular/core';
import { DeshboardComponent } from '../sharedcomponent/deshboard/deshboard/deshboard.component';
import { LoginComponent } from '../sharedcomponent/loginApp/login/login.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DeshboardComponent,LoginComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-01';
  myCar='Maruti-800';
  
}
