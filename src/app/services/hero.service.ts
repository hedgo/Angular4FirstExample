import { Injectable } from '@angular/core';

import { Hero } from '../model/hero';
import { BackendService } from '../services/backend.service';
import { Logger } from '../services/logger.service';

//REST!!
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class HeroService {
    private heroes:Hero[] = [];
    private headers = new Headers({'Content-Type': 'application/json'});
    private heroesUrl = 'http://127.0.0.1:8080/heroes';

    constructor(private backend:BackendService,
                private logger:Logger,
                private http:Http) {
    }

    getHeroes():Promise<Hero[]> {
        console.log("getHeroes");
        return this.http.get(this.heroesUrl).toPromise()
            .then(response => response.json() as Hero[])
            .catch(this.handleError);
    }

    getHero(id:number):Promise<Hero> {
        const url = `${this.heroesUrl}/${id}`;
        console.log("getHero url=" + url);
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as Hero)
            .catch(this.handleError);
    }

    addHero(hero:Hero):void {
        console.log("addHero by hero=" + JSON.stringify(hero));
        const url = `${this.heroesUrl}`;
        return this.http
            .post(url, JSON.stringify(hero), {headers: this.headers})
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    updateHero(hero:Hero):Promise<Hero> {
        console.log("update by hero=" + JSON.stringify(hero));
        //const url = `${this.heroesUrl}/${hero.id}`;
        const url = `${this.heroesUrl}`;
        return this.http
            .put(url, JSON.stringify(hero), {headers: this.headers})
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    deleteHero(id:number):Promise<void> {
        const url = `${this.heroesUrl}/${id}`;
        console.log("deleteHero URL=" + url);
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    private handleError(error:any):Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
