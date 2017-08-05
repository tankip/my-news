import { Component, OnInit } from '@angular/core';

import { NewsService } from '../news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public allNews = [];
  page: number = 1;

  constructor(private newsSevice:NewsService) { }

  ngOnInit() {
    this.getAllNews();
  }

  getAllNews(){
    let news = [];
    this.newsSevice.getGoogleNews().subscribe((data) => {
      data.articles.forEach(element => {
        news.push(element);
      });
      
    });
    this.newsSevice.getTechNews().subscribe((data) => {
     data.articles.forEach(element => {
        news.push(element);
      });
    });
    if(news){
      this.allNews = news;
    }
  }

}
