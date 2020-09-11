import {Component} from '@angular/core';
import {Cards} from 'src/app/Cards';
import {UrlService} from '../service/url.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  cards = new Cards();
  url = new UrlService();
  pathname = this.url.getLocalUrl();

  constructor(public title: Title) {}
}
