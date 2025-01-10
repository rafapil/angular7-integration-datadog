import { PokeApiService } from './../../services/poke-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss'],
})
export class PokeListComponent implements OnInit {

  // criado metodo private para receber o retorno da api
  // quando usado o filter ele repassa para o get e assim a lista é recarregada quando apagamos o filtro
  private setAllPokemons: any;
  public getAllPokemons: any;

  // para tratar algum erro na listagem
  public apiError: boolean = false;

  constructor(private pokeApiService: PokeApiService) {}

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons.subscribe((res) => {
      this.setAllPokemons = res.results;
      this.getAllPokemons = this.setAllPokemons;

      // console.log(this.getAllPokemons);
    },
      error => {
        this.apiError = true;
      }
    );
  }

  public getSearch(value: string) {
    // console.log(value);
    // aqui foi alterado para o so do setAllPokemons para que ele forneca os valores para o get
    const filter = this.setAllPokemons.filter((res: any) => {
      return !res.name.indexOf(value.toLowerCase());
    });

    this.getAllPokemons = filter;
  }
}
