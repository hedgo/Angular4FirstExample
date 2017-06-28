import { Component, Input } from '@angular/core';

import { Hero } from '../../model/hero';

import { HeroService }         from '../../services/hero.service';

@Component({
    selector: 'hero-detail',
    templateUrl: './hero-detail.component.html',
    providers: [HeroService]
})
export class HeroDetailComponent {
    @Input() hero:Hero;

    constructor(private heroService:HeroService) {
    }

    getHero():void {
        foundHero: Hero;
        console.log("getHero");
        this.heroService.getHero(this.hero.id).then(hero => this.foundHero = hero);
        console.log("getHero foundHero=" + JSON.stringify(this.foundHero));
    }

    getHeroNoCall():void {
        console.log("getHeroNoCall");
        console.log("getHeroNoCall foundHero=" + JSON.stringify(this.foundHero));
    }

    addHero():void {
        console.log("addHero");
        this.heroService.addHero(this.hero);
    }

    updateHero():void {
        console.log("updateHero");
        this.heroService.updateHero(this.hero);
    }

    deleteHero():void {
        console.log("deleteHero");
        this.heroService.deleteHero(this.hero.id);
    }
}
