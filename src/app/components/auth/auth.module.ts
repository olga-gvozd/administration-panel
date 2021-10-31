import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { PrimengModule } from 'src/app/shared/libs/primeng/primeng.module';


@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    PrimengModule
  ],
  exports: [
    AuthComponent
  ]
})
export class AuthModule { }
