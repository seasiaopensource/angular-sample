import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'hmt-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
  @Input() title?: string;
  @Input() message?: string;
  titleContent: string;
  messageContent: string;

  constructor() { }

  ngOnInit() {
    this.titleContent = this.title || 'Uh oh!';
    this.messageContent = this.message || 'Sorry, the operation couldn\'t be completed. Please try again.';
  }

}
