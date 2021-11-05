import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AuthGuard } from './guards/auth.guard';

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
    loadChildren:() => import('./components/auth/auth.module').then(m => m.AuthModule)
  },
   {
     path: 'administrators',
     loadChildren:() => import('./components/administrators/administrators.module').then(m => m.AdministratorsModule),
     canActivate: [AuthGuard]
   },
   {
    path: 'users',
    loadChildren:() => import('./components/users/users.module').then(m => m.UsersModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'roles',
    loadChildren:() => import('./components/roles/roles.module').then(m => m.RolesModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'language',
    loadChildren:() => import('./components/language/language.module').then(m => m.LanguageModule),
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
