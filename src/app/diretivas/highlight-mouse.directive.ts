import { Directive, HostListener, HostBinding, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightMouse]'
})
export class HighlightMouseDirective implements OnInit {

  @Input('appHighlightMouse') defaultColor;

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
    this.backgroundColor = this.defaultColor;
  }

  constructor() { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

}
