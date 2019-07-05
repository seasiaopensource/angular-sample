import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "hmt-no-results",
  templateUrl: "./no-results.component.html",
  styleUrls: ["./no-results.component.scss"]
})
export class NoResultsComponent implements OnInit {
  @Input() title: string;
  @Input() content: string;

  titleMsg: string;
  contentMsg: string;

  constructor() {}

  ngOnInit() {
    this.titleMsg = this.title || "No Results...";
    this.contentMsg =
      this.content || "Sorry, no devices were found. Please try again.";
  }
}
