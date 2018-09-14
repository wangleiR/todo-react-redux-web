import React from 'react';
import { shallow,mount } from 'enzyme';
import '../../../../setupTest';
import Dialog from "../component/Dialog";

describe('about dialog', function () {
    let componment;
    beforeAll(()=>{
        componment = shallow(<Dialog />);
    });

    it('should render dialog with correct className', ()=> {
        expect(componment.find(".static-modal").length).toBe(1);
    });

    it('should render text with correct className', ()=> {
        expect(componment.find(Home).props()).toBe({text:"123"});
    });
});