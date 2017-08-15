import { Component, OnInit } from '@angular/core';

import { NewsService } from '../news.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  allNews = [];
  page: number = 1;
  constructor(private newsService:NewsService) { }

  ngOnInit() {
    this.newsService.getSportNews().subscribe((data) => {
      this.allNews = data.articles;
        })
  }

}
