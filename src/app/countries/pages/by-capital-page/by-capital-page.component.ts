import { Component, OnInit, ViewChild } from '@angular/core';
import { CountriesService } from '../../services/countries.services';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent implements OnInit {

  public countries:Country[]=[]
  public initialValue: string='';
  public isLoading:boolean =false;


  constructor(private countriesService:CountriesService){}
  ngOnInit(): void {
    this.countries=this.countriesService.cacheStore.byCapital.countries;
    this.initialValue=this.countriesService.cacheStore.byCapital.term;

  }

  SearchByCapital(term:string){
    this.isLoading=true;

    this.countriesService.searchCapital(term).subscribe(countries=>{
       this.countries=countries;
       this.isLoading=false;

    });
  }
}
