import { Component, Input } from '@angular/core';

@Component({
  selector: 'message',
  template: `<h1>{{message}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  @Input() message: string;
}
