import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RecaptchaModule, RecaptchaComponent } from "ng-recaptcha";
import { RecaptchaFormsModule } from "ng-recaptcha/forms";

import { LoadingComponent } from "@src/app/shared/components/organisms/loading/loading.component";
import { TooltipComponent } from "@src/app/shared/components/organisms/tooltip/tooltip.component";
import { ImageComponent } from "@src/app/shared/components/atoms/image/image.component";
import { ErrorComponent } from "@src/app/shared/components/atoms/error/error.component";
import { InfoMessageComponent } from "@src/app/shared/components/atoms/info-message/info-message.component";
import { PaginationComponent } from "@src/app/shared/components/organisms/pagination/pagination.component";
import { InfoComponent } from "@src/app/shared/components/organisms/info/info.component";
import { NoResultsComponent } from "@src/app/shared/components/atoms/no-results/no-results.component";
import { FormFieldComponent } from "@src/app/shared/components/atoms/form-field/form-field.component";
import { PhonePipe } from "@src/app/shared/pipes";

RecaptchaComponent.prototype.ngOnDestroy = function() {
  if (this.subscription) {
    this.subscription.unsubscribe();
  }
};

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    RecaptchaModule,
    RecaptchaFormsModule
  ],
  declarations: [
    PhonePipe,
    LoadingComponent,
    TooltipComponent,
    ImageComponent,
    ErrorComponent,
    InfoMessageComponent,
    PaginationComponent,
    InfoComponent,
    NoResultsComponent,
    FormFieldComponent
  ],
  exports: [
    PhonePipe,
    // List Components
    LoadingComponent,
    TooltipComponent,
    ImageComponent,
    ErrorComponent,
    InfoMessageComponent,
    PaginationComponent,
    InfoComponent,
    NoResultsComponent,
    FormFieldComponent
    // List Modules
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    RecaptchaModule,
    RecaptchaFormsModule
  ]
})
export class SharedModule {}
