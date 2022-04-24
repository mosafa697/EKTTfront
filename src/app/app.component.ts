import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { AppServiceService } from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ekttfront';
  constructor(private service: AppServiceService){}

  ngOnInit(): void {
      // this.getTransactionsFromAPI();
      this.getSummaryFromAPI();
  }
  getTransactionsFromAPI(){
    this.service.getTransactions(1,5,1,5).subscribe((response) => {
      console.log("has response", response);
    }, (error) => {
      console.log(error);
    });
  }
  getSummaryFromAPI(){
    this.service.getSummary(1,5).subscribe((response) => {
      console.log("has response", response);
    }, (error) => {
      console.log(error);
    });
  }
}
