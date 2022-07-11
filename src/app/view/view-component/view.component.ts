import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  template: `
    <div>
      <p>Hey i am view component from view module</p>
    </div>
  `,
  styles: [
  ]
})
export class ViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
