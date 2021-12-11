import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelComponent } from './hotel/hotel.component';
import { ErrorComponent } from './error/error.component';
import { MenuComponent } from './menu/menu.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { ListHotelComponent } from './list-hotel/list-hotel.component';
import { PictureComponent } from './picture/picture.component';
import { ImageComponent } from './image/image.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BTTComponent } from './btt/btt.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { ModifierComponent } from './modifier/modifier.component';
import { SupprimerComponent } from './supprimer/supprimer.component';
import { ConsulterComponent } from './consulter/consulter.component';
import { PersoPipePipe } from './perso-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HotelComponent,
    ErrorComponent,
    MenuComponent,
    AccueilComponent,
    ContactComponent,
    LoginComponent,
    ListHotelComponent,
    PictureComponent,
    ImageComponent,
    BTTComponent,
    AjouterComponent,
    ModifierComponent,
    SupprimerComponent,
    ConsulterComponent,
    PersoPipePipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
