import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './core/components/about/about.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    loadChildren:() => import('./core/components/auth/auth.module').then(m => m.AuthModule)
  },
   {
     path: 'administrators',
     loadChildren:() => import('./core/components/administrators/administrators.module').then(m => m.AdministratorsModule),
     canActivate: [AuthGuard]
   },
   {
    path: 'users',
    loadChildren:() => import('./core/components/users/users.module').then(m => m.UsersModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'roles',
    loadChildren:() => import('./core/components/roles/roles.module').then(m => m.RolesModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'language',
    loadChildren:() => import('./core/components/language/language.module').then(m => m.LanguageModule),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
