import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../test/testUtils';
import Input from './Input';

const setup = (initialState = {}) => {
    const store = storeFactory(initialState);
    const wrapper = shallow(<Input store={store}/>).dive().dive.length();
    return wrapper;
}

describe('render', () => {
    describe('word has NOT been guessed', () => {
        it('renders component without error', () => {
            
        });
        it('renders input box', () => {
            
        });
        it('renders submit button', () => {
            
        });
        
    });
    describe('word has been guessed', () => {
        it('renders component without error', () => {
            
        });
        it('does NOT render input box', () => {
            
        });
        it('does NOT render submit button', () => {
            
        });
    });
    
});

describe('update state', () => {
    
});
