import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  template: `
    <div class="home-container">
      <hmt-banner></hmt-banner>
      <hmt-steps class="steps-home"></hmt-steps>
    </div>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private titleService: Title
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Angular Sample');
  }

}
