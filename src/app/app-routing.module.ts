import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutComponent
  },
   {
     path: 'administrators',
     loadChildren:() => import('./administrators/administrators.module').then(m => m.AdministratorsModule)
   },
   {
    path: 'users',
    loadChildren:() => import('./users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'roles',
    loadChildren:() => import('./roles/roles.module').then(m => m.RolesModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
