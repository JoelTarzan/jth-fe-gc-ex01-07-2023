import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PokemonListComponent } from './components/pokemon/pokemon-list/pokemon-list.component';
import { PokemonCardComponent } from './components/pokemon/pokemon-card/pokemon-card.component';
import { PokemonDetailsComponent } from './components/pokemon/pokemon-details/pokemon-details.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { NavbarComponent } from './utils/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PokemonListComponent,
    PokemonCardComponent,
    PokemonDetailsComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
