import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    TableModule,
    InputTextModule,
    MenuModule,
    PasswordModule,
    ButtonModule,
    InputTextModule
  ]
})
export class PrimengModule { }
