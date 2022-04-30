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
import { FooterComponent } from './components/footer/footer.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { Discount50Component } from './components/discount50/discount50.component';
import { EmailresetComponent } from './components/emailreset/emailreset.component';
import { ServiceAndSupportComponent } from './components/service-and-support/service-and-support.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

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
  },
  {
    path: 'shopping-cart', 
    component: ShoppingCartComponent
  },
  {
    path: 'emailreset', 
    component: EmailresetComponent
  },
  {
    path: 'discount50', 
    component: Discount50Component
  },
  // Điền tiếp ở dưới dòng này nha
  






  { path: '**', pathMatch: 'full', 
        component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [NewsComponent, NewDetailComponent]
