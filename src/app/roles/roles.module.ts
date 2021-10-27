import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesRoutingModule } from './roles-routing.module';
import { RolesComponent } from './roles.component';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    RolesComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    RolesRoutingModule
  ],
  exports: [
    RolesComponent
  ]
})
export class RolesModule { }
