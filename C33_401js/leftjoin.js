'use inspect'
class Hashmap {
    constructor(size) {
        this.size = size;
        this.data = new Array(size);
    }

    hash(key) {
        const sumCharCode = key.split('').reduce((acc, char) => {
            return acc + char.charCodeAt(0);
        }, 0);
        const hashKey = (sumCharCode * 19) % this.size;
        return hashKey;
    }

    add(key, value) {
        const hash = this.hash(key);
        console.log('hash  ',hash);
        if (!this.data[hash]) {
            const obj = { [key]: [value] };
            this.data[hash] = obj;
        } else {
            let entries = Object.entries(this.data[hash])[0];
            entries[1].push(value);
        }
    }

    addHashed(hash, value) {
        let output = [];
        let key = Object.keys(this.data[hash])[0];
        output.push(key);
        let existingValues = Object.values(this.data[hash])[0];
        for (let i = 0; i < existingValues.length; i++) {
            output.push(existingValues[i]);
        }
        if (value) {
            let newValues = Object.values(value)[0];
            for (let i = 0; i < newValues.length; i++) {
                output.push(newValues[i]);
            }
        } else {
            output.push(null);
        }
        this.data[hash] = output;
    }
}
function leftJoin(hashmap1, hashmap2) {
    if (hashmap1.data.length > 1) {
        for (let i = 0; i < hashmap1.data.length; i++) {
            if (hashmap1.data[i]) {
                hashmap1.addHashed(i, hashmap2.data[i]);
            }
        }
    }
    return hashmap1;
}

module.exports = {leftJoin ,Hashmap }
const Hashmap1 = new Hashmap(1024);
Hashmap1.add('samah', 'osama');
Hashmap1.add('heba', 'osama');
Hashmap1.add('batool', 'mostafa');
Hashmap1.add('alaa', 'hashem');
Hashmap1.add('haytham', 'mohammad');


const Hashmap2 = new Hashmap(1024);
Hashmap2.add('samah', 'abujwaied');
Hashmap2.add('heba', 'soud');
Hashmap2.add('batool', 'jweed');
Hashmap2.add('haytham', 'zoubi');
Hashmap2.add('ibrahim', 'noor');

let joined = leftJoin(Hashmap1, Hashmap2);

// let joined = leftJoin(hashmap1, hashmap2);
console.log('--------',joined);