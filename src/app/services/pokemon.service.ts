import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  endpoint: string = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(
    private http: HttpClient
    ) {
  }

  // Devuelve 8 pokémon random
  getRandom(): Pokemon[] {
    let randomIds: number[] = this.getRandomIds();
    let pokemonList: Pokemon[] = [];

    for (let i = 0; i < 8; i++) {
      this.getById(randomIds[i]).subscribe(result => pokemonList.push(result));
    }

    return pokemonList;
  }

  // Devuelve un pokémon buscandolo por Id
  getById(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(this.endpoint + id);
  }

  // Devuelve un pokémon buscandolo por Name
  getByName(name: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(this.endpoint + name);
  }

  // Genera 8 numeros aleatorios del 1 al 1010, nº de pokémon en la API
  private getRandomIds(): number[] {
    const randomIds: number[] = [];

    while (randomIds.length != 8) {
      const randomId = Math.floor(Math.random() * 1010) + 1;

        if (!randomIds.includes(randomId)) {
          randomIds.push(randomId);
        }
    }

    return randomIds;
  }
}
