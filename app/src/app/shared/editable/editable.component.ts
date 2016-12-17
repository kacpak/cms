import {
  Component,
  OnDestroy,
  AfterViewInit,
  EventEmitter,
  Input,
  Output, ElementRef, Attribute, OnChanges, SimpleChanges
} from '@angular/core';

@Component({
  selector: 'editable',
  template: `
<div class="text" *ngIf="!isEditable" (click)="isEditable=true">
    {{ content }}    
</div>
<div class="editable" *ngIf="isEditable">
    <input type="text" (ngModelChange)="onTextChange($event)" [ngModel]="content" class="form-control">
</div>
`
})
export class EditableComponent implements AfterViewInit {

  @Input() content: string;
  @Output() contentChange = new EventEmitter();
  isEditable: boolean;

  private $editor: JQuery;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    this.$editor = jQuery(this.elementRef.nativeElement).find('div');
  }

  onTextChange(text: string) {
    this.contentChange.emit(text);
  }

}
