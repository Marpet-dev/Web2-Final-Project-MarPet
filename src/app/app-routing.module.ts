import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CatComponent } from './components/cat/cat.component';
import { DogComponent } from './components/dog/dog.component';
import { HomeComponent } from './components/home/home.component';
import { NewDetailComponent } from './components/new-detail/new-detail.component';
import { NewsComponent } from './components/news/news.component';
import { PetServicesComponent } from './components/pet-services/pet-services.component';
import { PolicyComponent } from './components/policy/policy.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AboutComponent } from './components/about/about.component';
import { ServiceAndSupportComponent } from './components/service-and-support/service-and-support.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'about', 
    component: AboutComponent
  },
  {
    path: 'cat', 
    component: CatComponent
  },
  {
    path: 'dog', 
    component: DogComponent
  },
  {
    path: 'home', 
    component: HomeComponent
  },
  {
    path: 'news', 
    component: NewsComponent
  },
  {
    path: 'news/:id', 
    component: NewDetailComponent
  },
  {
    path: 'pet-services', 
    component: PetServicesComponent
  },
  {
    path: 'policy', 
    component: PolicyComponent
  },
  {
    path: 'sign-in', 
    component: SignInComponent
  },
  {
    path: 'sign-up', 
    component: SignUpComponent
  },
  {
    path: 'service-and-support', 
    component: ServiceAndSupportComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [NewsComponent, NewDetailComponent]
