import { Component, OnInit } from '@angular/core';

import { NewsService } from '../news.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {

  allNews = [];
  page: number = 1;

  constructor(private newsService:NewsService) { }

  ngOnInit() {
    this.newsService.getEnterNews().subscribe((data) => {
      this.allNews = data.articles;
    })
  }

}
