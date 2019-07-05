import {Params} from '@angular/router';

export interface IBreadcrumb {
  title: string;
  type: string;
  link: string[];
  linkParams: Params;
}
