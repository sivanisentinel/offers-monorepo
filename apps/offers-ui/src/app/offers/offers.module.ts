import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OfferComponent} from './offer/offer.component';
import {OffersPageComponent} from './offers-page/offers-page.component';
import {OffersDataService} from './offers-data-service.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    OfferComponent,
    OffersPageComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [OffersDataService],
  exports: [OfferComponent, OffersPageComponent]
})
export class OffersModule {
}
