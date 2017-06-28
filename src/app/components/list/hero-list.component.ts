import { Component, OnInit }   from '@angular/core';

import { Hero }                from '../../model/hero';
import { HeroService }         from '../../services/hero.service';

@Component({
    selector: 'hero-list',
    templateUrl: './hero-list.component.html',
    providers: [HeroService]
})
export class HeroListComponent implements OnInit {
    heroes:Hero[] = [];
    selectedHero:Hero;

    constructor(private service:HeroService) {
    }

    ngOnInit() {
        this.service.getHeroes().then(heroes => this.heroes = heroes);
        console.log("ngOnInit->getHeroes=" + JSON.stringify(this.heroes));
    }

    selectHero(hero:Hero) {
        this.selectedHero = hero;
        console.log("selectedHero=" + JSON.stringify(this.selectedHero));
    }

    getHeroes() {
        this.service.getHeroes().then(heroes => this.heroes = heroes);
    }
}
