import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeadingComponent } from './heading.component';
import { addToCartVisibiltyService } from './app.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HeadingComponent],
  providers: [addToCartVisibiltyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
