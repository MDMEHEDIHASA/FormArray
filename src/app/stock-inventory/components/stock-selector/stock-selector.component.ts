import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Product } from '../../models/product.interface';

@Component({
  selector: 'app-stock-selector',
  templateUrl: './stock-selector.component.html',
  styleUrls: ['./stock-selector.component.scss']
})
export class StockSelectorComponent {
  @Input() 
  parentForm: FormGroup;

  @Input() products: any;
  @Output() added =  new EventEmitter<any>();

  constructor() {
    this.parentForm = new FormGroup({});
    this.products = [];
  }

  onAdd() {
    console.log("check stok seelector-----------", this.parentForm.get('selector'));
    this.added.emit(this.parentForm.get('selector'));
  }
}
