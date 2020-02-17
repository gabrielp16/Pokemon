import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})

export class PokemonesService {

  apiUrl: string = 'https://pokeapi.co/api/v2/';

  pokemones: any[] = [];

  constructor(private http: HttpClient, private _alert: AlertService) { }

  // obtenerPokemones() {
  //   //return this.http.get(`${this.apiUrl}pokemon/ditto/`);
  //   return this.http.get(`${this.apiUrl}pokemon/`).pipe(
  //     map(data => {
  //       return this.http.get(`${this.apiUrl}pokemon/ditto/`);
  //     }),
  //     catchError(err => {
  //       this._alert.showError(err);
  //       return [];
  //     })
  //   );
  // }

  obtenerPokemones() {
    return this.http.get(`${this.apiUrl}pokemon/?offset=0&limit=50`);
  }

  obtenerPokemon(url: string) {
    return this.http.get(url);
  }

  // obtenerPokemon(id: number) {
  //   let pokeArr = [];

  //   for (let pokemon of this.pokemones) {
  //     if (pokemon.id === id) {
  //       pokeArr.push(pokemon);
  //     }
  //   }

  //   return pokeArr;
  // }

  buscarPokemon(termino: string) {
    let pokeArr = [];
    termino = termino.toLowerCase();
    for (let pokemon of this.pokemones) {
      let nombre = pokemon.nombre.toLowerCase();
      if (nombre.indexOf(termino) >= 0) {
        pokeArr.push(pokemon);
      }
    }

    return pokeArr;
  }
}
