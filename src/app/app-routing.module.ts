import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewDetailComponent } from './components/new-detail/new-detail.component';
import { NewsComponent } from './components/news/news.component';

const routes: Routes = [
  {path: 'news', component: NewsComponent},
  {path: 'news/:id',component: NewDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [NewsComponent, NewDetailComponent]
