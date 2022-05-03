import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Item } from 'src/app/core/models/youtube-api.model';

@Component({
  selector: 'youtube__video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.scss'],
})
export class VideoItemComponent {
  @Input() public item!: Item;

  constructor(private router: Router) {}

  detailed(): void {
    this.router.navigate([`main/detailed/${this.item.id}`]);
  }
}
