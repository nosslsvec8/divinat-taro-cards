import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-block-info-card',
  templateUrl: './block-info-card.component.html',
  styleUrls: ['./block-info-card.component.scss']
})
export class BlockInfoCardComponent {
  @Input() card;
  @Input() idHtml;
  @Input() titleContext;
  @Input() h2Text;
}
