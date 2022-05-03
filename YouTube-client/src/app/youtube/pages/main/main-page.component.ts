import { Component } from '@angular/core';
import { Item } from 'src/app/core/models/youtube-api.model';

import { GetVideoDataService } from 'src/app/core/services/youtube-api.service';
import { SortingService } from 'src/app/core/services/sorting.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  constructor(private getVideoDataService: GetVideoDataService, private sorting: SortingService) {}

  public getData(): Item[] {
    return this.getVideoDataService.getData();
  }

  public getDate(): string {
    return this.sorting.getDate();
  }

  public getView(): string {
    return this.sorting.getView();
  }

  public getWord(): string {
    return this.sorting.getWord();
  }
}
