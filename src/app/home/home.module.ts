import { NgModule } from '@angular/core';

import { SharedModule } from '@src/app/shared';
import { HomeRoutingModule } from '@src/app/home/home-routing.module';

/**
 * Import common components
 */
import { BannerComponent } from '@src/app/home/components/banner/banner.component';

/**
 * Import Pages
 */
import { HomeComponent } from '@src/app/home/pages/home/home.component';

@NgModule({
  declarations: [
    BannerComponent,
    HomeComponent
  ],
  imports: [
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
