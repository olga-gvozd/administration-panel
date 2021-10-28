import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministratorsRoutingModule } from './administrators-routing.module';
import { AdministratorsComponent } from './administrators.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    AdministratorsComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    TableModule,
    AdministratorsRoutingModule
  ],
  exports: [
    AdministratorsComponent
  ]
})
export class AdministratorsModule { }
