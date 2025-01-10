
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { datadogLogs } from '@datadog/browser-logs'

// services
import { PokeApiService } from './../../services/poke-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {

  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon';
  private urlName: string = 'https://pokeapi.co/api/v2/pokemon-specie';

  public pokemon: any;
  public isLoading: boolean = false;
  public apiError: boolean = false;

  constructor(private activatedRoute: ActivatedRoute,
              private pokeApiService: PokeApiService
    ) {}

  ngOnInit(): void {
    this.getpokemon;
  }

  get getpokemon() {
    const id = this.activatedRoute.snapshot.params['id'];

    const pokemon = this.pokeApiService.apiGetPokemons(`${this.urlPokemon}/${id}`);
    const name = this.pokeApiService.apiGetPokemons(`${this.urlName}/${id}`);

    return forkJoin([pokemon, name]).subscribe(
      res => {
        datadogLogs.logger.info('Sucesso ao carregar os dados', { action: 'buscar', id: id, name: name })
        this.pokemon = res;
        this.isLoading = true;
      }, error => {
        datadogLogs.logger.warn('Erro ao carregar os dados', { action: 'buscar', id: id, name: name })
        this.apiError = true
      }
    )

  };
}
