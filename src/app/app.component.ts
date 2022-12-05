import { Component } from '@angular/core';
import { filter, Observable } from 'rxjs';
import { addToCartVisibiltyService } from './app.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  buttonVisibility$: Observable<boolean>;
  buttonVisibility: boolean = true;

  constructor(private addToCartVisibiltyService: addToCartVisibiltyService) {}

  ngOnInit(): void {
    this.setupDataSources();
  }

  addToCart(): void {
    this.fetchAddToCartVisibility();
  }

  private setupDataSources(): void {
    this.buttonVisibility$ =
      this.addToCartVisibiltyService.setAddToCartVisibility();
  }

  private fetchAddToCartVisibility(): void {
    this.buttonVisibility$.subscribe((res) => {
      this.buttonVisibility = res;
    });
  }
}
