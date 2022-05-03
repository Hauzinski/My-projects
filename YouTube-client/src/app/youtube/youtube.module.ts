import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YoutubeRoutingModule } from 'src/app/youtube/youtube-routing.module';

import { VideoItemComponent } from 'src/app/youtube/components/video-item/video-item.component';
import { VideoMetricsComponent } from 'src/app/youtube/components/video-metrics/video-metrics.component';
import { MainPageComponent } from 'src/app/youtube/pages/main/main-page.component';
import { VideoDetailedInformationPageComponent } from 'src/app/youtube/pages/detailed-information/detailed-information-page.component';

import { VideoItemBorderColorDirective } from 'src/app/youtube/directives/video-item-border-color.directive';
import { VideoMetricsFormatPipe } from './pipes/video-metrics-format.pipe';
import { SortingDatePipe } from './pipes/sorting-date.pipe';
import { SortingViewPipe } from './pipes/sorting-view.pipe';
import { SortingWordPipe } from './pipes/sorting-word.pipe';
import { VideoImageThumbnailPipe } from './pipes/video-image-thumbnail.pipe';

@NgModule({
  imports: [CommonModule, YoutubeRoutingModule],
  declarations: [
    MainPageComponent,
    VideoItemComponent,
    VideoMetricsComponent,
    VideoItemBorderColorDirective,
    VideoDetailedInformationPageComponent,
    VideoMetricsFormatPipe,
    SortingDatePipe,
    SortingViewPipe,
    SortingWordPipe,
    VideoImageThumbnailPipe,
  ],
})
export class YoutubeModule {}
