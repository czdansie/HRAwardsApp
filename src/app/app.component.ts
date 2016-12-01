import { Component } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';
import { NeworderPageComponent } from './neworder-page/neworder-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'HR Awards App works!';
}
