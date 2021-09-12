import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  selectedTab: any = "description";

  constructor() { }

  ngOnInit(): void {
  }

  onTabChange(tab: any) {
    this.selectedTab = tab;
  }

}
