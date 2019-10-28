import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components
import { NavbarComponent } from './components/navbar/container/navbar.component';
import { ItemComponent } from './components/item/container/item.component';
import { ItemDetailComponent } from './components/item-detail/container/item-detail.component';

// Services
import { SearchService } from './services/search.service';
import { CacheService } from './services/cache.service';
import { GetItemService } from './services/get-item.service';
// Pipes
import { CurrencyPipe } from './pipes/pipes';
import { AmountPipe } from './pipes/pipes';
import { DecimalsPipe } from './pipes/pipes';
import { ConditionPipe } from './pipes/pipes';

@NgModule({
  declarations: [
    NavbarComponent,
    ItemComponent,
    ItemDetailComponent,
    CurrencyPipe,
    AmountPipe,
    DecimalsPipe,
    ConditionPipe
  ],
  exports: [
    NavbarComponent,
    ItemComponent,
    ItemDetailComponent,
    CurrencyPipe,
    AmountPipe,
    DecimalsPipe,
    ConditionPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    SearchService,
    CacheService,
    GetItemService
  ],
})
export class SharedModule { }
