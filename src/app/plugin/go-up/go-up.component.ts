import {Component} from '@angular/core';

@Component({
  selector: 'app-go-up',
  templateUrl: './go-up.component.html',
  styleUrls: ['./go-up.component.scss']
})
export class GoUPComponent{
  repeatedClick() {
    document.getElementById('go_UP').click();
  }

  goUp() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(this.repeatedClick, 10);
    }
  }
}
