import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GymLeaders {
  constructor() {}

  getGymLeaderFalkner() {
    return {
      id: 'falkner',
      name: 'Falkner',
      type: 'Flying',
      location: 'Violet City',
      badge: 'Zephyr Badge',
      pokemon: ['Pidgey', 'Pidgeotto'],
      image: 'https://pbs.twimg.com/media/FNb0DxzVUAA5FJQ.jpg'
    };
  }
  getGymLeaderBugsy() {
    return {
      id: 'bugsy',
      name: 'Bugsy',
      type: 'Bug',
      location: 'Azalea Town',
      badge: 'Hive Badge',
      pokemon: ['Scyther', 'Heracross'],
      image: 'https://preview.redd.it/bugsy-scyther-v0-dj9vgavr42ca1.jpg?width=640&crop=smart&auto=webp&s=dfb1d764e5e9e33c0e98781bd9b9cfda4329e3e7'
    };
  }
  getGymLeaderWhitney() {
    return {
      id: 'whitney',
      name: 'Whitney',
      type: 'Normal',
      location: 'Goldenrod City',
      badge: 'Plain Badge',
      pokemon: ['Miltank', 'Clefairy'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmEm4QPHxexZ1Lpv7iUtJ7dpTYOcdwXpWW5Q&s'
    };
  }

  getGymLeaderMorty() {
    return {
      id: 'morty',
      name: 'Morty',
      type: 'Ghost',
      location: 'Ecruteak City',
      badge: 'Fog Badge',
      pokemon: ['Gastly', 'Haunter', 'Gengar'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKQ_MVRAy9NXCP0G8JY5O6LHAtpVG7jqxkhA&s'
    };
  }

  getGymLeaderChuck() {
    return {
      id: 'chuck',
      name: 'Chuck',
      type: 'Fighting',
      location: 'Cianwood City',
      badge: 'Storm Badge',
      pokemon: ['Primeape', 'Poliwrath'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHb_M_Rvquh3DvgDebEcnDmoGLHRQDWPtx5A&s'
    };
  }

  getGymLeaderJasmine() {
    return {
      id: 'jasmine',
      name: 'Jasmine',
      type: 'Steel',
      location: 'Olivine City',
      badge: 'Mineral Badge',
      pokemon: ['Magnemite', 'Steelix'],
      image: 'https://pm1.aminoapps.com/5737/bebcaaa41b0084f03513eead17b87d8193b56530_00.jpg'
    };
  }

  getGymLeaderPryce() {
    return {
      id: 'pryce',
      name: 'Pryce',
      type: 'Ice',
      location: 'Mahogany Town',
      badge: 'Glacier Badge',
      pokemon: ['Seel', 'Dewgong'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP7FE0IwaLDcuq78eOpt8KRRhnDLxkhl-F_A&s'
    };
  }

  getGymLeaderClair() {
    return {
      id: 'clair',
      name: 'Clair',
      type: 'Dragon',
      location: 'Blackthorn City',
      badge: 'Rising Badge',
      pokemon: ['Dragonair', 'Kingdra'],
      image: 'https://pm1.aminoapps.com/5962/e91fc830ccdcb293a4d570c708b0e1b87c457c78_hq.jpg'
    };
  }
}
