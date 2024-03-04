import { Component, EventEmitter, Input, Output, input, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',

})
export class SearchBoxComponent implements OnInit, OnDestroy {

  private tubodeAgua:Subject<string>=new Subject<string>();
  private debouncerSuscription?: Subscription;
  @Input()
  public placeholder:string='';

  @Input ()
  public initialValue: string ='';

  // Para realizar busquedas
  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();

  ngOnInit(): void {
   this.debouncerSuscription= this.tubodeAgua.pipe(
      debounceTime(350)
    ).subscribe(value=>{
      this.onDebounce.emit(value);
    })
  }
  ngOnDestroy(): void {
  this.debouncerSuscription?.unsubscribe();
  }

  emitvalue(value:string):void{
    this.onValue.emit(value);
  }
  OnKeyPress(searchTerm:string){
    this.tubodeAgua.next(searchTerm);
  }
}
