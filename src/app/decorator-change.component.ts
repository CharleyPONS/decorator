import { Component, Input, OnInit } from '@angular/core';
import {OnPropertyChange} from './decorator/property-change.decorator';

@Component({
  selector: 'decorator-chacha',
  template: `
    <h1>Property Decorator Example</h1>
    <h2>Hello {{name}}!!!</h2>
    <div>Greetings: {{greetings}}</div>`,
  styles: [`h1 { font-family: Lato;}`]
})
export class DecoratorChangeComponent implements OnInit{

  constructor() {
    this.name = 'test';
  }
  public greetings: string = '';

  @Input()
  @OnPropertyChange('onNameChange')
  name: string;

  ngOnInit(): void {
    this.name = 'test';
  }

  onNameChange(newName: string) {
    this.greetings = newName + '!!!!!';
  }
}
