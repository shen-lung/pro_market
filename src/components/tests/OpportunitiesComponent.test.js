import React from 'react';
import { mount } from '../../enzyme';

import HeadComponent from '../HeadComponent';

describe('Head Component Suit', () => {
    const mountComponent = (props) =>
        mount(<HeadComponent />)
    
    describe('Basic mounting', () => {
        it('should mount head component', () => {
            const wrapper = mountComponent();

            expect(wrapper.find('.head').exists()).toBe(true);
        })
        it('head section', () => {
            const wrapper = mountComponent();

            expect(wrapper.find('.head-content').exists()).toBe(true);
        });
        it('search input field', () => {
            const wrapper = mountComponent();

            expect(wrapper.find('.head__find-input').exists()).toBe(true);
        });
    })
})
