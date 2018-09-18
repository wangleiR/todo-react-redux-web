import React from 'react';
import { shallow,mount } from 'enzyme';
import '../../../../setupTest';
import TodoList from "../Container";

describe('about dialog', function () {
    let componment;
    beforeAll(()=>{
        componment = shallow(<TodoList />);
    });

    describe('about todoList show', function () {
        it('should render todoList with correct className', ()=> {
            expect(componment.find(".triangle").length).toBe(1);
        });
    });


    // it('should render text with correct className', ()=> {
    //     expect(componment.find(Home).props()).toBe({text:"123"});
    // });
});