import {Component} from '@angular/core';
import {Cards} from 'src/app/Cards';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  cards = new Cards();
  card;
  idCard;
  nameCard = '';
  pathname;

  constructor() {
    this.idCard = String(window.location).substr(-2).replace(/\//i, '');
    this.pathname = window.location.pathname;

    if (this.pathname !== '/home') {
      this.card = this.cards.cards[this.idCard - 1];
      this.nameCard = this.cards.cards[this.idCard - 1].name;
    }
  }
}
