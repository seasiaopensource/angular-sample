import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "hmt-info",
  templateUrl: "./info.component.html",
  styleUrls: ["./info.component.scss"]
})
export class InfoComponent {
  @Input() title?: string;
  @Input() message?: string;
  @Input() link?: string;
}
