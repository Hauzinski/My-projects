import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from 'src/app/youtube/pages/main/main-page.component';
import { VideoDetailedInformationPageComponent } from 'src/app/youtube/pages/detailed-information/detailed-information-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'detailed/:id',
    component: VideoDetailedInformationPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoutubeRoutingModule {}
