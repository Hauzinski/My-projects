import { Component, Input } from '@angular/core';

import { Item } from 'src/app/core/models/youtube-api.model';

@Component({
  selector: 'youtube__video-metrics',
  templateUrl: './video-metrics.component.html',
  styleUrls: ['./video-metrics.component.scss'],
})
export class VideoMetricsComponent {
  @Input() public item!: Item;
}
