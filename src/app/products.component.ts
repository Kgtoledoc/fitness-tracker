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

  onAddProduct(form) {
    //this.products.push(this.productName)
    if (form.valid) {
      this.products.push(form.value.productName)
    }
  }

  onRemoveProduct(productName: string) {
    console.log("Click me");
    this.products = this.products.filter(p => p !== productName);
  }

}