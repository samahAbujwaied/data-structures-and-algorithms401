'use strict';

const AnimalShelter = require('../AnimalShelter');

describe('Testing Animal Shelter', () => {
  it('Testing enqueue cat ', () => {

    let animalShelter = new AnimalShelter();
    let animal1new = { type: 'cat', name: 'harry' };
    let animal2new = { type: 'cat', name: 'catty' };
    animalShelter.enqueue(animal1new);
    animalShelter.enqueue(animal2new);
    expect(animalShelter.prefCat.storage[0].name).toEqual('harry');

  });

  it('Testing empty dog shelter', () => {
    let animalShelter = new AnimalShelter();
    expect(animalShelter.dequeue('dog')).toEqual('empty .....!');
  });

  it('Testing empty cat shelter', () => {
    let animalShelter = new AnimalShelter();
    expect(animalShelter.dequeue('cat')).toEqual('empty .....!');

  });

  it('Testing new animal type', () => {
    let animalShelter = new AnimalShelter();
    let animalnew = { type: 'new', name: 'newnew' };
    animalShelter.enqueue(animalnew);
  });

  it('Testing empty cat shelter', () => {
    let animalShelter = new AnimalShelter();
    expect(animalShelter.dequeue('prefCat')).toEqual(null);

  });

  it('dequeue another type from empty shell', () => {
    let animalShelter = new AnimalShelter();
    expect(animalShelter.dequeue('newanimal')).toEqual(null);
  });



});