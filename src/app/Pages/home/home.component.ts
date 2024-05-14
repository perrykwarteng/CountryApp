import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { CountryCardComponent } from '../../shared/components/country-card/country-card.component';
import { CountriesService } from '../../core/Services/countries.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, CountryCardComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  isDarkMode: boolean = false;
  countryData: any;
  countrySearchData: any;
  filterData: any;
  keyword: string = '';

  constructor(private countriesService: CountriesService) {
    this.getAllCountries();
  }
  darkMode(event: boolean) {
    this.isDarkMode = event;
  }

  searchCountry() {
    this.countriesService.searchCountries(this.keyword).subscribe({
      next: (data) => {
        this.countrySearchData = data;
      },
    });
  }

  filterRegion(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;
    this.countriesService.filterByRegion(selectedValue).subscribe({
      next: (data) => {
        this.countrySearchData = data;
      },
    });
  }

  getAllCountries() {
    this.countriesService.getAllCountries().subscribe({
      next: (data) => {
        this.countryData = data;
      },
    });
  }
}
