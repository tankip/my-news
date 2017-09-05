import { Component, OnInit } from '@angular/core';

import { NewsService } from '../news.service';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {
  allNews = [];
  page: number = 1;

  constructor(private newsService:NewsService) { }

  ngOnInit() {
    this.newsService.getTechNews().subscribe((data) => {
      // console.log(data);
      // console.log(typeof(data));
      this.allNews = data.articles;
    })
    
  }

}
