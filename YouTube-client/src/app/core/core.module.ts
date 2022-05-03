import { NgModule, Optional, SkipSelf } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from 'src/app/core/components/header/header.component';
import { HeaderAuthComponent } from 'src/app/core/components/header/auth/header__auth.component';
import { HeaderSearchComponent } from 'src/app/core/components/header/search/header__search.component';
import { HeaderSortingComponent } from 'src/app/core/components/header/sorting/header__sorting.component';
import { NotFoundPageComponent } from 'src/app/core/pages/404/404-page.component';
import { DefaultPageComponent } from './pages/default/default-page.component';

import { ToggleSortingService } from 'src/app/core/services/toggle-sorting.service';
import { GetVideoDataService } from 'src/app/core/services/youtube-api.service';
import { GetInputService } from 'src/app/core/services/get-input.service';
import { SortingService } from 'src/app/core/services/sorting.service';

import { ToggleSortingDirective } from 'src/app/core/components/header/directives/toggle-sorting.directive';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [
    HeaderComponent,
    HeaderAuthComponent,
    HeaderSearchComponent,
    HeaderSortingComponent,
    ToggleSortingDirective,
    NotFoundPageComponent,
    DefaultPageComponent,
  ],
  providers: [ToggleSortingService, GetInputService, GetVideoDataService, SortingService],
  exports: [HeaderComponent],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
