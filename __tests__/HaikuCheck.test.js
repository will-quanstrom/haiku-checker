import { Poem } from './../src/haikuCheck.js';

describe('Poem', () => {

    test('should correctly indentiy how many lines a poem input has', () => {
        var haiku = new Poem('Ah, tranquility! \n Penetrating the very rock, \n A cicada’s voice.')
        expect(haiku.checkLines()).toEqual('Your poem has three lines!');
    })

})