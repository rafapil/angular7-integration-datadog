import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// componentes
import { PokeHeaderComponent } from './poke-header/poke-header.component';
import { PokeSearchComponent } from './poke-search/poke-search.component';
import { PokeListComponent } from './poke-list/poke-list.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { PokeMoneyComponent } from './poke-money/poke-money.component';



@NgModule({
  declarations: [
    PokeHeaderComponent,
    PokeSearchComponent,
    PokeListComponent,
    ErrorPageComponent,
    PokeMoneyComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    PokeHeaderComponent,
    PokeSearchComponent,
    PokeListComponent,
    PokeMoneyComponent
  ]
})
export class SharedModule { }
