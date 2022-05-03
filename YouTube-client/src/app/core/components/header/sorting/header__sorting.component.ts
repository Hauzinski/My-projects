import { Component } from '@angular/core';

import { SortingService } from 'src/app/core/services/sorting.service';

@Component({
  selector: 'header__sorting',
  templateUrl: './header__sorting.component.html',
  styleUrls: ['./header__sorting.component.scss'],
})
export class HeaderSortingComponent {
  public sortingWord: string = '';

  constructor(private sorting: SortingService) {}

  public sortByDate(): void {
    this.sorting.setDate();
  }

  public sortByView(): void {
    this.sorting.setView();
  }

  public sortByWord(): void {
    this.sorting.setWord(this.sortingWord);
  }
}
