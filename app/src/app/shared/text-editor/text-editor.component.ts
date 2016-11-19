import {
  Component,
  OnDestroy,
  AfterViewInit,
  EventEmitter,
  Input,
  Output, ElementRef, Attribute, OnChanges, SimpleChanges
} from '@angular/core';

@Component({
  selector: 'text-editor',
  template: '<div>{{ initialContent }}</div>'
})
export class TextEditorComponent implements AfterViewInit, OnDestroy, OnChanges {

  @Input() content: string;
  @Output() contentChange = new EventEmitter();

  private $editor: JQuery;
  private isInitializedWithContent: boolean = true;

  constructor(private elementRef: ElementRef,
              @Attribute('hasDelayedContent') hasDelayedContent: boolean,
              @Attribute('initialContent') private initialContent: string,
              @Attribute('placeholder') private placeholder: string,
              @Attribute('height') private height: number,
              @Attribute('minHeight') private minHeight: number,
              @Attribute('maxHeight') private maxHeight: number) {
    if (hasDelayedContent) {
      this.isInitializedWithContent = false;
    }
  }

  ngAfterViewInit() {
    let config: SummernoteOptions = {
      placeholder: this.placeholder,
      height: this.height || this.minHeight || 400,
      minHeight: this.minHeight || 400,
      maxHeight: this.maxHeight,
      callbacks: {
        onChange: (contents, $editable) => {
          this.content = contents;
          this.contentChange.next(contents);
        }
      }
    };

    this.$editor = jQuery(this.elementRef.nativeElement).find('div');
    this.$editor.summernote(config);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.$editor && !this.isInitializedWithContent && changes['content'] && changes['content'].currentValue) {
      jQuery(this.elementRef.nativeElement).find('.note-editable').html(changes['content'].currentValue);
      this.isInitializedWithContent = true;
    }
  }

  ngOnDestroy() {
    this.$editor.summernote('destroy');
  }
}
