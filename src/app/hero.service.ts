import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

// a provider  is something that can create or deliver a service and make the heroService available to the dependcy system injection.
// In our case, it instantiates the HeroService class to provide the service
// thus making getHeroes() available everyWhere in the app folder.
// thanks to @injectable, the heroService will be removed if its not used anywhere
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Hero[] {
    return HEROES;
  }
}
