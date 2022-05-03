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
import { FavoriteComponent } from './components/favorite/favorite.component';
import {A11yModule} from '@angular/cdk/a11y';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import {OverlayModule} from '@angular/cdk/overlay';
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
    path: 'favorite', 
    component: FavoriteComponent
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
  exports: [RouterModule,A11yModule,
    CdkAccordionModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    OverlayModule,
    PortalModule,
    ScrollingModule,]
})
export class AppRoutingModule { }
export const RoutingComponents = [NewsComponent, NewDetailComponent]
