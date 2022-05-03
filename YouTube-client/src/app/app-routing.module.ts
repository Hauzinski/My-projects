import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundPageComponent } from 'src/app/core/pages/404/404-page.component';
import { DefaultPageComponent } from 'src/app/core/pages/default/default-page.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultPageComponent,
  },
  {
    path: 'main',
    loadChildren: () => import('src/app/youtube/youtube.module').then((m) => m.YoutubeModule),
  },
  {
    path: 'user',
    loadChildren: () => import('src/app/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
