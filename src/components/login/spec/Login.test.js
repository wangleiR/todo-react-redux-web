import React from 'react';
import { shallow,mount } from 'enzyme';
import '../../../../setupTest';
import Login from "../components/Login";

describe('about login', function () {
    let componment;
    beforeAll(()=>{
        componment = shallow(<Login />);
    });

    describe('about login show before commit', function () {

        it('should render dialog with correct className', ()=> {
            expect(componment.find(".static-modal").length).toBe(1);
        });

        it('should render text with correct className', ()=> {
            expect(componment.find(".login-label").length).toBe(2);
        });
    });

    describe('about login', function () {

    });

});