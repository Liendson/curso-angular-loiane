import { Directive, HostListener, HostBinding, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appHighlightMouse]'
})
export class HighlightMouseDirective {

  private backgroundColor: string;

  // @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  }

  @HostListener('mouseenter') onMouseOver() {
    // this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
    // this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'white');
    this.backgroundColor = 'white';
  }


  constructor(private elementRef: ElementRef, private renderer: Renderer) { }

}
