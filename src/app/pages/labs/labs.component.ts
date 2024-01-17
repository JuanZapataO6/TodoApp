import { Component } from '@angular/core';
import { pokemon } from './pokemon.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
cardOne = {
  source  : "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/524.png"
}
users = ["alphas", "betas", "phi" ]
  pokemons: pokemon[] = [
    {
      name: 'Roggenrola',
      id: 524,
      imgSource: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/521.png',
      type: 'Dragon'
    },
    {
      name: 'Roggenrola',
      id: 524,
      imgSource: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/522.png',
      type: 'Dragon'
    },
    {
      name: 'Roggenrola',
      id: 524,
      imgSource: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/523.png',
      type: 'Dragon'
    },
    {
      name: 'Roggenrola',
      id: 524,
      imgSource: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/524.png',
      type: 'Dragon'
    },
    {
      name: 'Roggenrola',
      id: 524,
      imgSource: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/525.png',
      type: 'Dragon'
    },
    {
      name: 'Roggenrola',
      id: 524,
      imgSource: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/526.png',
      type: 'Dragon'
    },
    {
      name: 'Roggenrola',
      id: 524,
      imgSource: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/527.png',
      type: 'Dragon'
    },
    {
      name: 'Roggenrola',
      id: 524,
      imgSource: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/528.png',
      type: 'Dragon'
    },
    {
      name: 'Roggenrola',
      id: 524,
      imgSource: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/529.png',
      type: 'Dragon'
    },
    {
      name: 'Roggenrola',
      id: 524,
      imgSource: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/530.png',
      type: 'Dragon'
    },
    {
      name: 'Roggenrola',
      id: 524,
      imgSource: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/531.png',
      type: 'Dragon'
    },
    {
      name: 'Roggenrola',
      id: 524,
      imgSource: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/532.png',
      type: 'Dragon'
    }
  ]

}
