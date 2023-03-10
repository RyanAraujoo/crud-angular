import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  currentClickNavbar: string = 'navbar-brand'
  getClickNavbarForAriaCurrent(event: string) { this.currentClickNavbar = event }
}
