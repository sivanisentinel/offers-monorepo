import { Component, Input, OnInit, Output, EventEmitter  } from '@angular/core';
import {OfferInterface} from '../offer-interface';

@Component({
  selector: 'offers-monorepo-app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {

  @Input() data: OfferInterface | null;
  @Output() onClickEvent = new EventEmitter<number>();

  constructor() {
    this.data = null;
  }

  ngOnInit(): void {
  }

  purches() {
    if(this.data) {
      this.onClickEvent.emit(this.data.id);
    }
  }

}
