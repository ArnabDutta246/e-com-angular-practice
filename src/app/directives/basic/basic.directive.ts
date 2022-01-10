import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasic]'
})
export class BasicDirective implements OnInit{
  @Input() colorChoice:string;

  constructor(private el: ElementRef) {
  
   }

   ngOnInit(): void {
    console.log('getting color',this.colorChoice);
    this.el.nativeElement.style.backgroundColor = this.colorChoice?this.colorChoice:'yellow';
   }
}
