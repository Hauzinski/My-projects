import { Directive, HostBinding } from '@angular/core';
import { ToggleSortingService } from 'src/app/core/services/toggle-sorting.service';

@Directive({
  selector: '[toggle]',
})
export class ToggleSortingDirective {
  constructor(private toggleSortingService: ToggleSortingService) {}

  @HostBinding('style.display') get getDisplayStyle() {
    return this.toggleSortingService.getDisplayStyle();
  }
}
