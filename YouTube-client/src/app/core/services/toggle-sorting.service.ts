import { Injectable } from '@angular/core';

@Injectable()
export class ToggleSortingService {
  private isVisible: boolean = false;

  private displayStyle: string = this.isVisible ? 'flex' : 'none';

  toggleDisplayStyle(): void {
    this.isVisible = !this.isVisible;
    this.displayStyle = this.isVisible ? 'flex' : 'none';
  }

  getDisplayStyle(): string {
    return this.displayStyle;
  }
}
