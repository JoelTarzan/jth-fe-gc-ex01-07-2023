import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit{

  pokemonList: any;

  constructor(
    private pokemonService: PokemonService
    ) {
  }

  ngOnInit(): void {
    this.pokemonList = this.pokemonService.getRandom();
    console.log(this.pokemonList);
  }

}