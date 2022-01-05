import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from 'src/app/interface/interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  products: Product[];
  codeSemple:string;
  constructor(private activatedRoute: ActivatedRoute) { }

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
  }

}
