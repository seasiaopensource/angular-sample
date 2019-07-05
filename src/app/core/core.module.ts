import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {HttpTokenInterceptor} from '@src/app/core/interceptors/http.interceptor';

import {
  ApiService,
  BreadcrumbService,
  DeviceService
} from './services';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
    ApiService,
    DeviceService,
    BreadcrumbService
  ]
})
export class CoreModule { }
