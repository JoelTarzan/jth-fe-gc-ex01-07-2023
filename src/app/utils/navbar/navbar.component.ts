import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentPage: string = '';
  name: string = '';

  constructor(
    private router: Router,
    private pokemonService: PokemonService,
    private authService: AuthService
    ) {
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentPage = event.url;
      }
    });
  }

  searchByName(): void {
    this.pokemonService.getByName(this.name.toLowerCase()).subscribe(result => {
      this.router.navigateByUrl('details/' + result.id);
    });
  }

  logout() {
    this.authService.logout()
    .then(response => {
      this.router.navigate(['/login']);
    })
    .catch(error => console.log(error));
  }
}
