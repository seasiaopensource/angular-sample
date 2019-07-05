import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'hmt-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  isLoading: boolean;
  @Input() src: string;
  @Input() type?: string;
  @Input() alt?: string;
  @Input() title?: string;

  constructor() {
    this.isLoading = true;
  }

  ngOnInit() {
  }

}
