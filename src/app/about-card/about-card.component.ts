import { Component } from '@angular/core';
import {Cards} from 'src/app/Cards';

@Component({
  selector: 'app-about-card',
  templateUrl: './about-card.component.html',
  styleUrls: ['./about-card.component.scss']
})
export class AboutCardComponent {
  cards = new Cards();
  card;
  idCard;
  nameCard;

  constructor() {
    this.idCard = String(window.location).substr(-2).replace(/\//i, '');
    // console.log('id: ' + this.idCard);

    this.card = this.cards.cards[this.idCard - 1];
    this.nameCard = this.cards.cards[this.idCard - 1].name;
  }
}
