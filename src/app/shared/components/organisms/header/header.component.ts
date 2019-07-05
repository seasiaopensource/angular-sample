import { Component, ViewChild, ElementRef } from "@angular/core";
import { BaseComponent } from "@src/app/core/classes/BaseComponent";

@Component({
  selector: "hmt-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent extends BaseComponent {
  @ViewChild("navbarToggler") navbarToggler: ElementRef;
  readonly pageText = this.pageContent.header;

  constructor() {
    super();
  }

  navBarTogglerIsVisible() {
    return this.navbarToggler.nativeElement.offsetParent !== null;
  }

  collapseNav() {
    if (this.navBarTogglerIsVisible()) {
      this.navbarToggler.nativeElement.click();
    }
  }

  checkAndCollapse() {
    if (this.navBarTogglerIsVisible()) {
      this.collapseNav();
    }
  }
}
