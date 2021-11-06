import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    TableModule,
    UsersRoutingModule
  ],
  exports: [
    UsersComponent
  ]
})
export class UsersModule { }
