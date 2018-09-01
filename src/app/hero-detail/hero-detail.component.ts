import { Component, OnInit, Input } from '@angular/core';
import { Hero} from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  /*
    @input() signifie que  :
    - la valeur de cette property viendra d'un autre component
    - spécialement un input du composant contenant l'input
    - Dès son appel elle sera instanciée et recevra le contenu de l'input
  */
  @Input() hero: Hero;

  constructor() { }

  ngOnInit() {
  }

}
