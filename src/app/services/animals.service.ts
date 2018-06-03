import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AnimalsService {

  animals: any = [
    {type: 'cat', name: 'Fuffy'},
    {type: 'cat', name: 'miao'},
    {type: 'dog', name: 'brutus'},
    {type: 'dog', name: 'iron'}
  ]

  private animalsBSubject = new BehaviorSubject<any>(this.animals);
  public latestAnimals = this.animalsBSubject.asObservable();

  constructor() { }

  changeAnimals(animals){
    this.animalsBSubject.next(animals);
  }

  addAnimal(animal){
    this.animals.push(animal);
    this.changeAnimals(this.animals);
  }

}
