import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {ApiModule} from '../api';
import {PortalHeaderComponent} from  './portal-header/portal-header.component'
import {RouterModule} from "@angular/router";
import {TextEditorComponent} from "./text-editor/text-editor.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ApiModule.forRoot(),
  ],
  declarations: [
    PortalHeaderComponent,
    TextEditorComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    PortalHeaderComponent,
    TextEditorComponent
  ]
})
export class SharedModule {}
