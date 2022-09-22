import React from 'react';
import { shallow } from 'enzyme';
import Pane from './Pane';

describe('<Pane />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Pane />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
