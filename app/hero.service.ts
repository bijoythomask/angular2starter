import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HERORS } from './mock-heroes';

@Injectable()
export class HeroService {

    constructor() { }

     getHeroes() : Promise<Hero[]> {
         return Promise.resolve(HERORS);
     }

     getHero(id: number): Promise<Hero> {
         return this.getHeroes()
             .then(heroes => heroes.find(hero => hero.id === id));
     }

}