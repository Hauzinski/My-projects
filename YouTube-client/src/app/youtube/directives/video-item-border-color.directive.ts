import { Directive, Input, HostBinding, OnInit } from '@angular/core';
import { Item } from 'src/app/core/models/youtube-api.model';

@Directive({
  selector: '[borderColor]',
})
export class VideoItemBorderColorDirective implements OnInit {
  @Input() public item!: Item;

  private dateNow!: number;

  private publishedDate!: number;

  private publicationAge!: number;

  private msPerWeek: number = 6.048e8;

  private msPerMonth: number = 2.628e9;

  private msPerHalfYear: number = this.msPerMonth * 6;

  @HostBinding('style.borderBottomColor') get getBorderColor() {
    if (this.publicationAge < this.msPerWeek) {
      return 'var(--blue)';
    } else if (this.publicationAge < this.msPerMonth) {
      return 'var(--green)';
    } else if (this.publicationAge > this.msPerHalfYear) {
      return 'var(--red)';
    }
  }

  ngOnInit() {
    this.dateNow = Number(new Date());
    this.publishedDate = Date.parse(this.item.snippet.publishedAt);
    this.publicationAge = this.dateNow - this.publishedDate;
  }
}
