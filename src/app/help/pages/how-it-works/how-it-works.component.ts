import { Component } from '@angular/core';
import {BaseComponent} from '@src/app/core/classes/BaseComponent';

@Component({
  selector: 'hmt-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.scss']
})
export class HowItWorksComponent extends BaseComponent {
  readonly pageText = this.pageContent.howItWorks;
}
