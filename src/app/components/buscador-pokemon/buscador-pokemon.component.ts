import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PokemonesService } from '../../services/pokemones.service';

@Component({
  selector: 'app-buscador-pokemon',
  templateUrl: './buscador-pokemon.component.html',
  styleUrls: ['./buscador-pokemon.component.sass']
})

export class BuscadorPokemonComponent implements OnInit {

  pokemon: any[] = [];
  constructor(private parameters: ActivatedRoute, private pokemones: PokemonesService) {
    this.parameters.params.subscribe(params => {
      this.pokemon = this.pokemones.buscarPokemon(params['nombre']);
    });
  }

  ngOnInit() {
  }

}
