import { Component } from '@angular/core';

import { FormArray, FormGroup, FormControl } from '@angular/forms';
import { Product } from '../../models/product.interface';

@Component({
  selector: 'app-stock-inventory',
  templateUrl: './stock-inventory.component.html',
  styleUrls: ['./stock-inventory.component.css'],
})
export class StockInventoryComponent {
  products: Product[] = [
    { "id": 1, "price": 2800, "name": "MacBook Pro" },
    { "id": 2, "price": 50, "name": "USB-C Adaptor" },
    { "id": 3, "price": 400, "name": "iPod" },
    { "id": 4, "price": 900, "name": "iPhone" },
    { "id": 5, "price": 600, "name": "Apple Watch" },
  ];

  form = new FormGroup({
    store: new FormGroup({
      branch: new FormControl(''),
      code: new FormControl(''),
    }),
    selector : this.createStock({}),
    stock : new FormArray([
      this.createStock({product_id: 3, quantity: 50}),
      this.createStock({product_id: 5, quantity: 500})
    ]),
  });

  createStock(stock:any) {
    return new FormGroup({
      product_id: new FormControl(parseInt(stock.product_id, 10) || ''),
      quantity: new FormControl(stock.quantity || 10)
    });
  }

  onSubmit() {
    console.log('this.form---->', this.form.value);
  }

  addStock(stock:any) {
    const control = this.form.get('stock') as FormArray;
    control.push(this.createStock(stock.value));
    console.log("check control",stock);
    //control.push(stock)
  }

  removeStock(remove:any) {
    const control = this.form.get('stock') as FormArray;
    console.log("check control remove before",remove);
    control.removeAt(remove)
    
    //control.push(stock)
  }
}
