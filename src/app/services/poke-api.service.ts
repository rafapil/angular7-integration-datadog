import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Observable -> notas na doc do rxjs
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { datadogLogs } from '@datadog/browser-logs';

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  private url: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100';
  private urlBitcoin: string = 'https://www.mercadobitcoin.net/api/BTC/ticker/';

  constructor(private http: HttpClient) {}

  get apiListAllPokemons(): Observable<any> {
    return this.http.get<any>(this.url).pipe(
      tap((res) => res),
      tap((res) => {
        // console.log(res)
        res.results.map((resPokemons: any) => {
          this.apiGetPokemons(resPokemons.url).subscribe(
            res => resPokemons.status = res
          );
        });
      })
    );
  }

  public apiResultBitcoin() {
    datadogLogs.logger.error('Acesso da grana', { action: 'invalid path', user: 'user xpto', usuario: 'user xpto 2222' })
    return this.http.get<any>(this.urlBitcoin);
  }


  public apiGetPokemons(url: string): Observable<any> {
    return this.http
      .get<any>(url)
      .pipe(map( res => res )
  )}
}
