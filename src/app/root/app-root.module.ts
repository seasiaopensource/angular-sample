import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgxPrintModule} from 'ngx-print';

import { SharedModule } from '@src/app/shared';
import { CoreModule } from '@src/app/core';
import { AppRootRoutingModule } from '@src/app/root/app-root-routing.module';

import { HeaderComponent, FooterComponent } from '@src/app/shared';
import { WrapperComponent } from '@src/app/root/components/wrapper/wrapper.component';
import { RootComponent } from '@src/app/root/components/root/root.component';
import { PageNotFoundComponent } from '@src/app/root/components/page-not-found/page-not-found-component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    WrapperComponent,
    PageNotFoundComponent,
    RootComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule,
    NgxPrintModule,
    AppRootRoutingModule
  ],
  providers: [
    Title
  ],
  bootstrap: [RootComponent]
})
export class AppRootModule { }
