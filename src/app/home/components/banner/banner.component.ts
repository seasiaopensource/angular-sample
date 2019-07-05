import { Component, OnInit } from '@angular/core';
import siteContent from '@src/app/site-content';

@Component({
  selector: 'hmt-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  bannerContent: {
    image: string,
    heading: string,
    subHeading: string,
    content: string,
    buttonText: string
  };

  constructor() {
    this.bannerContent = siteContent.homePage.banner;
  }

  ngOnInit() {
  }

}
