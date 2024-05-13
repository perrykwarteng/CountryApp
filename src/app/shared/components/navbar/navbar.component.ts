import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  dark: boolean = false;
  @Output() darkModeChange = new EventEmitter<boolean>();

  isDarkMode() {
    this.dark = !this.dark;
    this.darkModeChange.emit(this.dark);
  }
}
