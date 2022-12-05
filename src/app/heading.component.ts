import { Component } from '@angular/core';

@Component({
  selector: 'heading-coponent',
  template: `<h1>{{message}}</h1> 
             <p>Button po kliknięciu ma zostać zdezaktywowany na 4 sekundy :)</p>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HeadingComponent {
  message: string = 'Ćwiczenie od MMO';
}
