import {Directive, ElementRef} from "@angular/core";

let vanillaMasker = require('vanilla-masker');

@Directive({
  selector: '[cpfMask]'
})
export class CpfMaskDirective {
  public nativeElement: HTMLInputElement;

  constructor(public element: ElementRef) {
    this.nativeElement = this.element.nativeElement;
    vanillaMasker(this.nativeElement).maskPattern('999.999.999-99');
  }
}
