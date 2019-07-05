import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'hmt-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {
  @Input() applyClass: 'info-right' | 'centered';

  constructor() { }

  ngOnInit() {
  }

}
