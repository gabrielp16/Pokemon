import { Component, Input, OnInit } from '@angular/core';
import { PokemonesService } from '../../services/pokemones.service';

@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.component.html',
  styleUrls: ['./pokemones.component.sass']
})
export class PokemonesComponent implements OnInit {

  // @Input() pokemones: { // informacion util de cada Pokemon del response
  //   height: number,
  //   id: number,
  //   moves: {
  //     move: {
  //       name: string,
  //     }
  //   },
  //   name: string,
  //   sprites: object,
  //   types: {
  //     type: {
  //       name: string,
  //     }
  //   },
  //   weight: string
  // };
  results: any[];
  pokemones: any[];

  constructor(private _pokemones: PokemonesService) {

  }

  ngOnInit() {
    this._pokemones.obtenerPokemones()
      .subscribe(
        data => {
          this.results = data['results'];
          for (const pokemon of this.results) {
            this._pokemones.obtenerPokemon(pokemon['url']).subscribe(
              datas => datas);
          }
        });
  }
}
