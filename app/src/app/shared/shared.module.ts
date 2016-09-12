import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {ApiModule} from '../api';
import {PortalHeaderComponent} from  './portal-header/portal-header.component'
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        ApiModule.forRoot(),
    ],
    declarations: [
        PortalHeaderComponent
    ],
    exports: [
        CommonModule,
        FormsModule,
        PortalHeaderComponent
    ]
})
export class SharedModule { }
