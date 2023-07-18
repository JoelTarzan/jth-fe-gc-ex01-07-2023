import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {
  id: number = 1;
  pokemon: Pokemon = new Pokemon();

  constructor(
    private activatedRoute: ActivatedRoute, 
    private pokemonService: PokemonService
    ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    });

    this.pokemonService.getById(this.id).subscribe(result => {
      this.pokemon = result;
    })
  }
}