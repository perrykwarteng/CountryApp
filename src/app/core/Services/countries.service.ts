import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Urls } from '../constants/Url';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(private http: HttpClient, private urls: Urls) {}

  getAllCountries() {
    return this.http.get(`${this.urls.api}/all`);
  }
}
