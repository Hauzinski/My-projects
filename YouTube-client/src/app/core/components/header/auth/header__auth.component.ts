import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header__auth',
  templateUrl: './header__auth.component.html',
  styleUrls: ['./header__auth.component.scss'],
})
export class HeaderAuthComponent {
  constructor(private router: Router) {}

  public goUserPage(): void {
    this.router.navigate(['user']);
  }
}
