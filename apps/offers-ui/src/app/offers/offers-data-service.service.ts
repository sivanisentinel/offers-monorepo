import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OfferInterface } from './offer-interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OffersDataService {

  offers: Observable<OfferInterface[]>;

  constructor(private http: HttpClient) {
    this.offers = this.http.get<any>('/api/offers');
  }

  getItems(){
    this.offers = this.http.get<any>('/api/offers');
  }
  purchesItem(id: number){
    return this.http.post(`/api/offers/purchase/${id}`,{})
  }
}
