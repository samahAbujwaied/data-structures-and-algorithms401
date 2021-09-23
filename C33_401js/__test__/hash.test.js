'use strict'
const { leftJoin, Hashmap } = require('../leftjoin')

describe('leftJoin Hashmap table ', () => {

    it('Left Join Hashmap table , happy path', () => {

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
        console.log('testtt',joined);
        expect(joined.data[702]).toEqual([ 'samah', 'osama', 'abujwaied' ]);
        expect(joined.data[432]).toEqual([ 'heba', 'osama', 'soud' ]);
        expect(joined.data[915]).toEqual([ 'batool', 'mostafa', 'jweed' ]);
        expect(joined.data[413]).toEqual([ 'alaa', 'hashem', null ]);
        expect(joined.data[900]).toEqual([ 'haytham', 'mohammad', 'zoubi' ]);

    })


})

