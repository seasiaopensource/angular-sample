import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "hmt-info-message",
  templateUrl: "./info-message.component.html",
  styleUrls: ["./info-message.component.scss"]
})
export class InfoMessageComponent implements OnInit {
  @Input() message: string;
  @Input() type?: string;
  messageContent: string;
  messageType: string;

  constructor() {}

  ngOnInit() {
    this.messageContent =
      this.message ||
      "Sorry, the operation couldn't be completed. Please try again.";
    this.messageType = this.type || "error";
  }
}
