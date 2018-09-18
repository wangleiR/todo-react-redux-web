import React from 'react';
import { shallow,mount } from 'enzyme';
import '../../../../setupTest';
import Search from "../component/Search";

describe('about search', function () {
    let componment;
    beforeAll(()=>{
        componment = shallow(<Search />);
    });

    describe('about search show', function () {
        it('should render search with correct className', ()=> {
            expect(componment.find(".searchInput").length).toBe(1);
        });
    });

});