import {
  Component,
  OnDestroy,
  AfterViewInit,
  EventEmitter,
  Input,
  Output, ElementRef, Attribute
} from '@angular/core';

@Component({
  selector: 'text-editor',
  template: '{{ content }}'
})
export class TextEditorComponent implements AfterViewInit, OnDestroy {

  @Input() content: string;
  @Output() contentChange = new EventEmitter();

  private $editor: JQuery;

  constructor(private elementRef: ElementRef,
              @Attribute('placeholder') private placeholder: string,
              @Attribute('height') private height: number,
              @Attribute('minHeight') private minHeight: number,
              @Attribute('maxHeight') private maxHeight: number) {}

  ngAfterViewInit() {
    let config: SummernoteOptions = {
      placeholder: this.placeholder,
      height: this.height || this.minHeight || 300,
      minHeight: this.minHeight || 300,
      maxHeight: this.maxHeight,
      callbacks: {
        onChange: (contents, $editable) => {
          this.content = contents;
          this.contentChange.next(contents);
        }
      }
    };

    this.$editor = jQuery(this.elementRef.nativeElement);
    this.$editor.summernote(config);
  }

  ngOnDestroy() {
    this.$editor.summernote('destroy');
  }
}
