import { BrowserModule }       from '@angular/platform-browser';
import { FormsModule }         from '@angular/forms';
import { NgModule }     from '@angular/core';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './components/detail/hero-detail.component';
import { HeroListComponent }   from './components/list/hero-list.component';
import { SalesTaxComponent }   from './components/tax/sales-tax.component';
import { HeroService }         from './services/hero.service';
import { BackendService }      from './services/backend.service';
import { Logger }              from './services/logger.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        HeroDetailComponent,
        HeroListComponent,
        SalesTaxComponent
    ],
    providers: [
        BackendService,
        HeroService,
        Logger
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
