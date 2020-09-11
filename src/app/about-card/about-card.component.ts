import { Component, OnInit } from '@angular/core';
import {Cards} from 'src/app/Cards';
import {Title} from '@angular/platform-browser';
import {UrlService} from '../service/url.service';

@Component({
  selector: 'app-about-card',
  templateUrl: './about-card.component.html',
  styleUrls: ['./about-card.component.scss']
})
export class AboutCardComponent implements OnInit {
  cards = new Cards();
  url = new UrlService();
  idCard = this.url.getIdCard();
  pathname = this.url.getLocalUrl();
  card;
  nameCard;

  constructor(private title: Title) {
    this.card = this.cards.cards[this.idCard - 1];
    this.nameCard = this.cards.cards[this.idCard - 1].name;
  }

  ngOnInit() {
    this.title.setTitle(this.nameCard);
  }
}
