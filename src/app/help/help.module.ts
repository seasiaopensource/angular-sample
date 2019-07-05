import { NgModule } from "@angular/core";
import { SharedModule } from "@src/app/shared";
import { RouterModule } from "@angular/router";

import { HowItWorksComponent } from "@src/app/help/pages/how-it-works/how-it-works.component";
import { ContactUsComponent } from "@src/app/help/pages/contact-us/contact-us.component";

@NgModule({
  declarations: [HowItWorksComponent, ContactUsComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: "how-it-works", component: HowItWorksComponent },
      { path: "contact-us", component: ContactUsComponent }
    ])
  ],
  exports: [RouterModule]
})
export class HelpModule {}
