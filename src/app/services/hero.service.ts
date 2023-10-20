import { Injectable } from '@angular/core';
import { HEROES } from '../mock/heros';
import { Hero } from '../interface/hero';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  public getAll(): Observable<Hero[]> {
    const heroes = of(HEROES)
    return heroes
  }
}
