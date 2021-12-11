import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { BTTComponent } from './btt/btt.component';
import { ConsulterComponent } from './consulter/consulter.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { HotelComponent } from './hotel/hotel.component';
import { LoginComponent } from './login/login.component';
import { ModifierComponent } from './modifier/modifier.component';
import { SupprimerComponent } from './supprimer/supprimer.component';

const routes: Routes = [
  {path:"accueil",component:AccueilComponent},
  {path:"hotel",component:HotelComponent},
  {path:"contact",component:ContactComponent},
  {path:"ajouter",component:AjouterComponent},
  {path:"modifier",component:ModifierComponent},
  {path:"supprimer",component:SupprimerComponent},
  {path:"consulter",component:ConsulterComponent},
  {path:"BTT",component:BTTComponent},
  {path:"login", component:LoginComponent},
  {path:"", redirectTo:"accueil", pathMatch:"full"},
  {path:"**", component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
