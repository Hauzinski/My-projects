import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { GetVideoDataService } from 'src/app/core/services/youtube-api.service';

import { Item } from 'src/app/core/models/youtube-api.model';

@Component({
  selector: 'app-detailed-information-page',
  templateUrl: './detailed-information-page.component.html',
  styleUrls: ['./detailed-information-page.component.scss'],
})
export class VideoDetailedInformationPageComponent implements OnInit {
  public item!: Item;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private getVideoDataService: GetVideoDataService,
  ) {}

  public goMainPage(): void {
    this.router.navigate(['main']);
  }

  ngOnInit(): void {
    let item: Item;
    this.getVideoDataService.getVideoById(this.activatedRoute.snapshot.params.id).subscribe((data) => {
      item = data[0];

      if (item) {
        this.item = item;
      } else {
        this.router.navigate(['**'], { skipLocationChange: true });
      }
    });
  }
}
