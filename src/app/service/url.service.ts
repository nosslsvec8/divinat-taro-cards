import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  pathname = window.location.pathname;
  IdCard = 0;

  constructor() {}

  defineIdCard() {
    this.IdCard = Number(
      String(window.location).split('#')[0].substr(-2).replace(/\//i, '')
    );
  }

  getLocalUrl() {
    return this.pathname;
  }

  getIdCard(): number {
    this.defineIdCard();
    return this.IdCard;
  }
}
