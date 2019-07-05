import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {environment} from '@src/environments/environment';
import {DeviceService} from '@src/app/core';
import {BaseComponent} from '@src/app/core/classes/BaseComponent';

@Component({
  selector: 'hmt-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent extends BaseComponent implements OnInit {
  readonly pageText = this.pageContent.askForHelp;
  isSubmitted: boolean;
  contactForm: FormGroup;
  recaptchaKey: string = environment.googleRecaptchaKey;
  showSuccessMessage: boolean;
  contactFormErrorMessages = {
    USER_EMAIL: {email: this.pageContent.error.message.email}
  }

  get isFormInValid(): boolean {
    return this.isSubmitted && this.contactForm.invalid;
  }

  constructor(private deviceService: DeviceService) {
    super();
    this.showSuccessMessage = false;
  }

  ngOnInit() {
    const controls = {
      RECAPTCHA: new FormControl(null, Validators.required),
      USER_EMAIL: new FormControl(null, [Validators.required, Validators.email]),
      SUBJECT: new FormControl(null, Validators.required),
      COMMENT: new FormControl(null, Validators.required),
      QUOTE_NUMBER: new FormControl(null),
    };
    this.contactForm = new FormGroup(controls);
  }

  handleButtonClick(): void {
    this.isSubmitted = true;

    if (this.contactForm.invalid) {
      return;
    }
    this.showLoading();
    this.deviceService
      .contactUs({
        senderAddress: this.contactForm.value.USER_EMAIL,
        confirmSenderAddress: this.contactForm.value.USER_EMAIL,
        recipientAddress: 'support@attbuybackprogram.com',
        subject: this.contactForm.value.SUBJECT,
        message: this.contactForm.value.COMMENT
      })
      .subscribe(
        response => this.resetForm(response),
        error => this.handleApiError()
      );
  }

  resetForm(response): void {
    this.hideLoading();
    this.scrollPageToTop(40);
    this.showSuccessMessage = true;
    this.contactForm.reset();
    this.isSubmitted = false;
  }
}
