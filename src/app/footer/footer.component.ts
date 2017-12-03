import { Component, OnInit, Input } from '@angular/core';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnChanges {

  // tslint:disable-next-line:no-input-rename
  @Input('data')
  todos = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(): void {
    console.log('只要這個component有任人元件發生變動就會觸發');
  }

}
