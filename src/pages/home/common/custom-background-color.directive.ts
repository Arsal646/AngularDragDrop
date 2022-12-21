import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appCustomBackgroundColor]'
})
export class CustomBackgroundColorDirective {
  @Input() defaultColor : string;
  @HostBinding('style.backgroundColor') backgroundColor: string;
  constructor() { }
  ngOnInit(){
    this.backgroundColor = this.defaultColor;
    //this.renderer.setStyle(this.elementRef.nativeElement,'background-color','pink');
  }
}
