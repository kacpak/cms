/// <reference types="jquery"/>

interface SummernoteOptions {
  placeholder?: string;
  fontNames?: string[];
  fontNamesIgnoreCheck?: string[];

  height?: number;
  minHeight?: number;
  maxHeight?: number;
  focus?: boolean;

  toolbar?: any[];
  popover?: any[];

  dialogsInBody?: boolean;
  dialogsFade?: boolean;

  disableDragAndDrop?: boolean;
  shortcuts?: boolean;

  callbacks?: {
    onInit?: () => void;
    onEnter?: () => void;
    onFocus?: () => void;
    onBlur?: () => void;
    onKeyup?: (e: KeyboardEvent) => void;
    onKeydown?: (e: KeyboardEvent) => void;
    onPaste?: (e: KeyboardEvent) => void;
    onImageUpload?: (files: string[]) => void;
    onChange?: (contents: string, $editable: any) => void;
  }
}

type SummernoteAction = 'destroy' | 'code' | 'insertText' | 'insertNode' | 'createRange' | 'saveRange'
  | 'restoreRange' | 'undo' | 'redo' | 'focus' | 'isEmpty' | 'reset' | 'disable' | 'enable';

interface JQuery {
  summernote(): JQuery;
  summernote(action: SummernoteAction, value?: any): any
  summernote(options: SummernoteOptions): JQuery;
}
