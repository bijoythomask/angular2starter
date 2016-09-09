import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl : 'app/heroes.component.html',
  styleUrls: [`app/heroes.component.css`]
})

export class HeroesComponent implements OnInit {

  heroes : Hero[];

  selectedHero : Hero;

  getHeroes() : void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  constructor(private router: Router, private heroService : HeroService){
  }

  ngOnInit() :void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/details', this.selectedHero.id]);
  }

   
}
