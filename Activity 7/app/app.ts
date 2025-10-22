import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  gyms = [
    { 
      id: 'falkner',
      name: 'Falkner',
      type: 'Flying',
      location: 'Violet City',
      badge: 'Zephyr Badge',
      pokemon: ['Pidgey', 'Pidgeotto'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp92g6P4XrtxoxyQCzf6pa8DwVirXyva3lJA&s'
    },
    { 
      id: 'bugsy',
      name: 'Bugsy',
      type: 'Bug',
      location: 'Azalea Town',
      badge: 'Hive Badge',
      pokemon: ['Scyther', 'Heracross'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8w7Ba3icgi3jfSyFeiWR_BcL-AsnxguDSimonbv5wXOKZJ3HFtYjDX8F8dnVu_kmU_ac&usqp=CAU'
    },
    { 
      id: 'whitney',
      name: 'Whitney',
      type: 'Normal',
      location: 'Goldenrod City',
      badge: 'Plain Badge',
      pokemon: ['Miltank', 'Clefairy'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQdqyNx86x8TqxL2Tax20k4AMlLFwiT92iQQ&s'
    },
    { 
      id: 'morty',
      name: 'Morty',
      type: 'Ghost',
      location: 'Ecruteak City',
      badge: 'Fog Badge',
      pokemon: ['Gastly', 'Haunter', 'Gengar'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_dmQafiZRYBojMHTy3SQPQfAI58UrB1dFng&s'
    },
    { 
      id: 'chuck',
      name: 'Chuck',
      type: 'Fighting',
      location: 'Cianwood City',
      badge: 'Storm Badge',
      pokemon: ['Primeape', 'Poliwrath'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOe9pYivwLyMGb1trzTDWIMDEJdLRF4w-lUw&s'
    },
    { 
      id: 'jasmine',
      name: 'Jasmine',
      type: 'Steel',
      location: 'Olivine City',
      badge: 'Mineral Badge',
      pokemon: ['Magnemite', 'Steelix'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHrw4MinJGxJKjqlnA5OqVnDLjjP1H4BdxZQ&s'
    },
    { 
      id: 'pryce',
      name: 'Pryce',
      type: 'Ice',
      location: 'Mahogany Town',
      badge: 'Glacier Badge',
      pokemon: ['Seel', 'Dewgong'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5_ON4XLLgV2Cz2EIXTe7EJk6jJTSjRwh5BA&s'
    },
    { 
      id: 'clair',
      name: 'Clair',
      type: 'Dragon',
      location: 'Blackthorn City',
      badge: 'Rising Badge',
      pokemon: ['Dragonair', 'Kingdra'],
      image: 'https://pbs.twimg.com/media/Gji7npAX0AA-ZFl.jpg:large'
    }
  ];
}