import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from "@angular/router";

import {ApiModule} from '../api';
import {PortalHeaderComponent, TextEditorComponent, EditableComponent} from './'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ApiModule.forRoot(),
  ],
  declarations: [
    PortalHeaderComponent,
    TextEditorComponent,
    EditableComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    PortalHeaderComponent,
    TextEditorComponent,
    EditableComponent
  ]
})
export class SharedModule {}
