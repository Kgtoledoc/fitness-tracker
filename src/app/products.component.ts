import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',

})
export class ProductsComponent {
  productName = "A Book";
  isDisable = true;

  constructor() {
    setTimeout(() => {
      //this.productName = "A Tree"
      this.isDisable = false;
    }, 3000)
  }

}