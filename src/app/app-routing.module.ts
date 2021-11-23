import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { HotelComponent } from './hotel/hotel.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:"accueil",component:AccueilComponent},
  {path:"hotel",component:HotelComponent},
  {path:"contact",component:ContactComponent},
  {path:"login", component:LoginComponent},
  {path:"", redirectTo:"accueil", pathMatch:"full"},
  {path:"**", component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
