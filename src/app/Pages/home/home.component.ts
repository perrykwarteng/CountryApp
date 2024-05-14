import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { CountryCardComponent } from '../../shared/components/country-card/country-card.component';
import { CountriesService } from '../../core/Services/countries.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, CountryCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  isDarkMode: boolean = false;
  countryData: any;

  constructor(private countriesService: CountriesService) {
    this.getAllCountries();
  }
  darkMode(event: boolean) {
    this.isDarkMode = event;
  }

  getAllCountries() {
    this.countriesService.getAllCountries().subscribe({
      next: (data) => {
        // console.log(data);
        this.countryData = data;
      },
    });
  }
}
