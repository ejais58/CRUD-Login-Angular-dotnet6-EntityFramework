import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@modules/home/home.component';
import { RegisterComponent } from '@modules/register/register.component';
import { LoginComponent } from './modules/login/login.component';

const routes: Routes = [
  {
    path:'',
    component: LoginComponent,
    loadChildren:() => import(`@modules/login/login.module`).then(m => m.LoginModule)
  },
  {
    path: 'register',
    component: RegisterComponent,
    loadChildren:() => import(`@modules/register/register.module`).then(m => m.RegisterModule)
  },
  {
    path: 'home',
    component: HomeComponent,
    loadChildren:() => import(`@modules/home/home.module`).then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
