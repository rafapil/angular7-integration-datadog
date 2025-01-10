import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
// import { join } from 'path';
import { forkJoin, Subscription } from 'rxjs';
import { PokeApiService } from 'src/app/services/poke-api.service';
import { datadogLogs } from '@datadog/browser-logs'

@Component({
  selector: 'app-poke-money',
  templateUrl: './poke-money.component.html',
  styleUrls: ['./poke-money.component.scss']
})
export class PokeMoneyComponent implements OnInit {

  public bitValue;
  private intervalId: any;
  private subscription: Subscription | undefined;

  constructor(
    private pokeApiService: PokeApiService
  ) { }

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.getBitcoinValue();
    }, 60000);
    this.getBitcoinValue();
  }

  getBitcoinValue(){
    const bit: any = this.pokeApiService.apiResultBitcoin();
    let initValue;

    return bit.subscribe(res => {
      datadogLogs.logger.info('Acesso da grana', { action: 'invalid path', user: 'user xpto', response: res })
      this.bitValue = res.ticker.last;
      // const val = parseFloat(res.ticker.last.toFixed(2)).toString();
      // this.bitValue = val;
      // this.bitValue = val.toLocaleString('pt-BR', {
      //   minimumFractionDigits: 2,
      //   maximumFractionDigits: 2
      // });
    });

  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
