import { Component } from '@angular/core';
import { BaseComponent } from '@src/app/core/classes/BaseComponent';

@Component({
  template: `
    <hmt-error
      [title]="pageContent.pageNotFound.title"
      [message]="pageContent.pageNotFound.message"></hmt-error>
  `
})
export class PageNotFoundComponent extends BaseComponent{}
