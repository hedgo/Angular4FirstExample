import { BrowserModule }       from '@angular/platform-browser';
import { FormsModule }         from '@angular/forms';
import { NgModule }     from '@angular/core';
import { AppComponent } from './components/main/app.component';
import { HeroDetailComponent } from './components/detail/hero-detail.component';
import { HeroListComponent }   from './components/list/hero-list.component';
import { SalesTaxComponent }   from './components/tax/sales-tax.component';
import { HeroFormComponent } from './components/form/hero-form.component';
import { SimpleFormComp } from './components/test1/test1.component';
import { HeroService }         from './services/hero.service';
import { BackendService }      from './services/backend.service';
import { Logger }              from './services/logger.service';

//4 REST
import { HttpModule } from '@angular/http';

//4 MOCKS in REST
//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService }  from './in-memory-data.service';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule//,
        //      InMemoryWebApiModule.forRoot(InMemoryDataService)
    ],
    declarations: [
        AppComponent,
        HeroDetailComponent,
        HeroListComponent,
        SalesTaxComponent,
        HeroFormComponent,
        SimpleFormComp
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
