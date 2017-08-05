import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable, Subject, ReplaySubject } from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class NewsService {
  private baseUrl:string = 'https://newsapi.org/v1/articles';
  private apiKey:string = '';

  constructor(private http:Http) { }

  getUrl(){
    return this.baseUrl;
  }

  getGoogleNews():Observable<any> {
    let source = 'google-news';
    let params: URLSearchParams = new URLSearchParams();
    params.set('source',source);
    params.set('apiKey', this.apiKey);
    return this.http.get(this.getUrl(), {
      search : params
    }).map((response:Response) => {
      return response.json();
    });

  }
  getTechNews():Observable<any> {
    let source = 'the-next-web';
    let params: URLSearchParams = new URLSearchParams();
    params.set('source', source);
    params.set('apiKey', this.apiKey);
    return this.http.get(this.getUrl(), {
      search : params
    }).map((response:Response) => {
      return response.json();
    });

  }

   getSportNews():Observable<any> {
    let source = 'four-four-two';
    let params: URLSearchParams = new URLSearchParams();
    params.set('source', source);
    params.set('apiKey', this.apiKey);
    return this.http.get(this.getUrl(), {
      search : params
    }).map((response:Response) => {
      return response.json();
    });

  }

  getEnterNews():Observable<any> {
    let source = 'entertainment-weekly';
    let params: URLSearchParams = new URLSearchParams();
    params.set('source', source);
    params.set('apiKey', this.apiKey);
    return this.http.get(this.getUrl(), {
      search : params
    }).map((response:Response) => {
      return response.json();
    });

  }
}


