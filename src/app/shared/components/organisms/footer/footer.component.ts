import { Component, OnInit } from "@angular/core";
import { BaseComponent } from "@src/app/core/classes/BaseComponent";

@Component({
  selector: "hmt-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent extends BaseComponent implements OnInit {
  chatEnabled: boolean;
  languageVersion: boolean;
  readonly pageText = this.pageContent.footer;

  ngOnInit() {
    this.chatEnabled = true;
    this.languageVersion = true;
  }
  print() {
    window.print();
  }
}
