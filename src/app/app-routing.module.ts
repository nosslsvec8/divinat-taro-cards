import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {AboutCardComponent} from './about-card/about-card.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '',   redirectTo: 'home', pathMatch: 'full'},
  {path: 'header', component: HeaderComponent},
  {path: 'card/:id', component: AboutCardComponent},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
