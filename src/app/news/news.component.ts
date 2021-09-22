import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  arr:any;

  constructor(private http: HttpClient) {
    this.http.get<any>('https://newsapi.org/v2/everything?q=tesla&from=2021-08-22&sortBy=publishedAt&apiKey=e6f9a6986ade447eae725b7dfdad091d')
      .subscribe(data => {

        this.arr = data;
      })
  }

  ngOnInit(): void {}


}
