import React from 'react';
import {shallow, mount} from 'enzyme';

import FeedBack from './feedback';

describe('<FeedBack />', () => {
    it('Renders without crashing', () => {
        shallow(<FeedBack />);
    });


    it('Renders some feedback', () => {
        let TEST_FEEDBACK = 'You are listening to a game!';

        let wrapper = shallow(<FeedBack feedback={TEST_FEEDBACK}/>);
        expect(wrapper.contains(TEST_FEEDBACK)).toEqual(true);
    });
});