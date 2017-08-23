import {Component, EventEmitter, Input, Output} from "@angular/core";
import {NG_VALUE_ACCESSOR} from "@angular/forms";
import {ValueAccessorBase} from "../value-acessor-base";

@Component({
  selector: 'cpf',
  template: `
    <input type="text" class="form-control" maxlength="14"
           placeholder="{{placeholder}}"
           [ngModel]="value" cpfMask
           (ngModelChange)="notifyChange($event)"
           (blur)="blurEvt($event)">`,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: CpfComponent,
    multi: true
  }],
})
export class CpfComponent extends ValueAccessorBase<string> {

  @Input() placeholder: string;
  @Output() blur: EventEmitter<any> = new EventEmitter();

  notifyChange(value: any) {
    value = value ? value.replace(/[^\d]/g, '') : value;
    this.onChange(value);
  }

  public blurEvt(event): void {
    this.blur.emit(event);
  }

}
