import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { Item } from 'src/app/models/Item';
import * as data from '../../../data/data.json';
import { debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-items-page',
  templateUrl: './items-page.component.html',
  styleUrls: ['./items-page.component.scss'],
})
export class ItemsPageComponent implements OnInit {

  public items: Item[] = (data as any).default;
  public filteredData: Item[];
  public searchFilter$ = new BehaviorSubject<string>('');
  public searchTerm: string;

  constructor(public navCtrl: NavController) { }

  ngOnInit(): void {
    this.filteredData = this.items;
    const search_history = JSON.parse(localStorage.getItem('search_history'))
    if (search_history) {
      this.filterItems(search_history)
      this.searchTerm = search_history
    } else {
      this.searchFilter$.pipe(debounceTime(500)).subscribe(data => this.filterItems(data))
    }
   }

   /**
    * Filtering items
    * @param value 
    * @returns filtered items
    */
   public filterItems(value: any) {
    localStorage.setItem('search_history', JSON.stringify(value))
    this.filteredData = this.items.filter((singleItem) => {
      return singleItem.name.toLowerCase().indexOf(value.toLowerCase()) > -1;
    });
   }

  /**
   * Navigates to single singleItem page
   * @param id 
   * @returns void
   */
  public navigateTo(id: string) {
    this.navCtrl.navigateForward(`/home/item/${id}`)
  }

}
