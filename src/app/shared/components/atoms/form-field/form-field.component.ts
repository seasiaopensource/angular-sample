import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

interface Option {
  value: string;
  title: string;
}

@Component({
  selector: 'hmt-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements OnInit {
  @Input() label: string;
  @Input() form: FormGroup;
  @Input() controlName: string;
  @Input() errorMessages: {[key: string]: {}};
  @Input() isSubmitted: boolean;
  @Input() placeholder: string;
  @Input() type?: string;
  @Input() options: Option[];

  controlType: string;

  constructor() { }

  ngOnInit() {
    this.controlType = this.type ? this.type : 'text';
  }

}
