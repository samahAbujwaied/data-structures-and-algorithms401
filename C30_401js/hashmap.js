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
    }
    append(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            return;
        }
        let current = this.head;
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
    }
    get(key) {
        let hash = this.hash(key);
        if (this.map[hash]){

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
}

const hashmap = new Hashmap(1024);
hashmap.add('name', 'Samah');
hashmap.add('nama', 'noor');
hashmap.add('age', 23);
hashmap.add('cat', 'Kitty');
hashmap.add('act', 'Jonny Depp');
hashmap.add('cta', 'nedal');
console.log(hashmap.map[232].head.value);
console.log(hashmap.map[328]);
console.log('get=====>', hashmap.get('name'));
console.log('contains', hashmap.contains('name'));
 
module.exports = Hashmap;