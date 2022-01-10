import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appStructural]'
})
export class StructuralDirective implements OnInit{
  private hasView = false;
  @Input('appStructural') condition;

  @Input('appStructuralThen') otherDiv:TemplateRef<any>|null = null;
  constructor(private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

    ngOnInit(): void {
      if (this.condition) {
        this.viewContainer.createEmbeddedView(this.templateRef);
        this.hasView = true;
      } else if (!this.condition) {
        this.viewContainer.clear();
        this.viewContainer.createEmbeddedView(this.otherDiv);
        this.hasView = false;
      }
    }

   
}
