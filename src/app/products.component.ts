import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',

})
export class ProductsComponent {
  productName = "A Book";
  isDisable = true;
  products = ["A book", 'A tree'];
  constructor() {
    setTimeout(() => {
      //this.productName = "A Tree"
      this.isDisable = false;
    }, 3000)
  }

  onAddProduct() {
    this.products.push(this.productName)

  }

}