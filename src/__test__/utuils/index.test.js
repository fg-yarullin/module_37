import {reverseString} from '../../utils/index';

describe("reverseString function test", () => {
    it('Reversed string should be "oleh"', () => {
        expect(reverseString('hello')).toBe('olleh');
    })
});

