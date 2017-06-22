import { Injectable } from '@angular/core';

import { Hero } from '../model/hero';
import { BackendService } from '../services/backend.service';
import { Logger } from '../services/logger.service';

@Injectable()
export class HeroService {
    private heroes:Hero[] = [];

    constructor(private backend:BackendService,
                private logger:Logger) {
    }

    getHeroes() {
        this.backend.getAll(Hero).then((heroes:Hero[]) => {
            this.logger.log(`Fetched ${heroes.length} heroes.`);
            this.heroes.push(...heroes); // fill cache
        });
        return this.heroes;
    }
}
