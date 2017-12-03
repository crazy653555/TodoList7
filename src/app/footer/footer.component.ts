import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnChanges {


  private _todos = [];

  // tslint:disable-next-line:no-input-rename
  @Input('data')
  set todos(value){
    this._todos = value;
    console.log('觸發set todos(value)');
  }

  get todos(){
    console.log('觸發get todos(value)');
    return this._todos;
  }

  @Output() clearBtnClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(): void {
    console.log('只要這個component有任人元件發生變動就會觸發');
  }

  testFunction() {
    console.log('footer test funtcion()');
  }

}
