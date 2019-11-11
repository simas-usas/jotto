import { correctGuess, actionTypes } from './';

describe('correctGuess', () => {
    it('returns an action with type "CORRECT GUESS"', () => {
        const action = correctGuess();
        expect(action).toEqual({ type: actionTypes.CORRECT_GUESS });
    });
});
