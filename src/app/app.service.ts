import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class addToCartVisibiltyService {
  addToCartVisibility: boolean = true;
  constructor() {}

  setAddToCartVisibility(): Observable<boolean> {
    let data = new Observable<boolean>((observer) => {
      observer.next(false);
      setTimeout(() => {
        observer.next(true);
      }, 4000);
    });
    return data;
  }
}
