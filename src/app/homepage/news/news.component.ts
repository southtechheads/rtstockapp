import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  //change this with News API data
  newslist = [ 
    { "title" : "news 1",
      "headline": "nec feugiat nisl pretium fusce",
      "description": 'venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin'
    },
    {
      "title" : "news 2",
      "headline": "et netus et malesuada fames",
      "description" : "in arcu cursus euismod quis viverra nibh cras pulvinar mattis"
    },
    {
      "title" : "news 3",
      "headline": "nunc faucibus a pellentesque sit",
      "description" : "metus dictum at tempor commodo ullamcorper a lacus vestibulum sed"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
