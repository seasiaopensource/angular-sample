import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hmt-wrapper',
  template: `
    <div class="container">
      <ng-content></ng-content>
    </div>
  `,
  styles: ['.full-container{ max-width: 1440px; width: 100%; }']
})
export class WrapperComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
