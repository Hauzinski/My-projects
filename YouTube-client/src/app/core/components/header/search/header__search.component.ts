import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { ToggleSortingService } from 'src/app/core/services/toggle-sorting.service';
import { GetVideoDataService } from 'src/app/core/services/youtube-api.service';

@Component({
  selector: 'header__search',
  templateUrl: './header__search.component.html',
  styleUrls: ['./header__search.component.scss'],
})
export class HeaderSearchComponent implements OnInit {
  searchForm: FormGroup = new FormGroup({
    searchText: new FormControl(''),
  });

  constructor(private toggleSortingService: ToggleSortingService, private getVideoDataService: GetVideoDataService) {}

  ngOnInit(): void {
    this.searchForm.get('searchText')?.valueChanges.subscribe((value: string) => {
      this.getVideoDataService.search(value);
    });
  }

  public toggleSorting(): void {
    this.toggleSortingService.toggleDisplayStyle();
  }
}
