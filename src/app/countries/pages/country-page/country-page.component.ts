import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.services';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit {

  public country?:Country;
  constructor(
    private activitedRoute:ActivatedRoute,
    private countriesService: CountriesService,
    private router:Router,
    private countries:CountriesService,
    ){}


  ngOnInit(): void {
    this.activitedRoute.params
   .pipe(
    switchMap(({id})=>this.countriesService.searchAlphaCode(id)),
     )
     .subscribe(country=>{
      if (!country) return this.router.navigateByUrl('')
    return this.country=country;
    // return;

       });
}

  }

