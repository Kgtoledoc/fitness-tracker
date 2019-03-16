import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService } from './products.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',

})
export class ProductsComponent implements OnInit, OnDestroy {
  productName = "A Book";
  isDisable = true;
  products = [];
  private productsSubcription: Subscription;


  constructor(private productsService: ProductsService) {
    setTimeout(() => {
      //this.productName = "A Tree"
      this.isDisable = false;

    }, 3000)
  }

  ngOnInit() {
    this.products = this.productsService.getProduct();
    this.productsSubcription = this.productsService.productsUpdated.subscribe(() => {
      this.products = this.productsService.getProduct();
    });
  }

  onAddProduct(form) {
    //this.products.push(this.productName)
    if (form.valid) {
      // this.products.push(form.value.productName)
      this.productsService.addProduct(form.value.productName);
    }
  }

  onRemoveProduct(productName: string) {
    console.log("Click me");
    this.products = this.products.filter(p => p !== productName);
  }

  ngOnDestroy() {
    this.productsSubcription.unsubscribe();
  }

}