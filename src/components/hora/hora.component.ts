import {Component, EventEmitter, forwardRef, Input, Output} from "@angular/core";
import {NG_VALUE_ACCESSOR} from "@angular/forms";
import {ValueAccessorBase} from "../value-acessor-base";

let vanillaMasker = require('vanilla-masker');

@Component({
  selector: 'hora',
  template: `
    <input
      class="form-control text-right" horaMask
      type="text"
      maxlength="5"
      [placeholder]="placeholder"
      [(ngModel)]="value"
      (blur)="blurEvt($event)">`,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => HoraComponent),
    multi: true
  }]
})
export class HoraComponent extends ValueAccessorBase<string> {

  @Input() placeholder: string = 'HH:MM';
  @Output() blur: EventEmitter<any> = new EventEmitter();

  public blurEvt(event): void {
    let value = event.target.value;
    if (value) {
      value = value.replace(/[^\d]/g, '').padEnd(4, '0');
      this.value = vanillaMasker.toPattern(value, '99:99');
    }
  }

}
