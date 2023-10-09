import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleClass() {
    this.isOpen = !this.isOpen;
  }

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
}
