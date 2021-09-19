'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;


    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    append(value) {
        console.log('linked list size ', this.size);
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.size++;
            console.log('linked list size ', this.size);
            return;
        }
        let current = this.head;
        this.size++;
        console.log('linked list size ', this.size);
        while (current.next) {
            current = current.next;
        }
        current.next = node;



    }

}

class Hashmap {
    constructor(size) {
        this.size = size;
        this.map = new Array(size);
        this.size2 = 0;
    }
    hash(key) {
        return key.split('').reduce((acc, char) => {
            return acc + char.charCodeAt();
        }, 0) * 1000 % this.size;
    }
    add(key, value) {
        let hash = this.hash(key);
        console.log(hash);
        if (!this.map[hash]) {
            this.map[hash] = new LinkedList();
        }
        let entry = { [key]: value }
        this.map[hash].append(entry);
        this.size2++;
        return hash

    }
    get(key) {
        let hash = this.hash(key);
        if (this.map[hash]) {

            let cur = this.map[hash].head;
            while (cur) {
                if (Object.keys(cur.value) == key)
                    return cur.value
                cur = cur.next

            }
        }
        return 'Exeption'

    }
    contains(key) {
        let hash = this.hash(key);
        if (this.map[hash]) {
            let cur = this.map[hash].head;
            while (cur) {
                if (Object.keys(cur.value) == key)
                    return true
                cur = cur.next
            }
        }
        return false
    }

    repeatedword(word) {
        let repeatedWord = word.split(' ');
        let arr = [];
        for (let index = 0; index < repeatedWord.length; index++) {
            let hashvalue = hashmap.add(repeatedWord[index], repeatedWord[index]);
            arr.push(hashvalue);
            for (let index = 0; index < arr.length; index++) {
                if (hashmap.map[arr[index]].size > 1)
                    return hashmap.map[arr[index]].head.value;

            }
        }
    }
}

const hashmap = new Hashmap(1024);

// console.log('get=====>', hashmap.get('name'));
// console.log('contains', hashmap.contains('name'));
console.log(hashmap.repeatedword('Once upon a time, there was a brave princess who...'.toLowerCase()));
// console.log(hashmap.repeatedword('It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...'.toLowerCase()));
// console.log(hashmap.repeatedword('It was a queer, sultry summer , the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...'.toLowerCase()));

module.exports = Hashmap;