import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  title = 'basics';
  data: any;

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    // this.http.get('https://jsonplaceholder.typicode.com/posts/11')
    //   .subscribe(data => {
    //     this.data = data;
    //   })
  }
}
