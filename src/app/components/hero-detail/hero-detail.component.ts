import { Component, Input } from '@angular/core';

import { Hero } from 'src/app/interface/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: 'hero-detail.component.html'
})
export class HeroDetailComponent {
  @Input() hero?: Hero
}
