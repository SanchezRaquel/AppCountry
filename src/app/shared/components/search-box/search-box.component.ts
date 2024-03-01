import { Component, EventEmitter, Input, Output, input } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',

})
export class SearchBoxComponent {

  @Input()
  public placeholder:string='';

  // Para realizar busquedas
  @Output()
  public onValue = new EventEmitter<string>();

  emitvalue(value:string):void{
    this.onValue.emit(value);
  }
}
