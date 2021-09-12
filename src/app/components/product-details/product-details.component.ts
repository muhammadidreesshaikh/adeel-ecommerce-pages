import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  selectedTab: any = "description";
  selectedColor: string = "Black";
  selectedSize: string = "XS";

  colors: any = [
    { name: "Black", code: "#000" },
    { name: "Red", code: "#ff0000" },
    { name: "Gray", code: "#008000" },
  ]

  sizes: any = [
    { name: "XS" },
    { name: "S" },
    { name: "M" },
    { name: "L" },
    { name: "XL" },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onTabChange(tab: any) {
    this.selectedTab = tab;
  }

  onColorChange(color: string) {
    this.selectedColor = color;
  }

  onSizeChange(size: string) {
    this.selectedSize = size;
  }

}
