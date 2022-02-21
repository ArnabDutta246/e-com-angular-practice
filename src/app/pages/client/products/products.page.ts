import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from 'src/app/interface/interface';
import { FireAnalyticsService } from 'src/app/services/fire-analytics/fire-analytics.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  products: Product[];
  codeSemple:string;
  constructor(private activatedRoute: ActivatedRoute,private fireAna:FireAnalyticsService) { }

  ngOnInit(): void {
    console.log(
      'Activated route data in Component:::',
      this.activatedRoute.data
    );
    this.activatedRoute.data.subscribe((response: any) => {
      console.log('PRODUCT FETCHING', response);
      this.products = response.products;
      console.log('PRODUCT FETCHED');
    });

    //========= [ calling fireAna ] =================
    this.setUser();
    this.setProperty();
    this.logEvent();
  }
    //========= [ firebase analytics ] ==============
    setUser() {
      this.fireAna.setUser();
     }
    
     setProperty() {
       this.fireAna.setProperty();
     }
    
     logEvent() {
       this.fireAna.logEvent('product_page','product page visit');
     }
}
