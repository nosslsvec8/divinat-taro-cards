import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-block-info-card',
  templateUrl: './block-info-card.component.html',
  styleUrls: ['./block-info-card.component.scss']
})
export class BlockInfoCardComponent implements OnInit{
  @Input() card;
  @Input() idHtml;
  @Input() titleContext;
  @Input() h2Text;

  ngOnInit() {
    console.log(this.card);
    console.log(this.idHtml.value);
    console.log(this.titleContext.value);
    console.log(this.h2Text);
  }
}
