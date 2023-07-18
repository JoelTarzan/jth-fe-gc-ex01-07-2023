import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PokemonListComponent } from './components/pokemon/pokemon-list/pokemon-list.component';
import { AboutComponent } from './components/about/about.component';
import { PokemonDetailsComponent } from './components/pokemon/pokemon-details/pokemon-details.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: HomeComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  {
    path: 'pokemon',
    component: PokemonListComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  {
    path: 'details/:id',
    component: PokemonDetailsComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  {
    path: 'about',
    component: AboutComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ''
  },
  {
    path: '**',
    component: HomeComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login']))
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
