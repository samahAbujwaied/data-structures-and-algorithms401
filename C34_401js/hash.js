'use strict'
const Hashmap =require ('./hashclass')
function uniqueCharacters(string) {
    const Hashmap1 = new Hashmap(1024);

    const arr = string.split("");
    let key;
    let hash;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== " ") {
            key = arr[i].toLowerCase();
            Hashmap1.add(key, "noValue");
            hash = Hashmap1.hash(key);
            if (Hashmap1.storage[hash].head.next) {
                return false;
            }
        }
    }
    return true;
}
// Hashmap1.add('samah', 'osama');
// Hashmap1.add('heba', 'osama');
// Hashmap1.add('batool', 'mostafa');
// Hashmap1.add('alaa', 'hashem');
// Hashmap1.add('haytham', 'mohammad');
// console.log(uniqueCharacters('s'));
module.exports =uniqueCharacters
