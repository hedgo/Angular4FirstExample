import { Component, OnInit }   from '@angular/core';

import { Hero }                from '../../model/hero';
import { HeroService }         from '../../services/hero.service';

@Component({
    selector: 'hero-list',
    templateUrl: './hero-list.component.html',
    providers: [HeroService]
})
export class HeroListComponent implements OnInit {
    heroes:Hero[];
    selectedHero:Hero;

    constructor(private service:HeroService) {
    }

    ngOnInit() {
        this.heroes = this.service.getHeroes();
    }

    selectHero(hero:Hero) {
        this.selectedHero = hero;
    }
}
