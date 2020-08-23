import { Component } from '@angular/core';
import {Cards} from 'src/app/Cards';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  cards = new Cards();
}
