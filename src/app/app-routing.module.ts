import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';

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
     loadChildren:() => import('./components/administrators/administrators.module').then(m => m.AdministratorsModule)
   },
   {
    path: 'users',
    loadChildren:() => import('./components/users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'roles',
    loadChildren:() => import('./components/roles/roles.module').then(m => m.RolesModule)
  },
  {
    path: 'language',
    loadChildren:() => import('./components/language/language.module').then(m => m.LanguageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
