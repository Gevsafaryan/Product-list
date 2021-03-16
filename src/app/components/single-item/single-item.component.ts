import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/models/Item';
import * as data from 'src/data/data.json';

enum count_types {
  amount = 'amount',
  quantity = 'quantity'
}

@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.scss'],
})
export class SingleItemComponent implements OnInit {

  public items: Item[] = (data as any).default;
  public singleItem: Item;
  public amount: number;
  public quantity: number

  constructor(public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      this.singleItem = this.items.find(item => item.sku === +param.id)
    })
  }

  public setAmountOrQuantity(value: number, type: string) {
    if (type === count_types.amount) {
      this.amount = value;
      this.quantity = +(this.amount / this.singleItem.price).toFixed(2)
    } else {
      this.quantity = value;
      this.amount = +(this.quantity * this.singleItem.price).toFixed(2)
    }
  }

  public changeAmountOrQuantity(event: any, type: string) {
    if (event.target.value >= 0) {
      if (type === count_types.quantity) {
        this.quantity = event.target.value;
        this.amount = +(this.quantity * this.singleItem.price).toFixed(2)
      } else {
        this.amount = event.target.value;
        this.quantity = +(this.amount / this.singleItem.price).toFixed(2)
      }
    }
  }

}
