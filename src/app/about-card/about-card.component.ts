import { Component, OnInit } from '@angular/core';
import {Cards} from 'src/app/Cards';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-about-card',
  templateUrl: './about-card.component.html',
  styleUrls: ['./about-card.component.scss']
})
export class AboutCardComponent implements OnInit {
  cards = new Cards();
  card;
  idCard;
  nameCard;
  pathname;

  constructor(private title: Title) {
    this.idCard = String(window.location).substr(-2).replace(/\//i, '');
    this.pathname = window.location.pathname;
    this.card = this.cards.cards[this.idCard - 1];
    this.nameCard = this.cards.cards[this.idCard - 1].name;
  }

  ngOnInit() {
    this.title.setTitle(this.nameCard);
  }
}
