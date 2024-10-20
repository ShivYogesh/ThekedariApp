import { Component } from '@angular/core';
import { DeshboardComponent } from '../sharedcomponent/deshboard/deshboard/deshboard.component';
import { LoginComponent } from '../sharedcomponent/loginApp/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DeshboardComponent,LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-01';
  myCar='Maruti-800';
  
}
