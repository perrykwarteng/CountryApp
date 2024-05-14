import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-country-card',
  standalone: true,
  imports: [],
  templateUrl: './country-card.component.html',
  styleUrl: './country-card.component.css',
})
export class CountryCardComponent {
  @Input() isDarkMode: boolean = false;
  @Input() data: any;
  @Input() countryFlag: string = '';
  @Input() countryName: string = '';
  @Input() countryPopulation: string = '';
  @Input() countryRegion: string = '';
  @Input() countryCapital: string = '';
}
