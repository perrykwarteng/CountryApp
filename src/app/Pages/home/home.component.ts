import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { CountryCardComponent } from '../../shared/components/country-card/country-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, CountryCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  isDarkMode: boolean = false;
  darkMode(event: boolean) {
    this.isDarkMode = event;
  }
}
