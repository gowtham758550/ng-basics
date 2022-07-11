import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  dataSource: string[];
  constructor() {
    this.dataSource = [
      "Gowtham",
      "Methran",
      "Sridhar"
    ]
  }

  // POST
  addName(name: string): void {
    this.dataSource.push(name);
  }

  // GET
  getAllName(): Observable<string[]> {
    return of(this.dataSource);
  }

  // DELETE
  deleteName(name: string): void {
    const index = this.dataSource.indexOf(name);
    if (index != -1) this.dataSource.splice(index, 1);
  }
}
