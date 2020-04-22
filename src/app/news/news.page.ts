import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: 'news.page.html',
  styleUrls: ['news.page.scss']
})
export class News {

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  constructor() {}

}
