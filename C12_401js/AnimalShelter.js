'use strict';

const Queue = require('./queue');
class AnimalShelter {
    constructor() {
        this.prefCat = new Queue();
        this.prefDogs = new Queue();
    }
    enqueue(animal) {
        if (animal.type === 'cat') {
            this.prefCat.enqueue(animal);
        } else if (animal.type === 'dog') {
            this.prefDogs.enqueue(animal);

        } else {
            return 'Sorry shoud be dog or cat ...!';  }}
    dequeue(pref) {
        if (pref === 'cat') {
            if (!this.prefCat.isEmpty()) {
                return this.prefCat.dequeue(pref);
            } else {
                return 'empty .....!';
            }
        } else if (pref === 'dog') {

            if (!this.prefDogs.isEmpty()) { return this.prefDogs.dequeue(pref); } else {
                return 'empty .....!';
            }} else {
            return null;
        }


    }
}

module.exports = AnimalShelter;