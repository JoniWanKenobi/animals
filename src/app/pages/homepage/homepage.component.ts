import { Component, OnInit } from '@angular/core';

import { AnimalsService } from '../../services/animals.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  animals: any;
  cats: any;

  constructor(private animaleService: AnimalsService) { }

  ngOnInit() {
    this.animaleService.latestAnimals
    .subscribe((animals) => this.useAnimals(animals));
  }

  useAnimals(animals){
    this.animals = animals;
    this.cats = this.onlyCats(animals);
  }

  onlyCats(animals){
    return animals.filter((animal) => animal.type === 'cat');
  }

  addFelix(){
    const felix = {type: 'cat', name: 'felix'};
    this.animaleService.addAnimal(felix);
  }

}
