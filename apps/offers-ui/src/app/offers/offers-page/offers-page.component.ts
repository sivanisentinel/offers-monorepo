import { Component, OnInit } from '@angular/core';
import { OfferInterface } from '../offer-interface';
import { OffersDataService } from '../offers-data-service.service';

@Component({
  selector: 'offers-monorepo-app-offers-page',
  templateUrl: './offers-page.component.html',
  styleUrls: ['./offers-page.component.scss']
})
export class OffersPageComponent implements OnInit {

  offersData: OfferInterface[];

  constructor(private offersService: OffersDataService) {
    this.offersData = [];
  }

  ngOnInit(): void {
    this.offersService.offers.subscribe(data => {
      this.offersData = data;
    });
  }

  onPurchase(id : number): void {
    this.offersService.purchesItem(id).subscribe({
      next: (response) => {
        if(response == 200){
          this.offersService.getItems();
          console.log('success!');
        }
      },
      error: error => {
        console.log(error);
        error = error.message;
        console.error('There was an error!', error);
      }
    });
  }


}
