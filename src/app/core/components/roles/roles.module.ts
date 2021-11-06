import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesRoutingModule } from './roles-routing.module';
import { RolesComponent } from './roles.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    RolesComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    TableModule,
    RolesRoutingModule
  ],
  exports: [
    RolesComponent
  ]
})
export class RolesModule { }
