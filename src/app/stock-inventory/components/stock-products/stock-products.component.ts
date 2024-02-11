import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-stock-products',
  templateUrl: './stock-products.component.html',
  styleUrls: ['./stock-products.component.scss']
})
export class StockProductsComponent {
  @Input() 
  parentForm: FormGroup;

  @Output() remove =  new EventEmitter<any>(); 

  constructor() {
    this.parentForm = new FormGroup({});
  }

  get stocks(){
    return (this.parentForm.get('stock') as FormArray).controls;
  }

  onRemove(i:any) {
    console.log("this.stocks remvoe---->",this.stocks[i].value);
    this.remove.emit(this.stocks[i]);
    //return this.stocks
  }
}
