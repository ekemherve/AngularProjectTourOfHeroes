import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

// a provider  is something that can create or deliver a service and make the heroService available to the dependcy system injection.
// In our case, it instantiates the HeroService class to provide the service
// thus making getHeroes() available everyWhere in the app folder.
// thanks to @injectable, the heroService will be removed if its not used anywhere
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
