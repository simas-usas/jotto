import React from 'react';
import { shallow } from 'enzyme';

import { storeFactory } from '../test/testUtils';
import App from './App';

const setup = (state = {}) => {
    const store = storeFactory(state);
    const wrapper = shallow(<App store={store}/>).dive().dive();
    return wrapper;
}

describe('redux props', () => {
    it('has "success" piece of state as prop', () => {
        const success = true;
        const wrapper = setup({ success });
        const successProp = wrapper.instance().props.success;
        expect(successProp).toBe(success);
    });
    it('has "secretWord" piece of state as prop', () => {
        const secretWord = 'party';
        const wrapper = setup({ secretWord });
        const secretWordProp = wrapper.instance().props.secretWord;
        expect(secretWordProp).toBe(secretWord);
    });
    it('has "guessedWords" piece of state as prop', () => {
        const guessedWords = [ {guessedWord: 'train', letterMatchCount: 3 }];
        const wrapper = setup({ guessedWords });
        const guessedWordsProp = wrapper.instance().props.guessedWords;
        expect(guessedWordsProp).toBe(guessedWords);
    });
    it('"getSecretWord" action creator is a function prop', () => {
        const wrapper = setup();
        const getSecretWordProp = wrapper.instance().props.getSecretWord;
        expect(getSecretWordProp).toBeInstanceOf(Function);
    });
});
