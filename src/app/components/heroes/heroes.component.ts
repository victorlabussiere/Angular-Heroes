import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/interface/hero';
import { HeroService } from '../../services/hero.service'

@Component({
  selector: 'app-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }
  heroes!: Hero[]
  selectedHero?: Hero;

  constructor(private heroService: HeroService) { }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes() {
    this.heroService.getAll()
      .subscribe(heroes => this.heroes = heroes)
  }

  ngOnInit(): void {
    this.getHeroes()
  }

}
