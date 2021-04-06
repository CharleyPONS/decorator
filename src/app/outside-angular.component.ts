import {ChangeDetectionStrategy, Component, DoCheck, NgZone} from '@angular/core';
import {interval} from 'rxjs';
import {RunOutsideAngular} from './decorator/outside-the-zone.decorator';

@Component({
  selector: 'outside-chacha',
  template: `
    <h1>Outside section open your console</h1>
    `,
  styles: [`h1 { font-family: Lato;}`],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class OutsideAngularComponent implements DoCheck {
  source = interval(1000);
  color: boolean = false;

  constructor(private ngZone: NgZone) {
    this.healthCheck();
  }

  @RunOutsideAngular()
  healthCheck() {
    this.source.subscribe(() => {
      this.color = !this.color;
      console.log('Health check passed succesfully');
    });
  }
  ngDoCheck(): void {
    console.log(('Your are trigger by change detection'))
  }
}
