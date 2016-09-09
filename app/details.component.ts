import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'details',
    templateUrl: 'app/details.component.html',
    styleUrls: ['app/details.component.css']
})
export class DetailsComponent implements OnInit {

    hero: Hero;

    constructor(private heroService: HeroService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let id = + params['id'];
            this.heroService.getHero(id).then(hero => this.hero = hero);
        });
    }

    goBack(): void {
        window.history.back();
    }
    
}