import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LandingComponent } from './components/landing/landing.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [

  { 
    path: '',
    redirectTo: '/landing', 
    pathMatch: 'full'
  },

  { 
    path: 'landing', 
    component: LandingComponent,
    pathMatch: 'full',
  },

  { 
    path: 'home', 
    component: HomeComponent ,
    pathMatch: 'full',
  },

  { path: 'singin', 
    component: SigninComponent ,
    pathMatch: 'full', 
  },

  { path: 'singup', 
    component: SignupComponent ,
    pathMatch: 'full',
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
