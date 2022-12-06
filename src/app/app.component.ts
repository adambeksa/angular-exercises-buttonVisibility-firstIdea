import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { addToCartVisibiltyService } from './app.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  buttonVisibility$: Observable<boolean>;
  buttonVisibility: boolean = true;
  private mySubscription;

  constructor(private addToCartVisibiltyService: addToCartVisibiltyService) {}

  ngOnInit(): void {
    this.setupDataSources();
  }

  ngOnDestroy(): void {
    this.mySubscription.unsubscribe();
  }

  addToCart(): void {
    this.fetchAddToCartVisibility();
  }

  private setupDataSources(): void {
    this.buttonVisibility$ =
      this.addToCartVisibiltyService.setAddToCartVisibility();
  }

  private fetchAddToCartVisibility(): void {
    // Jeżeli użyję subscribe tak jak poniżej to nie muszę używać unsubscribe?
    // this.buttonVisibility$.subscribe((res) => {
    //   this.buttonVisibility = res;
    // });

    //Jeżeli użyję subscribe tak jak poniżej to muszę używać unsubscribe?
    this.mySubscription = this.buttonVisibility$.subscribe((res) => {
      this.buttonVisibility = res;
    });
  }
}
