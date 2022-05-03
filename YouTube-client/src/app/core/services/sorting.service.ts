import { Injectable } from '@angular/core';

@Injectable()
export class SortingService {
  private sortByDate: string = '';

  private sortByView: string = '';

  private sortByWord: string = '';

  public setDate(): void {
    this.sortByDate = !this.sortByDate || this.sortByDate === 'decrease' ? 'increase' : 'decrease';
  }

  public getDate(): string {
    return this.sortByDate;
  }

  public setView(): void {
    this.sortByView = !this.sortByView || this.sortByView === 'decrease' ? 'increase' : 'decrease';
  }

  public getView(): string {
    return this.sortByView;
  }

  public setWord(word: string): void {
    this.sortByWord = word;
  }

  public getWord(): string {
    return this.sortByWord;
  }
}
