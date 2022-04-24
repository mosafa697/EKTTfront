import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http: HttpClient) { }

  //1- Return transaction listing for the logged in seller
  getTransactions(page: Number = 1, per_page: Number = 5, seller_id: Number, range: Number = 5) {

    let host: string = "/api/transactions?";
    let url: string = host + "page=" + page + "&per_page=" + per_page + "&seller_id=" + seller_id + "&date_range=" + range;

    return this.http.get(url);
  }
  
  //2- View the sales summary for sellers' incomes
  getSummary(seller_id: Number, range: Number = 5) {

    let host: string = "/api/sellers/transactions-summary?";
    let url: string = host + "seller_id=" + seller_id + "&date_range=" + range;

    return this.http.get(url);
  }
}
