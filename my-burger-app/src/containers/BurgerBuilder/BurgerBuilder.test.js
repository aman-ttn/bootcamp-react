import { BurgerBuilder } from './BurgerBuilder';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('<BurgerBuilder />',() => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<BurgerBuilder onInitIngredients={()=>{}}/>);
        
    });

    it('It should render <BuildControls/> when receiveing',() => {
        wrapper.setProps({ings: {salad:0}});
        expect(wrapper.find(BuildControls)).toHaveLength(1);
    });
});