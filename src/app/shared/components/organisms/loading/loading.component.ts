import { Component, Input, OnInit } from "@angular/core";
import siteContent from "@src/app/site-content";

@Component({
  selector: "hmt-loading",
  templateUrl: "./loading.component.html",
  styleUrls: ["./loading.component.scss"]
})
export class LoadingComponent implements OnInit {
  @Input() overlay: boolean;
  @Input() heading: string;
  @Input() message: string;

  head: string;
  msg: string;

  constructor() {}

  ngOnInit() {
    this.head = this.heading || siteContent.loading.heading;
    this.msg = this.message || siteContent.loading.message;
  }
}
